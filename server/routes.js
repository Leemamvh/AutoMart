import express from 'express';
import { createUser, getUser } from './controller/user';
import { validateUser } from './middleware/userValidations';

const router = express.Router();

router.route('/users')
  .post(validateUser, createUser)

router.route('/users/:id')
  .get(getUser)
  
export default router