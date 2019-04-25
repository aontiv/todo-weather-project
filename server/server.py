import json
from flask_sqlalchemy import SQLAlchemy
from helpers import usernameMatch, passwordMatch
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, template_folder="./dist", static_folder="./dist/static")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/database.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

    todos = db.relationship("Todo", backref="user", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.String, unique=True, nullable=False)
    text = db.Column(db.String, nullable=False)
    complete = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Todo %r>' % self.text

db.create_all()

@app.route("/", methods=["GET"])
def root():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        rq_data = request.get_json()
        user = User.query.filter_by(username=rq_data["username"]).first()
        auth_user = user.password == rq_data["password"]

        result = None
        if not user:
            result = {"status": 400, "message": "{} not found".format(rq_data["username"])}
        if user and not auth_user:
            result = {"status": 400, "message": "{}'s password is incorrect".format(rq_data["username"])}
        if user and auth_user:
            result = {"status": 200, "body": { "id": user.id, "username": user.username }}
        
        return jsonify(result)
    else:
        return render_template("index.html")

@app.route("/get_todos/<id>", methods=["GET"])
def get_todos(id):
        todos = Todo.query.filter_by(user_id=id).all()

        user_todos = []
        for todo in todos:
            user_todos.append({ "id": todo.id, "timestamp": todo.timestamp, "text": todo.text, "complete": todo.complete, "userId": todo.user_id })

        return jsonify({ "status": 200, "body": user_todos })

@app.route("/add_user", methods=["POST"])
def add_user():
    rq_data = request.get_json()
    new_user = User(username=rq_data["username"], password=rq_data["password"])

    db.session.add(new_user)
    db.session.commit()

    return jsonify({ "status": 200, "body": { "id": new_user.id, "username": new_user.username } })

@app.route("/add_todo", methods=["POST"])
def add_todo():
    rq_data = request.get_json()
    todo = Todo(timestamp=rq_data["timestamp"], text=rq_data["text"], complete=rq_data["complete"], user_id=rq_data["userId"])

    db.session.add(todo)
    db.session.commit()

    return jsonify({ "status": 200, "message": "new todo with id: {} added".format(todo.id) })

@app.route("/update_todo", methods=["UPDATE"])
def update_todo():
    rq_data = request.get_json()
    todo = Todo.query.filter_by(id=rq_data["id"]).first()

    todo.complete = rq_data["complete"]
    db.session.commit()

    return jsonify({ "status": 200, "message": "todo with id: {} updated".format(rq_data["id"])})

@app.route("/delete_todo/<todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    
    db.session.delete(todo)
    db.session.commit()
    
    return jsonify({ "status": 200, "message": "todo with id: {} was deleted".format(todo_id) })

if __name__ == "__main__":
    app.env = "development"
    app.run(debug=True)
