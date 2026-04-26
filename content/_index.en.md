# Smart charging. Super simple.

Charge your electric vehicle intelligently. Control charger, heat pump and home battery. Works with hundreds of devices. Your control, your data. Open source and community-driven.

{{< button-cta url="https://docs.evcc.io/en/docs/installation" target="_blank" subline="Raspberry Pi, Docker and co.">}}
Get Started
{{</ button-cta>}}

---

## Features

{{< feature-cards >}}
{{< feature-card title="Solar surplus charging" icon="sun" link="https://docs.evcc.io/en/docs/features/solar-charging" >}}
Your car charges when the sun shines. Charging power automatically follows the available surplus.
{{< /feature-card >}}

{{< feature-card title="Dynamic electricity tariffs" icon="lightning" link="https://docs.evcc.io/en/docs/features/dynamic-prices" >}}
With spot price tariffs, charge automatically during the cheapest hours.
{{< /feature-card >}}

{{< feature-card title="Charging plans & forecasts" icon="calendar-check" link="https://docs.evcc.io/en/docs/features/plans" >}}
Set departure time and charging target. evcc automatically finds the cheapest or greenest charging times.
{{< /feature-card >}}

{{< feature-card title="iOS & Android app" icon="device-mobile" link="https://docs.evcc.io/en/docs/features/app" >}}
Monitor and control your charging from anywhere with the evcc companion app.
{{< /feature-card >}}

{{< feature-card title="Home battery" icon="battery-charging" link="https://docs.evcc.io/en/docs/features/battery" >}}
Coordinate battery and EV optimally. Battery boost for fast charging from storage. Top up with cheap grid energy when needed.
{{< /feature-card >}}

{{< feature-card title="Heat pumps" icon="thermometer" link="https://docs.evcc.io/en/docs/devices/heating" >}}
Use solar energy or cheap grid power for heating. evcc activates your heat pump automatically at the best times.
{{< /feature-card >}}

{{< feature-card title="Grid operator control" icon="shield-check" link="https://docs.evcc.io/en/docs/features/external-control" >}}
Automatic power reduction on grid operator signal. Supports German §14a regulation. All interventions are documented.
{{< /feature-card >}}

{{< feature-card title="Load management" icon="gauge" link="https://docs.evcc.io/en/docs/features/loadmanagement" >}}
Distribute available power across multiple charge points. Protects your grid connection from overload.
{{< /feature-card >}}

{{< feature-card title="Open Source" icon="github-logo" link="https://github.com/evcc-io/evcc" >}}
Transparent and independent. Development is funded by the community, not by corporations.
{{< /feature-card >}}
{{< /feature-cards >}}

---

<!-- {{< split >}}
{{< split-entry-image >}}
<h3>Solar surplus</h3>
{{< svg-animation src="/img/solar-surplus.svg" id="solar-surplus" >}}
{{</ split-entry-image>}}
{{< split-entry-image >}}
<h3>Dynamic grid power</h3>
{{< svg-animation src="/img/dynamic-grid.svg" id="dynamic-grid" >}}
{{</ split-entry-image>}}
{{</ split>}} -->

---

## We 💚 good UI

We want to make smart energy management easy for everyone. Ideally, everything works without manual intervention or regular adjustments. But if you do want to see what the system is doing, we have a **clean and responsive web interface** ready to go.

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

Try our demo instance to explore the interface.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Try demo instance
{{</ button-cta>}}

---

## We talk to all manufacturers {#devices}

Closed ecosystems, cloud services, and proprietary solutions are not our cup of tea.
evcc runs on **your own hardware** and lets your devices work together intelligently - **no matter the manufacturer.**
Your data stays with you.

{{< infobox title="Supported & tested systems" >}}

{{< infobox-entry title="Chargers" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Vehicles" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Solar & storage" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Smart switches" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Heat pumps & electric heaters" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Energy meters" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

More details can be found in our [documentation](https://docs.evcc.io/en/docs/devices/chargers). If your device is not supported yet, let us know on [GitHub](https://github.com/evcc-io/evcc). If it has an interface, we can connect it.

---

## Get started in minutes

{{< steps >}}
{{< step title="Install" >}}Flash the image to an SD card and plug it into your Raspberry Pi.<br>Alternatively: Docker on your NAS or server.{{< /step >}}
{{< step title="Configure" >}}Everything right in the browser: add devices, adjust settings, done.{{< /step >}}
{{< step title="Charge" >}}evcc optimizes automatically. Monitor everything via the web interface or the app.{{< /step >}}
{{< /steps >}}

{{< button-cta url="https://docs.evcc.io/en/docs/installation" target="_blank">}}
Get Started
{{</ button-cta>}}

---

## Support the project

Join the community, help fix bugs, improve documentation, or just share your experience. Get in touch on the [Forum](https://github.com/evcc-io/evcc/discussions) or chat with us on [Slack](/slack).

To sustain a project of this size we need your support. Learn more about our [sponsoring model](https://docs.evcc.io/en/docs/sponsorship).

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Contact us
{{</ button-cta>}}

---

## From the Community

{{< live-telemetry >}}

In our [blog](https://docs.evcc.io/en/blog) we regularly feature evcc installations from the community. Get to know the [people](#community-person) and their [technology](#community-tech) behind these setups.

{{< community >}}
{{< community-entry img="orv" name="Osnabrück Rowing Club" link="https://docs.evcc.io/en/blog/2025/11/29/osnabruecker-ruderverein">}}
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

## Sponsors

{{< sponsors >}}

## Core Team

{{< team >}}
