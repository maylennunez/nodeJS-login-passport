const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: String,
   password: String,
});

userSchema.methods.encryptP(parameter) password: any { 
 return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methos.comparePassword = function (password){
 return bcrypt.compare(password, this.password);
};



module.exports = mongoose.model('users', userSchema)
