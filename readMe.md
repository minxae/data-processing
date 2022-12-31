# ReadMe

# Info

Deze API is geschreven in javascript met behulp van NodeJS, via NodeJS is er gebruik gemaakt van verschillende modules die kunnen worden geïnstalleerd doormiddel van NodeJS. Het project bestaat uit de API zelf en de database waarin alle informatie wordt opgeslagen. 

# NodeJs

Om NodeJs te installeren kunt u naar de volgende website gaan: https://nodejs.org/en/

# NodeJs modules

Om de modules te installeren moet u de volgende commando uitvoeren in uw terminal.

### Install dependecies

```
npm i
```

# UI

Om de data te kunnen weergeven kunt u naar de endpoint /home gaan. Hier krijgt u een menu te zien waar u uit alle landen kunt kiezen, u krijgt dan alle GNI en GDP data van dit land te zien in 2 grafieken.

```
URL: http://localhost:3030/home/
```

# API starten

Om de API te starten voert u het volgende commando uit in de terminal van uw IDE:

```
node app.js
```
Zorg ervoor dat u in de map data-processing/api zit voordat u dit commando uitvoert!

# Database

In het mapje database vindt u de gehele SQL file om de database te kunnen importeren, van belang is dat indien u een andere gebruikersnaam / wachtwoord heeft voor uw database deze worden aangepast in de CURD.js file. 

```
let con = sql.createConnection({
    host: "localhost",
    user: "OWN_USERNAME", -> *Often "root"*
    password: "OWN_PASSWORD",
    database: "dataprocessing",
    port: 3306
});
```

# Endpoints

Voor de verschillende tabellen zijn verschillende endpoints gemaakt, hieronder vindt u deze en daarbij een JSON/XML formaat die u kunt gebruiken in bijvoorbeeld postman om deze endpoints uit te testen

De URL van de server: http://localhost:3030

Om naar een endpoint te kunnen bereiken moet de server URL voor de endpoint worden geplaatst.

## Country

### Get all countries 

><code>GET</code>
>
>**ENDPOINT**: `/country`
>
>***Result***:
>
>```json
>	{
>		"id": 209,
>        "countryName": "nederland"
>    },
>    {
>        "id": 2,
>        "countryName": "Afghanistan"
>    },
>    {
>        "id": 3,
>        "countryName": "Albania"
>    },
>    {
>        "id": 4,
>        "countryName": "Algeria"
>    },
>    {
>        "id": 5,
>        "countryName": "Andorra"
>    },
>    {
>        "id": 6,
>        "countryName": "Angola"
>    } 
>    .....
>```

### Get country by id

> <code>GET</code>
>
> **ENDPOINT**: `/country/:id`
>
> **PARAMS**: id
>
> ***Result***:
>
> ```json
> {
>     "id": 4,
>     "countryName": "Algeria"
> }
> ```
>
> 

### Add country

> <code>POST</code>
>
> **ENDPOINT**: `/country`
>
> **JSON**:
>
> ```json
> {
>  "countryName": "exampleCountry"
> }
> ```
>
> **XML**:
>
> ```xml
> <root>
> 	<countryName>exampleCountry</countryName>
> </root>
> ```
>
> 

### Update country

> <code>PUT</code>
>
> **ENDPOINT**: `/country`
>
> **JSON**:
>
> ``` json
> {
>  "id" : 1,
>  "countryName": "newCountryName"
> }
> ```
>
> **XML**:
>
> ```xml
> <root>
>     <id>1</id>
>     <countryName>exampleCountry</countryName>
> </root>
> ```
>
> 

### Delete country

> <code>DELETE</code>
>
> **ENDPOINT**: /country/:id
>
> **PARAMS**: id

## GniMale/Female

### Get all gniMaleData/gniFemaleData

><code>GET</code>
>
>**ENDPOINT**: `/gniMale`
>
>**ENDPOINT**: `/gniFemale`
>
>**Result**:
>
>``` json
>[
>    {
>        "1995": 1756,
>        "2000": 1167,
>        "2005": 1699,
>        "2010": 2353,
>        "2011": 2275,
>        "2012": 2472,
>        "2013": 2509,
>        "2014": 2466,
>        "2015": 2432,
>        "2016": 2396,
>        "2017": 2386,
>        "2018": 2355,
>        "id": 1,
>        "countryId": 1
>    },
>    {
>        "1995": 5338,
>        "2000": 7219,
>        "2005": 9769,
>        "2010": 12176,
>        "2011": 12702,
>        "2012": 12176,
>        "2013": 12898,
>        "2014": 13135,
>        "2015": 13010,
>        "2016": 13794,
>        "2017": 14150,
>        "2018": 14727,
>        "id": 2,
>        "countryId": 2
>    },
>    {
>        "1995": 15808,
>        "2000": 17133,
>        "2005": 20250,
>        "2010": 22062,
>        "2011": 21790,
>        "2012": 21570,
>        "2013": 21541,
>        "2014": 22101,
>        "2015": 22403,
>        "2016": 23284,
>        "2017": 23024,
>        "2018": 22980,
>        "id": 3,
>        "countryId": 3
>    },
>    {
>        "1995": 3294,
>        "2000": 3567,
>        "2005": 5214,
>        "2010": 6734,
>        "2011": 6710,
>        "2012": 7093,
>        "2013": 7280,
>        "2014": 7495,
>        "2015": 7439,
>        "2016": 6986,
>        "2017": 6865,
>        "2018": 6407,
>        "id": 4,
>        "countryId": 4
>    },
>```
>
>

### Get gniMaleData /gniFemaleData by Id

