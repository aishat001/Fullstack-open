import express from 'express';
import diagnoseService from '../services/diagnoseService';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
  res.send(diagnoseService.getEntries());
});

diagnosesRouter.post('/', (_req, res) => {
  res.send('Saving a new diagnoses!');
});

export default diagnosesRouter;