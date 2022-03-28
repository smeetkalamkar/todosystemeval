const mongoose = require('mongoose');



const todosSchema = new mongoose.Schema({
    title:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},{
    timestamps:true,
    versionKey:false
})









const Todos = mongoose.model("todos",todosSchema);
module.exports = Todos;