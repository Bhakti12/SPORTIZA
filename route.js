import express from 'express';
import { getTournament, addTournament, getTournamentById, editTournament, deleteTournament } from '../controller/tour-controller.js';

const router = express.Router();

router.get('/', getTournament);
router.post('/add', addTournament);
router.get('/:id', getTournamentById);
router.put('/:id', editTournament);
router.delete('/:id', deleteTournament);

export default router;