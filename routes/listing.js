const express = require("express");
const router = express.Router(); 
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const{validateListing} = require("../middleware.js") 
const {isLoggedIn, isOwner} = require("../middleware.js")
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage }) ;

router
  .route("/") 
  .get( wrapAsync(listingController.index))// index route
  .post(isLoggedIn,upload.single("listing[image]"),validateListing, wrapAsync(listingController.createlisting)
); // create route
 


//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);


router.route("/:id")  
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,  wrapAsync(listingController.destroyListing));


 
//Show route




//Edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

//Update route


//Delete route


module.exports = router;