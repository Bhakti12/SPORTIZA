import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getTournament, editTournament } from '../Service/api';

const initialValue = {
    gamename: '',
    gametype: '',
    playerparticipate: '',
    totalplayer: '',
    place: '',
    startdate: '',
    enddate: '',
    entryfees: '',
    winprice: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditTournament = () => {
    const [tour, setTournament] = useState(initialValue);
    const { gamename,gametype,playerparticipate,totalplayer,place,startdate,enddate,entryfees,winprice } = tour;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadTournamentDetails();
    }, []);

    const loadTournamentDetails = async() => {
        const response = await getTournament(id);
        setTournament(response.data);
    }

    const editTournamentDetails = async() => {
        const response = await editTournament(id, tour);
        history.push('/all/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setTournament({...tour, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">gamename</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='gamename' value={gamename} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">gametype</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='gametype' value={gametype} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">playerparticipate</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='playerparticipate' value={playerparticipate} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">totalplayer</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='totalplayer' value={totalplayer} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">place</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='place' value={place} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">startdate</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='startdate' value={startdate} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">enddate</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='enddate' value={enddate} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">entryfees</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='entryfees' value={entryfees} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">winprice</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='winprice' value={winprice} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editTournamentDetails()}>Edit Tournament</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditTournament;