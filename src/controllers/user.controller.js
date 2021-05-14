import User from "../models/User";
import Role from '../models/Role';

export const updateUser =async(req, res)=>{
    console.log(req.body.roles)

    if(req.body.roles!=undefined){
        if(req.body.roles){
            const founsRoles=await Role.find({name:{$in:req.body.roles}});
            req.body.roles=founsRoles.map(role=>role._id);
        }else{
            const role=await Role.findOne({name:'estudiante'});
            req.body.roles[role._id];
        }
    }
    const cursoUpdated=await User.findOneAndUpdate(req.params.id, req.body, {
        new:true
    });
    res.status(201).json(cursoUpdated);
}

export const getUsuarios=async (req, res)=>{
    const usuarios=await User.find();
    res.status(200).json(usuarios);
}