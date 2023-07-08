const rider = require('../Model/RiderModel');

 //get method
 const getAllRider = async (req,res, next) => {
    try {
        const rider = await InterFaceRider.find();
        res.json(rider);
    }
    catch (error){
        console.error('error fetching rider:', error);
        next(error)
    }
};

//post method 
const createRider = async (req,res, next)=> {
    try {
        const {  ID, Name, Email, Position, NRIC, Status, Image } = req.body;
        const rider = new InterFaceRider( {  ID, Name, Email, Position, NRIC, Status, Image });
        await rider.save();
        res.json(rider);
    }
    catch (error){
        console.error('error Creating rider:', error);
        next(error)
    }
}

//put methode
 const updateRidder = async (req,res, next) => {
  try {
   const { ID } = req.params;
   const { Name, Email, Position, NRIC, Status, Image} = req.body;
   const rider = await rider.findByIDAndUpdate(ID, {Name, Email, Position, NRIC, Status, Image}, {new: true});
   res.json(rider); 
  }
  catch (error){
    console.error('error Updating rider:', error);
   next(error)
  }
};


//Delete methode
const deleteRider = async (req,res, next) => {
  try {
    const { ID } = req.params;
    await rider.FindByIdAndRemove(ID);
    res.json({message: 'Rider is deleted succesfully'})
  }
  catch (error) {
    console.error('error deleting rider:', error);
    next(error)
  }
};


module.exports = {
    getAllRider,
    createRider,
    updateRidder,
    deleteRider,
};