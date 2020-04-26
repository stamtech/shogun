import axios from "axios";

export const createGame = name => axios.post(`${process.env.REACT_APP_BASE_URL}/create-game`, { name });

export const getGameDetails = id => axios.get(`${process.env.REACT_APP_BASE_URL}/get-game/${id}`);
