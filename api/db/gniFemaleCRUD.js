const CRUD = require("./CRUD");

async function getAllGniFemaleData() {
    let sql = "SELECT * FROM femalegnibycountry";

    let result = await CRUD.getAll(sql);
    return new Promise(res => {
        res(result);
    });
}

async function getGniFemaleDataById(id) {
    let sql = "SELECT * FROM femalegnibycountry WHERE id = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function getGniFemaleDataByCountryId(id) {
    let sql = "SELECT * FROM femalegnibycountry WHERE countryId = ?";
    let params = [id];

    let result = await CRUD.getById(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function addGniFemaleData(body) {
    console.log(body);
    let sql = "INSERT INTO femalegnibycountry (`countryId`, `1995`, `2000`, "+
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

async function updateGniFemaleData(id, data) {
    console.log(id);
    let sql = "UPDATE femalegnibycountry SET `countryId` = ?, `1995` = ?, `2000` = ?, "+
    "`2005` = ?, `2010` = ?, `2011` = ?, `2012` = ?, `2013` = ?, `2014` = ?, "+ 
    "`2015` = ?, `2016` = ?, `2017` = ?, `2018` = ?  WHERE id = ?";
    let params = [];
    params.push(data["data"]["countryId"]);
    for(item in data['data']) {
        if(data["data"] != "countryId") params.push(data["data"][item]);
    }
    params.push(id);
    console.log(params);

    let result = await CRUD.update(sql, params);
    return new Promise(res => {
        res(result);
    });
}

async function deleteGniFemaleData(id) {
    let sql = "DELETE FROM femalegnibycountry WHERE id = ?";
    let params = [id];

    let result = await CRUD.delete(sql, params);
    return new Promise(res => {
        res(result);
    });
}

module.exports = {
    getAll: getAllGniFemaleData,
    getById: getGniFemaleDataById,
    getByCountryId: getGniFemaleDataByCountryId,
    add: addGniFemaleData,
    update: updateGniFemaleData,
    delete: deleteGniFemaleData
}