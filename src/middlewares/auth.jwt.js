import jwt from 'jsonwebtoken'
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';
export const verifyToken=async(req, res, next)=>{
    try {
        const token=req.headers["x-acces-token"];
        if(!token) return res.status(403).json({message:'No se envio el token'});

        const decoded=jwt.verify(token, config.SECRET);
        req.userId=decoded.id;
        const user=await User.findById(req.userId, {password:0});
        if(!user) return res.status(404).json({message:'Usuario no encontrado'})
        console.log(user);
        next();
    } catch (error) {
        res.status(400).json({message:"Token invalido y no autorizado"});
    }
}

export const isDocente=async(req, res, next)=>{
    const user=await User.findById(req.userId, {password:0});
    const roles=await Role.find({_id:{$in: user.roles}});

    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name==="docente"){
            next();
            return;
        }
                
    }

    return res.status(403).json({message:"No tiene permisos de docentes"})
    console.log(roles);

}
export const isAdmin=async(req, res, next)=>{
    const user=await User.findById(req.userId, {password:0});
    const roles=await Role.find({_id:{$in: user.roles}});

    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name==="admin"){
            next();
            return;
        }
                
    }

    return res.status(403).json({message:"No tiene permisos de Admin"})
    console.log(roles);
    
}