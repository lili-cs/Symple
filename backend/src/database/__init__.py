from firebase_admin import credentials, firestore, initialize_app


# Initialize Firestore DB
cred = credentials.Certificate('firestore-key.json')
db_app = initialize_app(cred)
db = firestore.client()

