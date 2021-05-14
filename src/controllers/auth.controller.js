import userModel from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';

export const registro=async(req, res)=>{
    const {username, email, password, roles}=req.body;
    
    const newUser=new userModel({
        username:username,
        email:email,
        password:userModel.ecriptaPassword(password),
    });

    if(roles){
        const founsRoles=await Role.find({name:{$in:roles}});
        newUser.roles=founsRoles.map(role=>role._id);
    }else{
        const role=await Role.findOne({name:'estudiante'});
        newUser.roles=[role._id];
    }


    const savedUser=await newUser.save();
    console.log(savedUser);

    const token=jwt.sign({id:savedUser._id}, config.SECRET, {
        expiresIn:86400//24Horas
    })

    res.json({token});
}


export const login=async(req, res)=>{
    const {password, email}=req.body;
    const userFound=await userModel.findOne({email: email}).populate("roles");
    if(!userFound) return res.status(400).json({mesage:'Usuario no econtrado'});
    const coincidePassword=userModel.comparaPassword(req.body.password, userFound.password)
    if(!coincidePassword) return res.status(400).json({mesage:'Contraseña Invalida'});
    console.log(userFound);

    const token=jwt.sign({id:userFound._id}, config.SECRET, {
        expiresIn:86400//24Horas
    })

    res.json({token:token});
}