# Realtime Chart
Real-time Chart using NodeJs, MongoDB, Socket.IO and Highcharts

## Step 1: Setup MongoDB:

1- Create a new database in MongoDB named charts

  `` use charts``  

2- Create a Capped Collection

`` db.createCollection('data', { capped: true, size: 100000 }); ``

## Step 2: Setup NodeJs:

1- Change MongoDB URI in app.js

`` var mongodbUri = "YOUR_MONGODB_URI"``

2- Install dependencies

`` npm install ``


## Step 3: Start Application:

1- Start Node App

`` node app ``

2- Open your browser and go to:

`` http://localhost:3000 ``

3- Populate data collection

``python populate_database.py``

or insert manually in mongoDB shell

``db.data.insert({"number":1, "chart_name":"line_chart"});``
