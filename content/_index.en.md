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

---

## Responsive interface

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_evcc_mobile_standard" width="508" >}}
{{< screenshot-entry src="2_evcc_mobile_details" width="508" >}}
{{< screenshot-entry src="3_evcc_mobile_savings" width="508" >}}
{{< screenshot-entry src="4_evcc_tablet_standard" width="1387" >}}
{{< screenshot-entry src="5_evcc_tablet_details" width="1387" >}}
{{< /screenshots >}}

---

## How evcc works

{{< full_width_image src="/img/evcc-schema.svg" alt="How it works" width="200" height="100" >}}

Using your own solar power to charge the car helps increase self-consumption - that is, using the electricity yourself instead of supplying it to the grid.

evcc makes it possible to control the current of your wallbox. We already support a wide range of chargers. If a lot of solar power is being generated, evcc allows the charger to charge the car with lots of solar power. Inversely, if less solar power is available, evcc slows down (or even pauses) charging.

evcc needs a grid energy meter to work properly. Using this measuring device, evcc knows the current excess of energy and can continuously adjust the charging power appropriately. The good news - almost every existing solar systems already contain the necessary energy meters. If not, you can easily add your own.

If a supported vehicle is set up, evcc can take its current battery charging status and range into account when planning charging - even if the sun's not out, it'll still make sure you'll have enough range for your daily trips.

And if you have a supported battery storage system available, evcc can also control its state of charge, managing it against your vehicle seamlessly.

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

evcc can work with a number of widely used interfaces and protocols, such as Modbus, SunSpec, HTTP, JSON, REST, and MQTT.
This means that almost all products available on the market today can be connected to evcc.
And in order to work properly with other, high-level energy management systems, evcc also includes support for the SEMP and EEBUS protocols.

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

## Support the project

### Actively participating

Join the development team, and help us support the project by fixing bugs, adding features, and improving documentation.

You can get in touch, ask questions, and get support from other users in the [Forum](https://github.com/evcc-io/evcc/discussions). Feel free to chat with us on our [Slack](/slack). We don't bite!

### Financial support

Everyone working on evcc is doing it in their spare time. You're welcome to support us as a [GitHub sponsor](https://docs.evcc.io/docs/sponsorship).

You work for a company which offers wallboxes, energy measurement systems, or solar / PV systems? Do you want to help enable your customers to charge their cars with their own solar power? Get in touch with us. Contributing code or sponsoring us with hardware greatly helps us to expand evcc's capabilities.

## Sponsors

{{< sponsors >}}
