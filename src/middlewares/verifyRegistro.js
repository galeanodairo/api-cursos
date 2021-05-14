import {ROLES} from '../models/Role'
import User from '../models/User';
export const checkRoleExisted=(req, res, next)=>{
    if(req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
            const rol = req.body.roles[i];
            if(!ROLES.includes(rol)){
                return res.status(400).json({
                    message:`el rol ${rol} no existe`
                })
            }
            
        }
    }
    next();
}

export const exiteUsuario=async (req, res, next)=>{
    const user=await User.findOne({username: req.body.username});
    if(user) return res.status(400).json({'message': 'Este usuario ya existe'});

    const email=await User.findOne({email: req.body.email});
    if(email) return res.status(400).json({'message': 'Este correo ya existe'});

    next();



}