import mongoose from 'mongoose'; 

const userSchema = mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    role:String,
    action:Boolean,
})

export default mongoose.model('user',userSchema)