import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/cursos-dgv",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
    .then(db=>console.log('Todo bien con la BD'))
    .catch(err=>console.error(err))