> <code>GET</code>
>
> **ENDPOINT**: `/gniMale/:id`
>
> **ENDPOINT**: `/gniFemale/:id`
>
> **PARAMS**: id
>
> **Result**:
>
> ```json
> {
>     "1995": 3044,
>     "2000": 4406,
>     "2005": 6879,
>     "2010": 11299,
>     "2011": 12262,
>     "2012": 13261,
>     "2013": 14147,
>     "2014": 15257,
>     "2015": 16162,
>     "2016": 17171,
>     "2017": 18273,
>     "2018": 19410,
>     "id": 34,
>     "countryId": 34
> }
> ```
>
> 

### Get gniMaleData/gniaFemaleData by countryId

> <code>GET</code>
>
> **ENDPOINT**: `/gniMale/byCountryId/:id`
>
> **PARAMS**: id
>
> **Result**:
>
> ````json
> {
>     "1995": 11360,
>     "2000": 13232,
>     "2005": 12700,
>     "2010": 14253,
>     "2011": 14941,
>     "2012": 14689,
>     "2013": 14509,
>     "2014": 14932,
>     "2015": 14920,
>     "2016": 15237,
>     "2017": 15378,
>     "2018": 15577,
>     "id": 100,
>     "countryId": 100
> }
> ````
>
> 

### Add gniMaleData/gniFemaleData country 

> <code>POST</code>
>
> **ENDPOINT**: `/gniMale`
>
> **ENDPOINT**: `/gniFemale`
>
> **JSON**:
>
> ```json
> {
>     "countryId" : 233,
>     "1995" : 23425, 
>     "2000" : 23425, 
>     "2005" : 23425, 
>     "2010" : 23425, 
>     "2011" : 23425, 
>     "2012" : 23425, 
>     "2013" : 23425, 
>     "2014" : 23425, 
>     "2015" : 23425, 
>     "2016" : 23425,
>     "2017" : 23425,
>     "2018" : 23425
> }
> ```
>
> **XML**:
>
> ````xml
> <root>
>    	<_1995>234</_1995>
>     <_2000>525</_2000>
>     <_2005>235253</_2005>
>     <_2010>23525</_2010>
>     <_2011>23525</_2011>
>     <_2012>2352</_2012>
>     <_2013>2352436</_2013>
>     <_2014>546457</_2014>
>     <_2015>66664</_2015>
>     <_2016>345345</_2016>
>     <_2017>123124</_2017>
>     <_2018>63463</_2018>
>     <countryId>233</countryId>
> </root>
> ````
>
> 
>
> 

### Update gniMaleData/gniFemaleData

> <code>PUT</code>
>
> **ENDPOINT**: `/gniMale`
>
> **ENDPOINT**: `/gniFemale`
>
> **JSON**:
>
> ``` json
> {
>  "metaData": {
>      "id": 1
>  },
>  "data" {
>      "countryId": 1,
>      "1995": 1995,
>      "2000": 2000,
>      "2005": 2005,
>      "2010": 2010,
>      "2011": 2011,
>      "2012": 2012,
>      "2013": 2013,
>      "2015": 2015,
>      "2016": 2016,
>      "2017": 2017,
>      "2018": 2018
>  }
> }
> ```
>
> **XML**:
>
> ````xml
> <root>
>     <data>
>         <_1995>234</_1995>
>         <_2000>525</_2000>
>         <_2005>235253</_2005>
>         <_2010>23525</_2010>
>         <_2011>23525</_2011>
>         <_2012>2352</_2012>
>         <_2013>2352436</_2013>
>         <_2014>546457</_2014>
>         <_2015>66664</_2015>
>         <_2016>345345</_2016>
>         <_2017>123124</_2017>
>         <_2018>63463</_2018>
>         <countryId>233</countryId>
>     </data>
>     <metaData>
>         <id>32</id>
>     </metaData>
> </root>
> ````

### Delete gniMaleData/gniFemaleData

> <code>DELETE</code>

## GdpData

### Get all gdpData

>ENDPOINT: /gdp/getAll
>
>REQUEST: GET

### Get gdpData by Id

> ENDPOINT: /gdp/:id
>
> REQUEST: GET
>
> PARAMS: id

### Get gdpData by countryId

> ENDPOINT: /gdp/byCountryId/:id
>
> REQUEST: GET
>
> PARAMS: id

### Add gdpData

> ENDPOINT: /gdp/add
>
> REQUEST: POST
>
> JSON:
>
> ```
> {
>     "countryId": 1,
>     "1990": 1990,
>     "1995": 1995,
>     "2000": 2000,
>     "2005": 2005,
>     "2010": 2010,
>     "2011": 2011,
>     "2012": 2012,
>     "2013": 2013,
>     "2015": 2015,
>     "2016": 2016,
>     "2017": 2017,
>     "2018": 2018
> }
> ```

### Update gdpData

> ENDPOINT: /gdp/update
>
> REQUEST: PUT
>
> JSON:
>
> ``` 
> {
>     "metaData": {
>         "id": 1
>     },
>     "data" {
>         "countryId": 1,
>         "1990": 1990,
>         "1995": 1995,
>         "2000": 2000,
>         "2005": 2005,
>         "2010": 2010,
>         "2011": 2011,
>         "2012": 2012,
>         "2013": 2013,
>         "2015": 2015,
>         "2016": 2016,
>         "2017": 2017,
>         "2018": 2018
>     }
> }
> ```

### Delete gdpData

> ENDPOINT: /gdp/delete/:id
>
> REQUEST: DELETE
>
> PARAMS: id

