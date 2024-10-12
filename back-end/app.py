from flask import Flask, request, jsonify
from flask_cors import CORS
from config import DevelopmentConfig, ProductionConfig
import os

"""
Frontend URL: http://127.0.0.1:5173 (or your local IP: http://<your_ip>:5173)
Backend API: Proxied via Vite from /api to http://127.0.0.1:5000/api (or your local IP: http://<your_ip>:5000/api)
"""


app = Flask(__name__)
if os.environ.get("FLASK_DEBUG") == "1":
    app.config.from_object(DevelopmentConfig)
else:
    app.config.from_object(ProductionConfig)

CORS(app, resources={r"/api/*": {"origins": app.config["CORS_ORIGINS"]}})

# Ensure your routes are prefixed with /api.
# See if you can move these logic functions to logic.py


# API route to return a simple message
@app.route("/api/playground", methods=["GET"])
def playground():
    return jsonify(message="Playground API")


# API route to get users
@app.route("/api/users", methods=["GET"])
def get_users():
    users = [
        {"id": 1, "name": "Vicente"},
        {"id": 2, "name": "Mohamed"},
    ]
    return jsonify({"users": users})


# API route to create an item (can be extended to save to a database)
@app.route("/api/items", methods=["POST"])
def create_item():
    data = request.get_json()
    item = {
        "id": 1,
        "name": data.get("name"),
        "description": data.get("description"),
    }
    return jsonify({"item": item}), 201


# Run the Flask app on port 5000
if __name__ == "__main__":
    # For local development, you can run on localhost
    app.run(port=5000, debug=os.environ.get("FLASK_DEBUG") == "1")

    # If you want to access this from other devices on your network, uncomment the line below
    # Replace '0.0.0.0' with your machines local IP address if needed (e.g., 192.168.x.x)
    # app.run(host='0.0.0.0', port=5000)
