import Role from '../models/Role'
export const crearRoles=async()=>{
    try {
        const count=await Role.estimatedDocumentCount();
        if(count>0) return;

        await Promise.all([
            new Role({name:'docente'}).save(),
            new Role({name:'estudiante'}).save(),
            new Role({name:'admin'}).save()
        ]);
    } catch (error) {
        console.error(error);
    }

}