const e = require("express");

const val = require("jsonschema").validate;
const xmlValidator = require("xsd-schema-validator");
const xml2js = require("xml2js");

//Schemas ->
const jsonSchemas = {
    addCountry: "../../schemas/json/country/addSchema.json",
    updateCountry: "../../schemas/json/country/updateSchema.json",
    addGni: "../../schemas/json/gni/addSchema.json",
    updateGni: "../../schemas/json/gni/updateSchema.json",
    addGdp: "../../schemas/json/gdp/addSchema.json",
    updateGdp: "../../schemas/json/gdp/updateSchema.json"
}

const xmlSchemas = {
    addCountry: "schemas/xml/country/addSchema.xsd",
    updateCountry: "schemas/xml/country/updateSchema.xsd",
    addGni: "schemas/xml/gni/addSchema.xsd",
    updateGni: "schemas/xml/gni/updateSchema.xsd",
    addGdp: "schemas/xml/gdp/addSchema.xsd",
    updateGdp: "schemas/xml/gdp/updateSchema.xsd"
}

const validate = (route) => {
    return (req, res, next) => {
        let contentType = req.headers["content-type"];
        //Json validation ->
        if(contentType == "application/json") {
            let json = req.body;
            let schema = require(jsonSchemas[route]);
            let valResult = val(json, schema);
            if(valResult.valid) {
                //Json schema is valid -> return to original route
                req.body = json;
                next();
            } else {
                //Json scheme is not valid -> return error message
                res.statusMessage = valResult.errors[0].stack;
                res.status(400).send();
                req.connection.destroy(); //without calling next()
            }
        } else if(contentType == "application/xml") {
           let xml = req.rawBody;
           console.log(xml)
           let schema = xmlSchemas[route];
           xmlValidator.validateXML(xml, schema, function(err, result) {
            //Something went wrong ->
            if(err) {
                res.statusMessage = err;
                console.log(err)
                res.status(400).send();
                req.connection.destroy(); //without calling next()
            }else {
                console.log(result)
                //Valid XML ->
                if(result.valid) {
                    //Parse xml for the crud operations
                    xml2js.parseString(xml, (err, result) => {
                        req.body = result["root"];
                        //Continue to route
                        next();
                    });0
                }else {
                    res.statusMessage = "Given XML is invalid";
                    res.status(400).send();
                    req.connection.destroy(); //without calling next()
                }
            }
           });
        } else {
            //Invalid content type ->
            res.statusMessage = "Given contentType is invalid, please use application/json or application/xml";
            res.status(400).send();
        }
    }
}

module.exports = {
    validate: validate
}