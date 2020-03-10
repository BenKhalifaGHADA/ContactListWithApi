const mongoose= require('mongoose')
const Schema= mongoose.Schema
//create schema
const ItemSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    Telephone:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        require:true

    }
})
module.exports= Lists=mongoose.model("list",ItemSchema)