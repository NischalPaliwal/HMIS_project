import {Router} from 'express'
import { signUp } from '../controllers/patient.controller.js';
const router = Router();

router.route('/signUp').post(signUp);


// router.route("/login").post(loginUser);

// router.route("/logout").post(verifyJWT, logoutUser);

export default router;