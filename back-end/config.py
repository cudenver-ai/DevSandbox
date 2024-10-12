class Config:
    DEBUG = False
    TESTING = False


class DevelopmentConfig(Config):
    DEBUG = True
    CORS_ORIGINS = ["http://127.0.0.1:5173", "http://localhost:5173"]
    # Also, add your local IP address for accessing the backend from another device
    # CORS_ORIGINS.append("http://<your_private_IP>:5173")


class ProductionConfig(Config):
    DEBUG = False
    CORS_ORIGINS = [
        "http://192.168.1.100:5173"
        # Replace with your production IP address
    ]
