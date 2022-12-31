const CRUD = require("./CRUD");

async function getAllGdpData() {
    let sql = "SELECT * FROM gdptotalbycountry";

    let result = await CRUD.getAll(sql);
    return new Promise(res => {
        res(result);
    });
}

async function getGdpDataById(id) {
    let sql = "SELECT * FROM gdptotalbycountry WHERE id = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function getGdpDataByCountryId(id) {
    let sql = "SELECT * FROM gdptotalbycountry WHERE countryId = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function addGdpData(body) {
    let sql = "INSERT INTO gdptotalbycountry (`countryId`, `1990`, `1995`, `2000`, "+
    "`2005`, `2010`, `2011`, `2012`, `2013`, `2014`, `2015`, `2016`, `2017`, `2018`) "+
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let params = [body.countryId];

    for(data in body) {
        if(data != "countryId") params.push(body[data]);
    }

    let result = await CRUD.add(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function updateGdpData(id, data) {
    let sql = "UPDATE gdptotalbycountry SET `countryId` = ?, `1990` = ?, `1995` = ?, `2000` = ?, "+
    "`2005` = ?, `2010` = ?, `2011` = ?, `2012` = ?, `2013` = ?, `2014` = ?, "+ 
    "`2015` = ?, `2016` = ?, `2017` = ?, `2018` = ?  WHERE id = ?";
    let params = [];
    params.push(data["data"]["countryId"]);
    for(item in data['data']) {
        if(data["data"] != "countryId") params.push(data["data"][item]);
    }
    params.push(id);

    let result = await CRUD.update(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function deleteGdpData(id) {
    let sql = "DELETE FROM gdptotalbycountry WHERE id = ?";
    let params = [id];

    let result = await CRUD.delete(sql, params);
    return new Promise(res => {
        res(result);
    });
}

module.exports = {
    getAll: getAllGdpData,
    getById: getGdpDataById,
    getByCountryId: getGdpDataByCountryId,
    add: addGdpData,
    update: updateGdpData,
    delete: deleteGdpData
}