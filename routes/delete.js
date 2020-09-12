const express = require("express");
const router = express.Router();

const store = require("../store/listings");
const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");

router.delete("/:categoryId", auth, (req, res) => {
  const listing = store.deleteListing(parseInt(req.params.categoryId));
  if (!listing) return res.status(404).send();
  const resource = listingMapper(listing);
  res.send(resource); 
});


/*
router.get("/:categoryId", (req, res) => {
  const listing = store.getListing(parseInt(req.params.categoryId));
  if (!listing) return res.status(404).send();
  const resource = listingMapper(listing);
  res.send(resource); https://africansingles.uc.r.appspot.com/assets/
});
*/

/*router.get("/:categoryId",  (req, res) => {
  const listing = store.getListing(parseInt(req.params.categoryId));
  if (!listing) return res.status(404).send();
  const resource = listingMapper(listing);
  res.send(resource);
});*/




module.exports = router;
