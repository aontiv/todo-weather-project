def usernameMatch(users, username):
    result = None
    for user in users:
        if user["username"] == username:
            result = user

    return result

def passwordMatch(user, password):
    result = None
    if user["password"] == password:
        result = { "id": user["id"], "username": user["username"] }

    return result
