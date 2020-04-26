import axios from "axios";

export const createGame = name => axios.post(`${process.env.REACT_APP_BASE_URL}create-game`, { name });

export const getGamePlayers = id => axios.get(`${process.env.REACT_APP_BASE_URL}game/players/${id}`);
