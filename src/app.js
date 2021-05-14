import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cursosRoute from './routes/cursos.routes'
import authRoute from './routes/auth.routes'
import {crearRoles} from './libs/initialSetup'
import userRoute from './routes/user.routes'

const app=express();
crearRoles();

app.set('pkg', pkg);

app.use(express.json());

app.use(morgan('dev'));

app.get('/' ,(req, res)=>{
    res.json({
        autor:pkg.author
    });
});
app.use('/api/auth', authRoute);
app.use('/api/cursos',cursosRoute);
app.use('/api/users',userRoute);

export default app;