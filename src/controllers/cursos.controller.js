import cursoModel from '../models/Cursos'

export const createCurso=async (req, res)=>{
    const {nombre, categoria, precio, imgUrl, descripcion}=req.body;

    const newCurso=new cursoModel({nombre, categoria, precio, imgUrl, descripcion});

    const productoGuardado= await newCurso.save();
    res.status(201).json(productoGuardado);
}

export const getCursos=async (req, res)=>{
    const cursos=await cursoModel.find();
    res.json(cursos);
}

export const getCursoById=async (req, res)=>{
    const curso=await cursoModel.findById(req.params.id);
    res.status(201).json(curso);    
}

export const  updateCursoById=async (req, res)=>{
    const cursoUpdated=await cursoModel.findOneAndUpdate(req.params.id, req.body, {
        new:true
    });
    res.status(201).json(cursoUpdated);
    
}

export const  deleteCursoById=async (req, res)=>{
    const cursoDeleted=await cursoModel.findByIdAndDelete(req.params.id);
    res.status(201).json(cursoDeleted);
    
}