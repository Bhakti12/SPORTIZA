import Tour from '../model/tour.js';

// Get all tournments
export const getTournament = async (request, response) => {
    
    try{
        
        const tours = await Tour.find();
        response.status(200).json(tours);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the tournaments in database
export const addTournament = async (request, response) => {
    // retreive the info of tournaments from frontend
    const tour = request.body;
    console.log("inside")

    const newTournament = new Tour(tour);
    try{
        await newTournament.save();
        response.status(201).json(newTournament);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a tournament by id
export const getTournamentById = async (request, response) => {
    try{
        const tour = await Tour.findById(request.params.id);
        response.status(200).json(tour);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited tournament in the database
export const editTournament = async (request, response) => {
    let tour = await Tour.findById(request.params.id);
    tour = request.body;

    const editTournament = new Tour(tour);
    try{
        await Tour.updateOne({_id: request.params.id}, editTournament);
        response.status(201).json(editTournament);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of tournament from the database
export const deleteTournament = async (request, response) => {
    try{
        await Tour.deleteOne({_id: request.params.id});
        //alert("Do you want to delete tournament");
        response.send("Deleted successfully!!");
        response.status(201).json("tournament deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}