const serverInfo = {
    serverIp: "http://localhost:3030"
}

function fireError(err) {
    Swal.fire({
        title: 'Oops!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Continue'
    })
}

const getAllCountries = async() => {
    try {
        let response = await fetch(serverInfo.serverIp + "/country");
        if(response.status == 200) {
            let json = await response.json();
            return json;
        } else {
            fireError("Er is geen data gevonden voor dit land");
        }
    } catch(err) {
        fireError(err);
    }
}

const getGniMaleByCountry = async(id) => {
    try {
        let response = await fetch(serverInfo.serverIp + "/gniMale/byCountryId/"+id+"");
        if(response.status == 200) {
            let json = await response.json();
            return json;
        } else {
            fireError("Er is geen data gevonden voor dit land");
        }
    } catch(err) {
        fireError(err);
    }
}

const getGniFemaleByCountry = async(id) => {
    try {
        let response = await fetch(serverInfo.serverIp + "/gniFemale/byCountryId/"+id+"");
        if(response.status == 200) {
            let json = await response.json();
            return json;
        } else {
            fireError("Er is geen data gevonden voor dit land");
        }
    } catch(err) {
        fireError(err);
    }
}

const getGdpByCountry = async(id) => {
    try {
        let response = await fetch(serverInfo.serverIp + "/gdp/byCountryId/"+id+"");
        if(response.status == 200) {
            let json = await response.json();
            return json;
        } else {
            fireError("Er is geen data gevonden voor dit land");
        }
    } catch(err) {
        fireError(err);
    }
}