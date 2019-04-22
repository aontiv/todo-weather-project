import json
from helpers import usernameMatch, passwordMatch
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, template_folder="./dist", static_folder="./dist/static")

@app.route("/", methods=["GET"])
def root():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        rq_data = request.get_json()
        db_json = open("./db/db.json", "r")
        db_data = json.loads(db_json.read())

        user = usernameMatch(db_data["usersTable"], rq_data["username"])
        auth_user = passwordMatch(user, rq_data["password"]) if user else None

        result = None
        if not user:
            result = {"status": 400, "message": "{} not found".format(rq_data["username"])}
        if user and not auth_user:
            result = {"status": 400, "message": "{}'s password is incorrect".format(rq_data["username"])}
        if user and auth_user:
            result = {"status": 200, "body": auth_user}
        
        db_json.close()
        return jsonify(result)
    else:
        return render_template("index.html")

@app.route("/get_todos/<user_id>", methods=["GET"])
def get_todos(user_id):
        db_json = open("./db/db.json", "r")
        db_data = json.loads(db_json.read())
        
        todos = []
        for todo in db_data["todosTable"]:
            if todo["userId"] == user_id:
                todos.append(todo)

        db_json.close()
        return jsonify({ "status": 200, "body": todos })

@app.route("/add_user", methods=["POST"])
def add_user():
    rq_data = request.get_json()
    db_json = open("./db/db.json", "r")
    db_data = json.loads(db_json.read())

    new_users = []
    for user in db_data["usersTable"]:
        new_users.append(user)
    new_users.append(rq_data)

    db_data["usersTable"] = new_users
    db_json_new = json.dumps(db_data, indent=4);

    new_db = open("./db/db.json", "w")
    new_db.write(db_json_new)
    
    new_db.close()
    db_json.close()
    return jsonify({ "status": 200, "body": { "id": rq_data["id"], "username": rq_data["username"] } })

@app.route("/add_todo", methods=["POST"])
def add_todo():
    rq_data = request.get_json()
    db_json = open("./db/db.json", "r")
    db_data = json.loads(db_json.read())

    new_todos = []
    for todo in db_data["todosTable"]:
        new_todos.append(todo)
    new_todos.append(rq_data)

    db_data["todosTable"] = new_todos
    db_json_new = json.dumps(db_data, indent=4)

    new_db = open("./db/db.json", "w")
    new_db.write(db_json_new)

    new_db.close()
    db_json.close()
    return jsonify({ "status": 200, "message": "new todo with id: {} added".format(rq_data["id"]) })

if __name__ == "__main__":
    app.run(debug=True)
