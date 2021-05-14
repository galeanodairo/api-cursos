import {Schema, model} from 'mongoose'

import * as bcrypt from 'bcryptjs';

const userSchema=new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:[{
        ref:"roleModel",
        type:Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
});

userSchema.statics.ecriptaPassword=(password)=>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;

}
userSchema.statics.comparaPassword=(password, recivePassword)=>{
    return bcrypt.compareSync(password, recivePassword);

}
export default model('userModel', userSchema);