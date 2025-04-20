import express from 'express'
import { BusinessInfoRead, BusinessInfoUpdate, ChangePassword, ForgetOtp, ForgetPassword, Login, Logout } from '../controllers/adminController.js';
import Authorized from '../middlewares/authorized.js';

const AdminRouter = express.Router()

AdminRouter.post('/admin/login', Login)
AdminRouter.post('/admin/logout', Logout)
AdminRouter.post('/admin/password/forget/otp', ForgetOtp)
AdminRouter.put('/admin/password/forget', ForgetPassword)
AdminRouter.put('/admin/password/change', Authorized, ChangePassword)
AdminRouter.get('/admin/business/info/read', Authorized, BusinessInfoRead)
AdminRouter.put('/admin/business/info/update', Authorized, BusinessInfoUpdate)

export default AdminRouter;