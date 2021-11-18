import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080/tournaments';

export const getTournament = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addTournament = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteTournament = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editTournament = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}