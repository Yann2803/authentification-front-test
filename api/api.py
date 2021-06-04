from flask import Flask, request

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return{
        'username': "Ameni",
        'password': "Bonjour"
     }

@app.route('/log', methods=['POST'])
def api():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email , password)

