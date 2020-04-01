
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data',{useNewUrlParser:true, useUnifiedTopology:true})
.then( ()=> console.log("connected to mongodb"))
.catch(err => console.log("could not connect mongo",err));


const dataSchema = new mongoose.Schema({
    firstName: {type : String },
    lastName: {type: String },
})


module.exports = mongoose.model('user',dataSchema);


