import { Router } from 'express';
import multer from 'multer'
import { CreateUserController } from './app/controllers/UsersControllers/CreateUserController';
import { AuthUserController } from './app/controllers/UsersControllers/AuthUserController';
import { UserDetailsController } from './app/controllers/UsersControllers/UserDeatilsControllers';
import { isAuthenticated } from './app/middlewares/isAuthenticated';
import { CreateServiceController } from './app/controllers/ServiceControllers/CreateServiceController';
import { CreateCollaboratorController } from './app/controllers/CollaboratorControllers/CreateCollaborator';
import { CreateHourController } from './app/controllers/HoursControllers/CreateHourController';
import { CreateAppointmentController } from './app/controllers/AppointmentsControllers/CreateAppointmentController';
import { ListServiceController } from './app/controllers/ServiceControllers/ListServiceServicesController';
import { ListNotificationController } from './app/controllers/NotificationControllers/ListAllNotificationController';
import { ListCollaboratorController } from './app/controllers/CollaboratorControllers/ListCollaboratorController';
import { ListAppointmentController } from './app/controllers/AppointmentsControllers/ListAppointmentControllers';
import { ListHourController } from './app/controllers/HoursControllers/ListHourController';
import { ListBusyHourAppointmentController } from './app/controllers/AppointmentsControllers/ListBusyHourAppointmentsController';
import { UpdateUserController } from './app/controllers/UsersControllers/UpdateUserController';
import { CancelAppointmentController } from './app/controllers/AppointmentsControllers/CancelAppointmentControllers';
import { UpdateCollaboratorController } from './app/controllers/CollaboratorControllers/UpdateCollaboratorController';
import { UpdateHourController } from './app/controllers/HoursControllers/UpdateHourController';
import { UpdateServiceController } from './app/controllers/ServiceControllers/UpdateServiceController';
import { GetAllUserController } from './app/controllers/UsersControllers/GetAllUserController';
import { DeleteCollaboratorController } from './app/controllers/CollaboratorControllers/DeleteCollaboratorController';
import { DeleteHourController } from './app/controllers/HoursControllers/DeleteHourController';
import { DeleteServiceController } from './app/controllers/ServiceControllers/DeleteServiceController';
import { DeleteUserController } from './app/controllers/UsersControllers/DeleteUserController';
import UploadConfig from '../src/config/Multer/multer';


const router = Router();
const upload = multer(UploadConfig.upload("./tmp"))

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/service', isAuthenticated,upload.single('file'),new CreateServiceController().handle)
router.post('/collaborator', isAuthenticated,upload.single('file'),new CreateCollaboratorController().handle)
router.post('/hours', isAuthenticated,new CreateHourController().handle)
router.post('/appointments', isAuthenticated,new CreateAppointmentController().handle)
router.get('/services', isAuthenticated,new ListServiceController().handle)
router.get('/users', isAuthenticated,new GetAllUserController().handle)
router.get('/me', isAuthenticated,new UserDetailsController().handle)
router.get('/notification', isAuthenticated,new ListNotificationController().handle)
router.get('/collaborators', isAuthenticated,new ListCollaboratorController().handle)
router.get('/appointments', isAuthenticated,new ListAppointmentController().handle)
router.get('/hours', isAuthenticated,new ListHourController().handle)
router.get('/scheduledhours', isAuthenticated,new ListBusyHourAppointmentController().handle)
router.put('/users', isAuthenticated,upload.single('file'),new UpdateUserController().handle )
router.put('/collaborator/:id', isAuthenticated,upload.single('file'),new UpdateCollaboratorController().handle)
router.put('/hours/:id', isAuthenticated,new UpdateHourController().handle)
router.put('/services/:id', isAuthenticated,upload.single('file'),new UpdateServiceController().handle)
router.delete('/cancel/:id', isAuthenticated,new CancelAppointmentController().handle )
router.delete('/collaborator/:id', isAuthenticated,new DeleteCollaboratorController().handle )
router.delete('/hour/:id', isAuthenticated,new DeleteHourController().handle )
router.delete('/service/:id', isAuthenticated,new DeleteServiceController().handle )
router.delete('/users/:id', isAuthenticated,new DeleteUserController().handle )

export { router }; 