const CRUD = require("./CRUD");

async function getAllGniMaleData() {
    let sql = "SELECT * FROM malegnibycountry";

    let result = await CRUD.getAll(sql);
    return new Promise(res => {
        res(result);
    });
}

async function getGniMaleDataById(id) {
    let sql = "SELECT * FROM malegnibycountry WHERE id = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function getGniMaleDataByCountryId(id) {
    let sql = "SELECT * FROM malegnibycountry WHERE countryId = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function addGniMaleData(body) {
    let sql = "INSERT INTO malegnibycountry (`countryId`, `1995`, `2000`, "+
    "`2005`, `2010`, `2011`, `2012`, `2013`, `2014`, `2015`, `2016`, `2017`, `2018`) "+
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let params = [body.countryId];

    for(data in body) {
        if(data != "countryId") params.push(body[data]);
    }

    let result = await CRUD.add(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function updateGniMaleData(id, data) {
    let sql = "UPDATE malegnibycountry SET `countryId` = ?, `1995` = ?, `2000` = ?, "+
    "`2005` = ?, `2010` = ?, `2011` = ?, `2012` = ?, `2013` = ?, `2014` = ?, "+ 
    "`2015` = ?, `2016` = ?, `2017` = ?, `2018` = ?  WHERE id = ?";
    let params = [];
    params.push(data["data"]["countryId"]);
    for(item in data['data']) {
        if(item != "countryId") params.push(data["data"][item]);
    }
    params.push(id);

    let result = await CRUD.update(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function deleteGniMaleData(id) {
    let sql = "DELETE FROM malegnibycountry WHERE id = ?";
    let params = [id];

    let result = await CRUD.delete(sql, params);
    return new Promise(res => {
        res(result);
    });
}

module.exports = {
    getAll: getAllGniMaleData,
    getById: getGniMaleDataById,
    getByCountryId: getGniMaleDataByCountryId,
    add: addGniMaleData,
    update: updateGniMaleData,
    delete: deleteGniMaleData
}