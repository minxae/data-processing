const express = require("express");
const router = express.Router();
const crud = require("../db/gniFemaleCRUD");
const validator = require("./middleware/validator");

router.use(express.json());


router.get("/", async (req, res) => {
    try {
        let result = await crud.getAll();
        res.send(result);
    } catch(err) {
        res.statusMessage = "Something went wrong with getting the data from the database, please contact the Api owner";
        res.status(500);
        res.send();
    }
});

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

router.get("/byCountryId/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let data = await crud.getByCountryId(id);
        res.send(data)
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send();
    }
});

router.post("/", validator.validate("addGni"), async (req, res) => {
    //Json/Xml has been validated in validate middleware ->
    let body = req.body;
    try {
        let status = await crud.add(body);
        res.statusMessage = status;
        res.status(202).send();
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send();
    }
});

router.put("/", validator.validate("updateGni"), async (req, res) => {
    //Json/Xml has been validated in validate middleware ->
    let body = req.body;
    try {
        let id = body.metaData.id;
        let status = await crud.update(id, body);
        res.sendStatus(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send();
    }
});

router.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let status = await crud.deleteCountry(id);
        res.send(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send();
    }
});

module.exports = router;