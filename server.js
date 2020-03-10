const express=require('express')
const mongoose=require('mongoose')
const {MongoClient,ObjectID}=require('Mongodb')
const bodyParser=require('body-parser')

const assert= require('assert')

const listes=require('./rooters/Api/Listes')

const app=express()

app.use(bodyParser.json());

//DB CONFIG
const db= require('./configuration/keys').mongoURI

//const db='mongodb://localhost:27017'
//const dataBase="ContactList-api"

//CONNECT TO MONGO
mongoose
.connect(db, {useUnifiedTopology: true, useNewUrlParser:true})
.then(()=>console.log('mongodb connected...'))
.catch(err=>console.log(err))


//utilisation des routers
app.use("/Api/listes",listes)

const port= process.env.port ||5000
app.listen(port,()=>console.log('server start on port ${port}'))




    

