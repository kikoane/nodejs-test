import { Router } from 'express';
import { getPlayers, sortPlayers, findPlayers } from './controller';

const router = new Router();

router.get('/', getPlayers, sortPlayers);
router.get('/:id', getPlayers, findPlayers);

export default router;
