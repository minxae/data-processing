const CRUD = require("./CRUD");

async function getAllCountries() {
    let sql = "SELECT * FROM country";

    let result = await CRUD.getAll(sql);
    return new Promise(res => {
        res(result);
    });
}

async function getCountryById(id) {
    let sql = "SELECT * FROM country WHERE id = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function addCountry(countryName) {
    let sql = "INSERT INTO country (countryName) VALUES (?)";
    let params = [countryName]

    let result = await CRUD.add(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function updateCountry(id, countryName) {
    let sql = "UPDATE country SET countryName = ? WHERE id = ?";
    let params = [countryName, id];

    let result = await CRUD.update(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function deleteCountry(id) {
    let sql = "DELETE FROM country WHERE id = ?";
    let params = [id];
    try {
        let result = await CRUD.delete(sql, params);
        return new Promise(res => {
            res(result);
        });
    }catch (err){
        return res(err);
    }
    
}

module.exports = {
    getAll: getAllCountries,
    getById: getCountryById,
    add: addCountry,
    update: updateCountry,
    delete: deleteCountry
}