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
let greenShareCount = null;
let greenEnergyCount = null;

const $activeClients = document.querySelector("#telemetry--activeClients");
const $totalClients = document.querySelector("#telemetry--totalClients");
const $chargePowerUnit = document.querySelector("#telemetry--chargePowerUnit");
const $unitGreenEnergy = document.querySelector("#telemetry--greenEnergyUnit");

function render(data) {
  document.querySelector(".telemetry").style.display = "block";

  const chargePower = fmtKW(data.chargePower / 1e3); // W -> kW
  const greenEnergy = fmtKWh(data.greenEnergy); // kWh
  const greenShare = (100 / data.chargePower) * data.greenPower; // in %

  if (!powerCount) {
    powerCount = createCounter(
      "telemetry--power",
      chargePower.value,
      chargePower.decimals
    );
    greenEnergyCount = createCounter(
      "telemetry--greenEnergy",
      greenEnergy.value,
      greenEnergy.decimals
    );
    greenShareCount = createCounter("telemetry--greenShare", greenShare, 1);
  } else {
    powerCount.update(chargePower.value);
    greenEnergyCount.update(greenEnergy.value);
    greenShareCount.update(greenShare);
  }
  $chargePowerUnit.innerText = chargePower.unit;
  $unitGreenEnergy.innerText = greenEnergy.unit;
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

export function fmtKW(kW) {
  if (kW < 1e3) {
    return { value: kW, decimals: 0, unit: "kW" };
  } else if (kW < 1e4) {
    return { value: kW / 1e3, decimals: 2, unit: "MW" };
  } else if (kW < 1e5) {
    return { value: kW / 1e3, decimals: 1, unit: "MW" };
  } else if (kW < 1e6) {
    return { value: kW / 1e3, decimals: 0, unit: "MW" };
  } else if (kW < 1e7) {
    return { value: kW / 1e6, decimals: 2, unit: "GW" };
  } else if (kW < 1e8) {
    return { value: kW / 1e6, decimals: 1, unit: "GW" };
  }
  return { value: kW / 1e6, decimals: 0, unit: "GW" };
}

export function fmtKWh(kWh) {
  const result = fmtKW(kWh);
  result.unit += "h";
  return result;
}

setInterval(update, UPDATE_INTERVAL_SECONDS * 1e3);
update();
