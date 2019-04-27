import json
from flask_sqlalchemy import SQLAlchemy
from AccuweatherClient import get_location_key
from Helpers import usernameMatch, passwordMatch
from flask import Flask, request, jsonify, render_template, make_response

app = Flask(__name__, template_folder="./dist", static_folder="./dist/static")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/database.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, unique=True, nullable=False)
    username = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

    todos = db.relationship("Todo", backref="user", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    todo_id = db.Column(db.String, unique=True, nullable=False)
    timestamp = db.Column(db.String, unique=True, nullable=False)
    text = db.Column(db.String, nullable=False)
    complete = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Todo %r>' % self.text

db.create_all()

HEADERS = { "Content-Type": "application/json" }

@app.route("/", methods=["GET"])
def root():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        rq_data = request.get_json()
        user = User.query.filter_by(username=rq_data["username"]).first()
        auth_user = user.password == rq_data["password"] if user else None

        result = None
        if not user:
            result = (json.dumps({ "message": "{} not found".format(rq_data["username"]) }), 400, HEADERS)
        if user and not auth_user:
            result = (json.dumps({ "message": "{}'s password is incorrect".format(rq_data["username"]) }), 400, HEADERS)
        if user and auth_user:
            result = (json.dumps({ "userId": user.user_id, "username": user.username }), 200, HEADERS)
        
        return make_response(result)
    else:
        return render_template("index.html")

@app.route("/get_todos/<id>", methods=["GET"])
def get_todos(id):
        todos = Todo.query.filter_by(user_id=id).all()

        user_todos = []
        for todo in todos:
            user_todos.append({ "id": todo.id, "todoId": todo.todo_id, "timestamp": todo.timestamp, "text": todo.text, "complete": todo.complete, "userId": todo.user_id })

        return jsonify(user_todos)

@app.route("/add_user", methods=["POST"])
def add_user():
    rq_data = request.get_json()
    rq_user = User.query.filter_by(username=rq_data["username"]).first()

    if not rq_user:
        new_user = User(user_id=rq_data["userId"], username=rq_data["username"], password=rq_data["password"])

        db.session.add(new_user)
        db.session.commit()

        return jsonify({ "userId": new_user.user_id, "username": new_user.username })
    else:
        return make_response(json.dumps({ "message": "{} already exists".format(rq_data["username"]) }), 400, HEADERS)

@app.route("/add_todo", methods=["POST"])
def add_todo():
    rq_data = request.get_json()
    todo = Todo(todo_id=rq_data["todoId"], timestamp=rq_data["timestamp"], text=rq_data["text"], complete=rq_data["complete"], user_id=rq_data["userId"])

    db.session.add(todo)
    db.session.commit()

    return jsonify({ "message": "new todo with id: {} added".format(todo.todo_id) })

@app.route("/update_todo", methods=["UPDATE"])
def update_todo():
    rq_data = request.get_json()
    todo = Todo.query.filter_by(todo_id=rq_data["todoId"]).first()

    todo.complete = rq_data["complete"]
    db.session.commit()

    return jsonify({ "message": "todo with id: {} updated".format(rq_data["todoId"])})

@app.route("/delete_todo/<todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    todo = Todo.query.filter_by(todo_id=todo_id).first()
    
    db.session.delete(todo)
    db.session.commit()
    
    return jsonify({ "message": "todo with id: {} was deleted".format(todo_id) })

@app.route("/get_weather_forecast", methods=["POST"])
def get_weather_forecast():
    rq_data = request.get_json()
    weather_forecast = get_location_key(rq_data["ip"])
    return jsonify(weather_forecast["DailyForecasts"])

if __name__ == "__main__":
    app.env = "development"
    app.run(debug=True)
