const express = require("express");
const router = express.Router();
const RideController = require('../Controllers/RideController')

router.get('./rider', RideController.getAllRider);
router.post('./rider', RideController.createRider); 
router.put('./rider', RideController.updateRidder) ;
router.delete('./rider', RideController.deleteRider); 

module.exports = router;