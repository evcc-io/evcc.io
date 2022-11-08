import { CountUp } from "./vendor/countUp";

const UPDATE_INTERVAL_SECONDS = 10;

function createCounter(id, value, decimalPlaces) {
  return new CountUp(id, value, {
    startVal: value,
    duration: UPDATE_INTERVAL_SECONDS,
    useEasing: false,
    separator: ".",
    decimal: ",",
    decimalPlaces,
  });
}

let powerCount = null;
let greenPowerCount = null;
let greenEnergyCount = null;

const $activeClients = document.querySelector("#telemetry--activeClients");
const $totalClients = document.querySelector("#telemetry--totalClients");

function render(data) {
  document.querySelector(".telemetry").style.display = "block";

  const chargePower = data.chargePower / 1e3;
  const greenPower = (100 / data.chargePower) * data.greenPower;
  const greenEnergy = data.greenEnergy / 1e3;

  if (!powerCount) {
    powerCount = createCounter("telemetry--power", chargePower, 1);
    greenPowerCount = createCounter("telemetry--greenPower", greenPower, 1);
    greenEnergyCount = createCounter("telemetry--greenEnergy", greenEnergy, 2);
  } else {
    powerCount.update(chargePower);
    greenPowerCount.update(greenPower);
    greenEnergyCount.update(greenEnergy);
  }
  $activeClients.innerText = data.activeClients;
  $totalClients.innerText = data.totalClients;
}

function update() {
  fetch("https://api.evcc.io/v1/total")
    .then((response) => response.json())
    .then(render)
    .catch((err) => {
      console.error(err);
      document.querySelector(".telemetry").style.display = "none";
    });
}

setInterval(update, UPDATE_INTERVAL_SECONDS * 1e3);
update();
