import { orderBy, findIndex } from 'lodash';
import { fetchData } from '../utils/functions';
import { END_POINT } from '../utils/constants';

const getPlayers = async (req, res, next) => {
    try {
        const {
            data: { players }
        } = await fetchData(END_POINT);
        req.players = players;
        next();
    } catch (err) {
        next({ message: 'Failed to fetch data', status: 404 });
    }
};

const sortPlayers = (req, res) => {
    const { players } = req;
    const playersSorted = orderBy(players, ['id']);
    res.send(playersSorted);
};

const findPlayers = (req, res, next) => {
    const { players } = req;
    const playerID = parseInt(req.params.id, 10);
    const indexPlayer = findIndex(players, { id: playerID });
    if (indexPlayer === -1) {
        return next({ message: 'Player not found', status: 404 });
    }
    res.json(players[indexPlayer]);
};

export { getPlayers, sortPlayers, findPlayers };
