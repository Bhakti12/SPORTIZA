import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getTournament, deleteTournament } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllTournament = () => {
    const [tournament, setTournament] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllTournament();
    }, []);

    const deleteTournamentData = async (id) => {
        await deleteTournament(id);
        getAllTournament();
    }

    const getAllTournament = async () => {
        let response = await getTournament();
        setTournament(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>GameName</TableCell>
                    <TableCell>Gametype</TableCell>
                    <TableCell>player participate</TableCell>
                    <TableCell>total player</TableCell>
                    <TableCell>place</TableCell>
                    <TableCell>startdate</TableCell>
                    <TableCell>enddate</TableCell>
                    <TableCell>entryfees</TableCell>
                    <TableCell>winprice</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tournament.map((tournament) => (
                    <TableRow className={classes.row} key={tournament.id}>
                        <TableCell>{tournament._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{tournament.gamename}</TableCell>
                        <TableCell>{tournament.gametype}</TableCell>
                        <TableCell>{tournament.playerparticipate}</TableCell>
                        <TableCell>{tournament.totalplayer}</TableCell>
                        <TableCell>{tournament.place}</TableCell>
                        <TableCell>{tournament.startdate}</TableCell>
                        <TableCell>{tournament.enddate}</TableCell>
                        <TableCell>{tournament.entryfees}</TableCell>
                        <TableCell>{tournament.winprice}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${tournament._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteTournamentData(tournament._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllTournament;