const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/TASK-MANAER'

mongoose
.connect(connectionString).then(()=>console.log('CONNECTED TO THE DB......'))
.catch((err)=>console.log(err))