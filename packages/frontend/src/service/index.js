import axios from "axios";

export const createGame = player => axios.post(`${process.env.REACT_APP_BASE_URL}/create-game`, { player });

export const getGameDetails = id => axios.get(`${process.env.REACT_APP_BASE_URL}/get-game/${id}`);

export const addPlayer = (id, player) => axios.post(`${process.env.REACT_APP_BASE_URL}/add-player`, { id, player });
