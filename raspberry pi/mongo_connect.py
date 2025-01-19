from pymongo import MongoClient

# Replace with your MongoDB Atlas connection string
CONNECTION_STRING = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority"

# Connect to MongoDB Atlas
try:
    client = MongoClient(CONNECTION_STRING)
    print("Connected to MongoDB Atlas successfully!")

    # Example: Access a database and collection
    db = client['your_database']  # Replace with your database name
    collection = db['your_collection']  # Replace with your collection name

    # Example: Insert a document
    sample_data = {"name": "Raspberry Pi", "type": "Single Board Computer", "status": "Connected"}
    collection.insert_one(sample_data)
    print("Document inserted successfully!")

    # Example: Fetch and print documents
    for doc in collection.find():
        print(doc)

except Exception as e:
    print(f"An error occurred: {e}")
