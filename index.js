import './dotenv.js';
import express from 'express';
import path from 'path';
import ejslayout from 'express-ejs-layouts';
import route from './src/routes/routes.js';
import adminRoutes from './src/routes/AdminRoute.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
const server = express();


server.use(session({
    secret: process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

server.use(ejslayout);
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));
server.use(express.urlencoded({extended:true}));
server.use('/a',auth, route);
// server.use('/admin', adminRoutes);


server.use('/',adminRoutes);

server.use((req, res)=>
{
    res.render('invalidUrl')
})

export default server;