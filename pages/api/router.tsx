import express, { Router } from 'express';
import generateInfo from './generateInfo';

const router: Router = express.Router();

router.post('/generateInfo', generateInfo);

export default router;