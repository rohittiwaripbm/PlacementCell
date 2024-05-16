import express from 'express';

import { getSignUp, postSignUp, getLoginIn, postLoginIn,postAllStudent } from '../controller/admin.controller.js';
const adminRoutes = express.Router();

adminRoutes.get('/signup', getSignUp);
adminRoutes.post('/signup', postSignUp);

adminRoutes.get('/',getLoginIn);
adminRoutes.post('/login', postLoginIn);

adminRoutes.post('/logincheck',postAllStudent )

export default adminRoutes;