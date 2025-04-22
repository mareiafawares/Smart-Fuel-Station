const mongoose = require('mongoose')
<<<<<<< Updated upstream
const bcrypt=require('bcrypt')
const UserSchema = new mongoose.Schema({
   name:{type:String,required:true},
=======

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
>>>>>>> Stashed changes
    email:{type:String,required:true},
    password:{type:String,required:true},
   
})
<<<<<<< Updated upstream
UserSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next()
    try{
       const salt =await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password,salt)
      next()
    }
    catch(error){
        next(error)


    }

})

=======


>>>>>>> Stashed changes


module.exports=mongoose.model('User',UserSchema)
