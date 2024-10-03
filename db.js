const mongoose = require('mongoose');
require('dotenv').config();
//const mongoUrl = 'mongodb://localhost:27017/onlinecourse';
//const mongoUrl ='mongodb+srv://nikitadesai0796:5RAXfSQdvuMDeben@cluster0.jmveu.mongodb.net/'

const mongoUrl =  process.env.mongoDB_Url;
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection ;

db.on('connected',()=>{
    console.log("connected mongodb server")
} );
db.on('error',(err)=>{
    console.log("error while connecting",err)
});