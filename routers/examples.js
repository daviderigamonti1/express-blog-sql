const express = require("express");
const router = express.Router();

const { index, show, store, update, destroy } = require("controllers");

//Rotte

//Index - Read all
router.get("/", index);

//Show - Read one
router.get("/:id", show);

//Store - Create
router.post("/:id", store);

//Update - Update totale
router.put("/:id", update);

//Modify - Update partial
// router.patch("/:id", (req, res) => {
//  res.send("Modifica parziale item con id: " + req.params.id);
// });

//Destroy - Delete
router.get("/:id", destroy);

module.exports = router;
