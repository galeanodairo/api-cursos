import {Schema, model} from 'mongoose'

const roleSchema=new Schema({
    name:String
},
{
    versionKey:false
});

export const ROLES=['estudiante', "admin", "docente"];

export default model('roleModel', roleSchema);