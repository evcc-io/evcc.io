# Smart laden. Ganz einfach.

Lade dein Elektroauto intelligent. Steuere Wallbox, Wärmepumpe und Hausspeicher, egal von welchem Hersteller. Deine Kontrolle, deine Daten. Open Source und Community-getrieben.

{{< button-cta url="https://docs.evcc.io/docs/installation" target="_blank" subline="Raspberry Pi, Docker und co.">}}
Jetzt loslegen
{{</ button-cta>}}

---

## Features

{{< feature-cards >}}
{{< feature-card title="Überschussladen" icon="sun" link="https://docs.evcc.io/docs/features/solar-charging" >}}
Dein Auto lädt, wenn die Sonne scheint. Ladeleistung folgt automatisch dem verfügbaren Überschuss.
{{< /feature-card >}}

{{< feature-card title="Dynamische Stromtarife" icon="lightning" link="https://docs.evcc.io/docs/features/dynamic-prices" >}}
Mit Börsenstromtarifen lädst du automatisch in den günstigsten Stunden.
{{< /feature-card >}}

{{< feature-card title="Ladepläne & Prognosen" icon="calendar-check" link="https://docs.evcc.io/docs/features/plans" >}}
Abfahrtszeit und Ladeziel festlegen. evcc findet die günstigsten oder grünsten Ladezeiten automatisch.
{{< /feature-card >}}

{{< feature-card title="iOS- & Android-App" icon="device-mobile" link="https://docs.evcc.io/docs/features/app" >}}
Überwache und steuere dein Laden von unterwegs mit der evcc Companion App.
{{< /feature-card >}}

{{< feature-card title="Hausspeicher" icon="battery-charging" link="https://docs.evcc.io/docs/features/battery" >}}
Speicher und E-Auto optimal koordinieren. Per Batterieboost schnell aus dem Speicher laden. Bei Bedarf günstig aus dem Netz nachladen.
{{< /feature-card >}}

{{< feature-card title="Wärmepumpen" icon="thermometer" link="https://docs.evcc.io/docs/devices/heating" >}}
Nutze Sonne oder günstigen Strom zum Heizen. evcc aktiviert deine Wärmepumpe automatisch zu den besten Zeiten.
{{< /feature-card >}}

{{< feature-card title="§14a-ready" icon="shield-check" link="https://docs.evcc.io/docs/features/external-control" >}}
Automatische Leistungsreduzierung bei Netzbetreiber-Signal. Alle Eingriffe werden dokumentiert.
{{< /feature-card >}}

{{< feature-card title="Lastmanagement" icon="gauge" link="https://docs.evcc.io/docs/features/loadmanagement" >}}
Verteile die verfügbare Leistung auf mehrere Ladepunkte. Schützt deinen Hausanschluss vor Überlastung.
{{< /feature-card >}}

{{< feature-card title="Open Source" icon="github-logo" link="https://github.com/evcc-io/evcc" >}}
Transparent und unabhängig. Die Entwicklung wird durch die Community finanziert, nicht durch große Firmen.
{{< /feature-card >}}
{{< /feature-cards >}}

---

<!-- {{< split >}}
{{< split-entry-image >}}
<h3>PV-Überschuss</h3>
{{< svg-animation src="/img/solar-surplus.svg" id="solar-surplus" >}}
{{</ split-entry-image>}}
{{< split-entry-image >}}
<h3>Dynamischer Netzstrom</h3>
{{< svg-animation src="/img/dynamic-grid.svg" id="dynamic-grid" >}}
{{</ split-entry-image>}}
{{</ split>}} -->

---

## Wir 💚 gute Benutzeroberflächen

Wir möchten, dass smartes Energiemanagement für alle einfach wird. Im Optimalfall funktioniert das ganz ohne manuelles Regeln und Einstellen. Wenn du aber doch mal sehen willst, was das System so macht, haben wir **eine aufgeräumte und responsive Weboberfläche** parat.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_small_main" width="513" alt="evcc iPhone Screenshot: Energiefluss und aktueller Ladevorgang" >}}
{{< screenshot-entry src="2_small_plan" width="513" alt="evcc iPhone Screenshot: Dialog Ladeplanung mit dynamischen Strompreisen" >}}
{{< screenshot-entry src="3_small_battery" width="513" alt="evcc iPhone Screenshot: Dialog Hausakku-abhängige Laderegeln" >}}
{{< screenshot-entry src="4_small_month_cost" width="513" alt="evcc iPhone Screenshot: Monatsübersicht mit aktuellen Kosten" >}}
{{< screenshot-entry src="5_large_main" width="1262" alt="evcc iPad Screenshot: Energiefluss und aktueller Ladevorgang" >}}
{{< screenshot-entry src="6_large_year_solar" width="1262" alt="evcc iPad Screenshot: Sonnenanteil und Jahresstatistik" >}}
{{< screenshot-entry src="7_large_settings" width="1262" alt="evcc iPad Screenshot: Einstellungen preisabhängiges Laden" >}}
{{< /screenshots >}}

