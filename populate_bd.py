from pymongo import MongoClient
import datetime
import time

client = MongoClient("")

db = client.consumptions

collection = db['teste2']

for x in range(1, 100):
#for x in range(0, 1):
	post = {"type":"message", "text": 4254.05287267956, "date": datetime.datetime.utcnow()}
	#time.sleep(2)
	post_id = collection.insert_one(post).inserted_id
	print post_id
