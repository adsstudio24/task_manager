from flask import Flask, request, jsonify

app = Flask(__name__)
tasks = []

@app.route('/task', methods=['POST'])
def add_task():
    data = request.json
    tasks.append(data)
    return jsonify({"message": "Завдання додано!"})

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True)
