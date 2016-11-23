# Realtime Chart
Real-time graph with NodeJs, MongoDB, Socket.IO and Highcharts

## 1º Setup MongoDB:

1- Create a new database in MongoDB named charts

  `` use charts ``  

2- Create a Capped Collection

`` db.createCollection('data', { capped: true, size: 100000 }); ``



