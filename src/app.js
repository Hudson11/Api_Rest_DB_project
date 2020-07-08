const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const userRouter = require('./routers/UserRouter')
const userFireRouter = require('./routers/UserFireRoute')

class App {

  constructor(){
    this.app = express()
    this.middlewares()
    this.database()
    this.routers()
  }

  routers(){
    this.app.use(userRouter)
    this.app.use(userFireRouter)
  }
  
  middlewares(){
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  database(){
    mongoose.connect('URL MONGO DB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Conectado ao mongo')
    }).catch((err) => {
      console.log(err)
    })
  }

}

module.exports = new App().app


