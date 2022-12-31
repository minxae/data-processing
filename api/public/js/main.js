let showCountryBtn = document.getElementById("submitSelectionBtn");
let select = document.getElementById("countrySelection");

let charts = [];

showCountryBtn.addEventListener("click", async function() {
    let val = select.value;
    let gniMale = await getGniMaleByCountry(val);
    let gniFemale = await getGniFemaleByCountry(val);
    let gdpData = await getGdpByCountry(val);
    
    clearCharts();

    setGniChart(gniMale, gniFemale);
    setGdpChart(gdpData);
});

function clearCharts() {
    if(charts.length > 0) {
        for(c in charts) {
            charts[c].destroy();
        }
    }
}

function setGniChart(gniMale, gniFemale) {
    let labels = [];
    let maleData = [];
    let femaleData = [];

    for(row in gniMale) {
        if(row != "countryId" && row != "id") {
            labels.push(row);
            maleData.push(gniMale[row]);
            femaleData.push(gniFemale[row]);
        }
    }

    let data = {
        male: {
            data: maleData,
            color: "rgb(154, 208, 245)",
            title: "Male"
        },
        female: {
            data: femaleData,
            color: "rgb(255, 99, 132)",
            title: "Female"
        }
    }

    loadChart(labels, data, "gniChart");
}

function setGdpChart(gdpData) {
    let labels = [];

    for(row in gdpData.data) {
        labels.push(row);
    }

    let data = {
        gdp: {
            data: gdpData.data,
            color: "rgb(255, 99, 132)",
            title: "Gdp"
        }
    }

    loadChart(labels, data, "gdpChart")
}

async function initSelection() {
    let countries = await getAllCountries();
    setSelectionOptions(countries);
}

function setSelectionOptions(countries) {
    for(let i = 0; i < countries.length; i++) {
        let id = countries[i]["id"];
        let countryName = countries[i]["countryName"];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = countryName;
        select.appendChild(option);
    }
}

function loadChart(labels, _data, chartId) {
    const data = {
        labels: labels,
        datasets: []
    };
    
    for(dataSet in _data) {
        data.datasets.push({
            label: _data[dataSet].title,
            backgroundColor: _data[dataSet].color,
            borderColor: _data[dataSet].color,
            data: _data[dataSet].data
        })
    }

    const config = {
        type: "line",
        data: data,
        options: {}
    };
    
    const chart = new Chart(
        document.getElementById(chartId),
        config
    );

    charts.push(chart);
}

initSelection();