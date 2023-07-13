# Solar charging. Super simple.

evcc optimises sustainability when charging electric vehicles.
It enables charging using as much self-generated power as possible.
And best of all, it can do so in most cases without any further modification to your house's existing electrical installation.

---

{{< live-telemetry >}}

---

## What makes evcc special?

- Charge your EV with your excess solar power
- Use your existing systems (solar and battery inverters, wallboxes, energy meters, etc.)
- Intuitive, clean, and responsive user interface
- 100 % Open Source

### Charge when the sun is shining

{{< split >}}
{{< split-entry-image >}}
{{< svg-animation src="/img/solar-surplus.svg" id="solar-surplus" >}}
{{</ split-entry-image>}}
{{< split-entry-text >}}
Your charging process starts as soon as enough solar power is produced.
The charging power is permanently adjusted to the available surplus.

This increases self-sufficiency and saves money.
{{</ split-entry-text>}}
{{</ split>}}

### Use green & cheap grid power

{{< split >}}
{{< split-entry-image >}}
{{< svg-animation src="/img/dynamic-grid.svg" id="dynamic-grid" >}}
{{</ split-entry-image>}}
{{< split-entry-text >}}
Too little sun or no PV system? Charge when the renewables share is high to support the energy revolution.

With a [dynamic electricity tariff](https://docs.evcc.io/docs/reference/configuration/tariffs/) you even save a lot of money.
{{</ split-entry-text>}}
{{</ split>}}

---

## We 💚 good UI

We want make solar charging easy for everyone. In the best case scenario, this works without manual interventions and regular setting adjustments. But if you do want to see what the system is doing, we have a **clean and responsive web interface** ready to go.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_evcc_mobile_standard" width="508" >}}
{{< screenshot-entry src="2_evcc_mobile_details" width="508" >}}
{{< screenshot-entry src="3_evcc_mobile_savings" width="508" >}}
{{< screenshot-entry src="4_evcc_tablet_standard" width="1387" >}}
{{< screenshot-entry src="5_evcc_tablet_details" width="1387" >}}
{{< /screenshots >}}

We have set up a sample installation you can use to try the interface.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Try Demo UI
{{</ button-cta>}}

---

## How evcc works

{{< full_width_image src="/img/evcc-schema.svg" alt="How it works" width="200" height="100" >}}

Using your own solar power to charge the car helps increase self-consumption - that is, using the electricity yourself instead of supplying it to the grid.

evcc makes it possible to control the current of your wallbox. We already support a wide range of chargers. If a lot of solar power is being generated, evcc allows the charger to charge the car with lots of solar power. Inversely, if less solar power is available, evcc slows down (or even pauses) charging.

evcc needs a grid energy meter to work properly. Using this measuring device, evcc knows the current excess of energy and can continuously adjust the charging power appropriately. The good news - almost every existing solar systems already contain the necessary energy meters. If not, you can easily add your own.

If a supported vehicle is set up, evcc can take its current battery charging status and range into account when planning charging - even if the sun's not out, it'll still make sure you'll have enough range for your daily trips.

And if you have a supported battery storage system available, evcc can also control its state of charge, managing it against your vehicle seamlessly.

## Works with your existing devices

We're no friends of **closed ecosystems**, **cloud services** and **expensive energy management systems**. evcc is a local solution that runs on your hardware and lets your devices work together intelligently - no matter the manufacturer.

{{< infobox title="Supported & Tested Systems" >}}
{{< infobox-entry title="wallboxes & sockets" img="/img/evcc-illu-wallbox.svg" >}}
{{< infobox-content group="Chargers">}}
{{< infobox-content group="SmartPlugs">}}
{{< /infobox-entry >}}

{{< infobox-entry title="energy measurement" img="/img/evcc-illu-energiemessung.svg" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< infobox-entry title="inverters & storage" img="/img/evcc-illu-wechselrichter.svg" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="vehicles" img="/img/evcc-illu-fahrzeuge.svg" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}
{{< /infobox >}}

More details can be found in our [documentation](https://docs.evcc.io/docs/devices/chargers/). If your device is not supported yet, let us know on [GitHub](https://github.com/evcc-io/evcc). If it has an interface we can connect it.

### Plugin architecture and smart home integration

You have a special setup or use exotic devices? evcc comes with a **flexible plugin architecture** and allows you to build custom implementations via Modbus, SunSpec, HTTP, JSON, REST, MQTT, JavaScript and Shell.

Already have a smart home system? We integrate nicely with Home Assistant, openHAB and ioBroker. evcc even works with higher-level energy managers and can take commands via SEMP and EEBUS protocol.

---

## Install evcc at your home

### System requirements

evcc is written in Go, and is extremely efficient. You don't need a system with a lot of CPU or RAM - typically you can run it on a **Raspberry Pi** or in **Docker** (e.g. Synology NAS). Windows, macOS and Linux are all fully supported.

### Setting up evcc

evcc is very flexible. However, the initial setup still requires a fair amount of technical knowledge. If you're familiar with the command line, and you've ever edited a YAML file, then you should be able to get it configured. You'll find everyting you need to know in the documentation.

{{< button-cta url="https://docs.evcc.io/">}}
Getting Started (German)
{{</ button-cta>}}

---

## Professional support

You are a solar installer or electrician, you set up charging solutions professionally and you need support in setting up evcc? Unfortunately, we cannot provide individual support. However, if you need advice, support or training, we will be happy to refer you to experts and power users from the community who know the system very well.

{{< button-cta url="mailto:info@evcc.io?subject=Request professional evcc support">}}
Request support
{{</ button-cta>}}

---

## Support the project

### Actively participating

Join the development team, and help us support the project by fixing bugs, adding features, and improving documentation.

You can get in touch, ask questions, and get support from other users in the [Forum](https://github.com/evcc-io/evcc/discussions). Feel free to chat with us on our [Slack](/slack). We don't bite!

### Financial support

In order to sustain a project of this size we need your support. Here you can learn more about our [sponsoring model](https://docs.evcc.io/docs/sponsorship).

You work for a company which offers wallboxes, energy measurement systems, or solar / PV systems? Do you want to help enable your customers to charge their cars with their own solar power? Get in touch with us. Contributing code or sponsoring us with hardware greatly helps us to expand evcc's capabilities.

{{< button-cta url="mailto:info@evcc.io">}}
Contact us
{{</ button-cta>}}

## Sponsors

{{< sponsors >}}
