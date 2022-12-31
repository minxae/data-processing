const express = require("express");
const router = express.Router();
const crud = require("../db/countryCRUD");
const validator = require("./middleware/validator");

router.use(express.json());

//Returns all countries in 1 json object
router.get("/", async (req, res) => {
    console.log(res.contentType);
    try {
        let result = await crud.getAll();
        res.send(result);
    } catch(err) {
        res.statusMessage = "Something went wrong with getting the data from the database, please contact the Api owner";
        res.status(500);
        res.send();
    }
});

//Gets 1 country by id
//Params: 
//Id -> id of country you want to get the name of
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let country = await crud.getById(id);
        res.send(country);
    } catch(err) {
        if(err = 404) {
            res.statusMessage = "No rows found with given id";
            res.status(404).send();
        }
        res.statusMessage = err;
        res.status(400).send();
    }
});

//Adds a record to country table
//Params:
//countryName -> name of country you want to add
router.post("/", validator.validate("addCountry"), async (req, res) => {
    //Json/Xml data has been validated in the validate middleware -> 
    let body = req.body;
    try {
        let status = await crud.add(body.countryName);
        res.statusMessage = status;
        res.status(202).send("Country: " + body.countryName + " Added");
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send(err);
    }
});

//Updates row of country table
//Params:
//id -> id of row you want to update
//countryName -> new name of country with given id
router.put("/", validator.validate("updateCountry"), async (req, res) => {
    console.log("updating");
    //Json/Xml data has been validated in the validate middleware ->
    let body = req.body;
    try {
        let status = await crud.update(body.id, body.countryName);
        res.sendStatus(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send();
    }
});

//Deletes country row with given id
//Params:
//id -> id of row you want to remove from table
router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let status = await crud.delete(id);
        res.sendStatus(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send();
    }
});

module.exports = router;