const temperatureHeader = document.querySelector(".temperature");
const conditionHeader = document.querySelector(".condition");
// Enter your zip code
const zipCode = 95993;

async function getTemp() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key= 5f1dc43814e946fa840233207221912&q=${zipCode}&aqi=no`);
    const data = await response.json();
    return {temp: data.current.temp_f, cond: data.current.condition.text};
}

async function addTemp(temp) {
    temperatureHeader.textContent = "Temp: " + temp + " °F";
}

async function addCond(cond) {
    conditionHeader.textContent = "Cond: " + cond;
}

async function addTempToHeader() {
    const data = await getTemp();
    const temp = data.temp;
    const cond = data.cond;
    addTemp(temp);
    addCond(cond);
}

addTempToHeader();