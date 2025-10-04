# Solar charging. Super simple.

evcc is an energy management system with a focus on electromobility.
The software controls your [EV charger or smart plug](./#devices).
It communicates with your [vehicle, inverter or home storage](./#devices) to make intelligent charging decisions.
The software is open source and community-driven.

{{< button-cta url="https://docs.evcc.io/en/docs/installation" target="_blank" subline="Raspberry Pi, Docker and co.">}}
Get Started
{{</ button-cta>}}

---

## Charge when the sun is shining

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

{{< live-telemetry >}}

---

## Use green & cheap grid power

{{< split >}}
{{< split-entry-image >}}
{{< svg-animation src="/img/dynamic-grid.svg" id="dynamic-grid" >}}
{{</ split-entry-image>}}
{{< split-entry-text >}}
Too little sun or no PV system? Charge when the renewables share is high to support the energy revolution.

With a [dynamic electricity tariff](https://docs.evcc.io/en/docs/features/dynamic-prices) you even save a lot of money.
{{</ split-entry-text>}}
{{</ split>}}

---

## We 💚 good UI

We want to make solar charging easy for everyone. In the best-case scenario, this works without manual interventions and regular setting adjustments. But if you do want to see what the system is doing, we have a **clean and responsive web interface** ready to go.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_small_main" width="513" alt="evcc iPhone Screenshot: Energy flow and current charging process" >}}
{{< screenshot-entry src="2_small_plan" width="513" alt="evcc iPhone Screenshot: Charging plan dialog with dynamic electricity prices" >}}
{{< screenshot-entry src="3_small_battery" width="513" alt="evcc iPhone Screenshot: Home battery-dependent charging rules" >}}
{{< screenshot-entry src="4_small_month_cost" width="513" alt="evcc iPhone Screenshot: Monthly overview with current costs" >}}
{{< screenshot-entry src="5_large_main" width="1262" alt="evcc iPad Screenshot: Energy flow and current charging process" >}}
{{< screenshot-entry src="6_large_year_solar" width="1262" alt="evcc iPad Screenshot: Solar share and annual statistics" >}}
{{< screenshot-entry src="7_large_settings" width="1262" alt="evcc iPad Screenshot: Settings for price-dependent charging" >}}
{{< /screenshots >}}

We have set up a sample installation you can use to try the interface.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Try demo instance
{{</ button-cta>}}

---

## We communicate with all manufacturers {#devices}

Closed ecosystems, cloud services and proprietary solutions are not our cup of tea.
evcc runs on **your own hardware** and lets your devices work together intelligently - **no matter the manufacturer.**
We are also not interested in your data.

{{< infobox title="Supported & tested systems" >}}

{{< infobox-entry title="chargers" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="vehicles" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="solar & storage" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="smart switches" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="heat pumps & electric heaters" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="energy meters" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

More details can be found in our [documentation](https://docs.evcc.io/en/docs/devices/chargers). If your device is not supported yet, let us know on [GitHub](https://github.com/evcc-io/evcc). If it has an interface, we can connect it.

### Plugin architecture and smart home integration

You have a special setup or use exotic devices? evcc comes with a **flexible plugin architecture** and allows you to build custom implementations via Modbus, SunSpec, HTTP, JSON, REST, MQTT, JavaScript and Shell.

Already have a smart home system? We integrate nicely with Home Assistant, openHAB and ioBroker. evcc even works with higher-level energy managers and can take commands via SEMP and EEBUS protocol.

---

## Community Portraits

In our [blog](https://docs.evcc.io/en/blog) we regularly present evcc installations from the community. Here you get an insight into the [people](#community-person) and their [technology](#community-tech).

{{< community >}}
{{< community-entry img="tobias" name="Tobias from Trebur" link="https://docs.evcc.io/en/blog/2025/10/04/tobias-aus-trebur">}}
{{< community-entry img="michael" name="Michael, Core Team" link="https://docs.evcc.io/en/blog/2025/06/30/michael-vom-core-team">}}
{{< community-entry img="ulrike-gunther" name="Ulrike und Gunther from Alzenau" link="https://docs.evcc.io/en/blog/2025/04/26/ulrike-und-gunther-aus-alzenau">}}
{{< community-entry img="olaf" name="Olaf from Bergisch Gladbach" link="https://docs.evcc.io/en/blog/2024/12/21/olaf-aus-bergisch-gladbach">}}
{{< community-entry img="andreas" name="Andreas from Wettringen" link="https://docs.evcc.io/en/blog/2024/11/14/andreas-aus-wettringen">}}
{{< community-entry img="bastian" name="Bastian from Ahlhorn" link="https://docs.evcc.io/en/blog/2024/10/25/portrait-bastian-aus-alhorn">}}
{{< community-entry img="tjarko" name="Tjarko from Großefehn" link="https://docs.evcc.io/en/blog/2024/09/21/portrait-tjarko-grossefehn">}}
{{< community-entry img="christian" name="Christian from Trebbin" link="https://docs.evcc.io/en/blog/2024/08/25/portrait-christian-trebbin">}}
{{< community-entry img="arne" name="Arne from Gifhorn" link="https://docs.evcc.io/en/blog/2024/08/09/portrait-arne-gifhorn">}}
{{< /community >}}

---

## How evcc works

{{< full_width_image src="/img/evcc-schema.svg" alt="How it works" width="200" height="100" >}}

The core functionality of evcc is relatively simple.
The system collects information about energy generation, the state of the home battery, the electricity price, and the charging status of the electric vehicle.

With this data, evcc controls your EV charger to maximize your [PV surplus](https://docs.evcc.io/en/docs/features/solar-charging) usage.
If you have a dynamic electricity tariff, you can define a [charging plan](https://docs.evcc.io/en/docs/features/plans) or set a [price limit](https://docs.evcc.io/en/docs/features/dynamic-prices) and charge at the cheapest times.

### Vehicle integration

If your [electric vehicle has an API](https://docs.evcc.io/en/docs/features/vehicle), evcc can query information like the current charge level.
This data can be used to enable comfort functions like [charge limits](https://docs.evcc.io/en/docs/features/limits) for battery care or a [minimum charge level](https://docs.evcc.io/en/docs/features/limits) for immediate charging when needed.

You can see all [charging sessions](https://docs.evcc.io/en/docs/features/sessions) in the web interface.
If your vehicle supports it, you'll not only see solar share and costs per session but also the odometer reading of your vehicle.

### Home battery integration

With the [home battery control](https://docs.evcc.io/en/docs/features/battery), you can define whether surplus energy should first flow into the home battery or the electric vehicle.
Newer hybrid inverters can also be controlled directly via evcc.
This way, evcc can prevent the unwanted discharge of the home battery or charge the home battery at times of low grid prices in the winter months.

### Large systems, small systems

Even more complex scenarios like charging multiple vehicles, integrating multiple PV and storage systems, or [load management](https://docs.evcc.io/en/docs/features/loadmanagement) to avoid overloading the home connection are possible.

Do you have a balcony PV system and switchable sockets?
Even then, evcc helps you to charge your e-bike battery with solar power or activate your ice cube machine when there is a surplus.
Many micro inverters and smart sockets are supported.

---

## Install evcc at your home

### System requirements

evcc is written in Go, and is extremely efficient: you don't need a system with a lot of CPU or RAM.
Typically you can run it on a **Raspberry Pi** or in **Docker** (e.g. Synology NAS). Windows, macOS and Linux are all fully supported.

### Setting up evcc

evcc is very flexible. However, the initial setup still requires a fair amount of technical knowledge. If you're familiar with the command line, and you've ever edited a YAML file, then you should be able to get it configured. You'll find everything you need to know in the documentation.

{{< button-cta url="https://docs.evcc.io/en/">}}
Get Started
{{</ button-cta>}}

---

## Professional support

You are a solar installer or electrician, you set up charging solutions professionally and you need support with configuring evcc? Unfortunately, we cannot provide individual support. However, if you need advice, support or training, we will be happy to refer you to experts and power users from the community who know the system very well.

{{< button-cta url="mailto:pro-support@evcc.io?subject=Request professional evcc support" type="secondary">}}
Request support
{{</ button-cta>}}

---

## Support the project

### Actively participating

Join the development team, and help us support the project by fixing bugs, adding features, and improving documentation.

You can get in touch, ask questions, and get support from other users in the [Forum](https://github.com/evcc-io/evcc/discussions). Feel free to chat with us on our [Slack](/slack). We don't bite!

### Financial support

In order to sustain a project of this size we need your support. Here you can learn more about our [sponsoring model](https://docs.evcc.io/en/docs/sponsorship).

You work for a company which offers wallboxes, energy measurement systems, or solar / PV systems? Do you want to help enable your customers to charge their cars with their own solar power? Get in touch with us. Contributing code or sponsoring us with hardware greatly helps us to expand evcc's capabilities.

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Contact us
{{</ button-cta>}}

## Sponsors

{{< sponsors >}}

## Core Team

{{< team >}}
