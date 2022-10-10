import { CountUp } from "./vendor/countUp";

const UPDATE_INTERVAL_SECONDS = 5;

const countOptions = {
  duration: UPDATE_INTERVAL_SECONDS,
  useEasing: false,
  separator: ".",
  decimal: ",",
  enableScrollSpy: true,
  scrollSpyOnce: true,
};

const powerCount = new CountUp("telemetry--power", 0, {
  ...countOptions,
  decimalPlaces: 1,
});
const greenPowerCount = new CountUp("telemetry--greenPower", 0, {
  ...countOptions,
  decimalPlaces: 1,
});
const greenEnergyCount = new CountUp("telemetry--greenEnergy", 0, {
  ...countOptions,
  decimalPlaces: 2,
});

const $activeClients = document.querySelector("#telemetry--activeClients");
const $totalClients = document.querySelector("#telemetry--totalClients");

function render(data) {
  powerCount.update(data.chargePower / 1e3);
  greenPowerCount.update((100 / data.chargePower) * data.greenPower);
  greenEnergyCount.update(data.greenEnergy / 1e3);
  $activeClients.innerText = data.activeClients;
  $totalClients.innerText = data.totalClients;
}

function update() {
  fetch("https://api.evcc.io/v1/total")
    .then((response) => response.json())
    .then(render);
}

setInterval(update, UPDATE_INTERVAL_SECONDS * 1e3);
update();