Wir haben eine Beispiel-Installation aufgesetzt, mit der du die Oberfläche schon mal ausprobieren kannst.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Demo-Instanz ansehen
{{</ button-cta>}}

---

## Wir sprechen mit allen Herstellern {#devices}

Wir sind keine Freunde von geschlossenen Ökosystemen, Clouddiensten und proprietären Lösungen.
evcc läuft auf **deiner eigenen Hardware** und lässt deine Geräte intelligent zusammenspielen – **egal von welchem Hersteller**.
Auch an deinen Daten haben wir kein Interesse.

{{< infobox title="Unterstützte und getestete Komponenten" >}}

{{< infobox-entry title="Wallboxen" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Fahrzeuge" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Wechselrichter & Speichersysteme" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Smarte Schalter" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Wärmepumpen & Heizstäbe" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Energiemesstechnik" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

Mehr Details findest du in unserer [Dokumentation](https://docs.evcc.io/docs/devices/chargers). Wird dein Gerät noch nicht unterstützt, lass es uns auf [GitHub](https://github.com/evcc-io/evcc) wissen. Wenn es eine Schnittstelle hat, können wir es anbinden.

---

## So einfach geht's

{{< steps >}}
{{< step title="Installieren" >}}Image auf SD-Karte flashen, Raspberry Pi starten.<br>Alternativ: Docker auf deinem NAS oder Server.{{< /step >}}
{{< step title="Konfigurieren" >}}Alles direkt im Browser: Geräte hinzufügen, Einstellungen anpassen, fertig.{{< /step >}}
{{< step title="Laden" >}}evcc optimiert automatisch. Alles im Blick über die Weboberfläche oder die App.{{< /step >}}
{{< /steps >}}

{{< button-cta url="https://docs.evcc.io/docs/installation" target="_blank">}}
Jetzt loslegen
{{</ button-cta>}}

---

## Unterstütze das Projekt

Werde Teil unseres Entwicklungsteams, hilf, Fehler zu korrigieren, die Dokumentation zu verbessern oder teile einfach deine Erfahrung. Informiere dich im [Forum](https://github.com/evcc-io/evcc/discussions) oder komm in unseren [Slack](/slack).

Um ein Projekt dieser Größenordnung nachhaltig vorantreiben zu können, brauchen wir deine Unterstützung. Hier erfährst du mehr über unser [Sponsoring-Modell](https://docs.evcc.io/docs/sponsorship).

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Sprich uns an
{{</ button-cta>}}

---

## Aus der Community

{{< live-telemetry >}}

In unserem [Blog](https://docs.evcc.io/blog) stellen wir regelmäßig evcc-Installationen aus der Community vor und geben dir einen Einblick in die [Menschen](#community-person) und ihre [Technik](#community-tech).

{{< community >}}
{{< community-entry img="orv" name="Osnabrücker Ruderverein" link="https://docs.evcc.io/blog/2025/11/29/osnabruecker-ruderverein">}}
{{< community-entry img="tobias" name="Tobias aus Trebur" link="https://docs.evcc.io/blog/2025/10/04/tobias-aus-trebur">}}
{{< community-entry img="michael" name="Michael, Core Team" link="https://docs.evcc.io/blog/2025/06/30/michael-vom-core-team">}}
{{< community-entry img="ulrike-gunther" name="Ulrike und Gunther aus Alzenau" link="https://docs.evcc.io/blog/2025/04/26/ulrike-und-gunther-aus-alzenau">}}
{{< community-entry img="olaf" name="Olaf aus Bergisch Gladbach" link="https://docs.evcc.io/blog/2024/12/21/olaf-aus-bergisch-gladbach">}}
{{< community-entry img="andreas" name="Andreas aus Wettringen" link="https://docs.evcc.io/blog/2024/11/14/andreas-aus-wettringen">}}
{{< community-entry img="bastian" name="Bastian aus Ahlhorn" link="https://docs.evcc.io/blog/2024/10/25/portrait-bastian-aus-alhorn">}}
{{< community-entry img="tjarko" name="Tjarko aus Großefehn" link="https://docs.evcc.io/blog/2024/09/21/portrait-tjarko-grossefehn">}}
{{< community-entry img="christian" name="Christian aus Trebbin" link="https://docs.evcc.io/blog/2024/08/25/portrait-christian-trebbin">}}
{{< community-entry img="arne" name="Arne aus Gifhorn" link="https://docs.evcc.io/blog/2024/08/09/portrait-arne-gifhorn">}}
{{< /community >}}

---

## Sponsoren

{{< sponsors >}}

## Core Team

{{< team >}}
