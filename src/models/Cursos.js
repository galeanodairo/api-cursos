import {Schema, model} from 'mongoose'

const cursoSchema= new Schema({
    nombre:String,
    categoria:String,
    precio:Number,
    imgUrl:String,
    descripcion:String
},{
    timestamps:true,
    versionKey:false
});

export default model('cursoModel', cursoSchema);