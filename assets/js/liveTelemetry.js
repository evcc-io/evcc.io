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

let $activeClients, $totalClients, $chargePowerUnit;

function initializeElements() {
  $activeClients = document.querySelector("#telemetry--activeClients");
  $totalClients = document.querySelector("#telemetry--totalClients");
  $chargePowerUnit = document.querySelector("#telemetry--chargePowerUnit");
}

function render(data) {
  if (!$chargePowerUnit || !$activeClients) return;

  const telemetryElement = document.querySelector(".telemetry");
  if (telemetryElement) {
    telemetryElement.style.display = "block";
  }

  const chargePower = fmtKW(data.chargePower / 1e3); // W -> kW
  const greenShare = (100 / data.chargePower) * data.greenPower; // in %

  if (!powerCount) {
    powerCount = createCounter(
      "telemetry--power",
      chargePower.value,
      chargePower.decimals
    );
    greenShareCount = createCounter("telemetry--greenShare", greenShare, 1);
  } else {
    powerCount.update(chargePower.value);
    greenShareCount.update(greenShare);
  }
  $chargePowerUnit.innerText = chargePower.unit;
  const lang = document.documentElement.lang || "de";
  const fmt = new Intl.NumberFormat(lang);
  $activeClients.innerText = fmt.format(data.activeClients);
  if ($totalClients) {
    $totalClients.innerText = fmt.format(data.totalClients);
  }
}

function update() {
  fetch("https://api.evcc.io/v1/total")
    .then((response) => response.json())
    .then(render)
    .catch((err) => {
      console.error(err);
      const telemetryElement = document.querySelector(".telemetry");
      if (telemetryElement) {
        telemetryElement.style.display = "none";
      }
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

// Only start automatic updates if we're not in a test environment
if (typeof window !== "undefined" && !window.vitest) {
  initializeElements();
  setInterval(update, UPDATE_INTERVAL_SECONDS * 1e3);
  update();
}
