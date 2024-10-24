# Sonne tanken. Ganz einfach.

evcc ist ein Energie-Management-System mit Fokus auf Elektromobilität.
Die Software steuert deine [Wallbox oder Schaltsteckdose](#devices).
Um intelligente Entscheidungen zu treffen, kommuniziert es auch mit deinem [Fahrzeug, Wechselrichter oder Hausspeicher](#devices).
Die Software ist Open-Source und lebt von der Community.

{{< button-cta url="https://docs.evcc.io/docs/installation" target="_blank" subline="Raspberry Pi, Docker und co.">}}
Jetzt loslegen
{{</ button-cta>}}

---

## Laden, wenn die Sonne scheint

{{< split >}}
{{< split-entry-image >}}
{{< svg-animation src="/img/solar-surplus.svg" id="solar-surplus" >}}
{{</ split-entry-image>}}
{{< split-entry-text >}}
Dein Ladevorgang startet, sobald genug eigener Sonnenstrom produziert wird.
Die Ladeleistung wird permanent an den verfügbaren Überschuss angepasst.

Das erhöht Autarkie und spart Geld.
{{</ split-entry-text>}}
{{</ split>}}

{{< live-telemetry >}}

---

## Grünen & günstigen Netzstrom nutzen

{{< split >}}
{{< split-entry-image >}}
{{< svg-animation src="/img/dynamic-grid.svg" id="dynamic-grid" >}}
{{</ split-entry-image>}}
{{< split-entry-text >}}
Zu wenig Sonne oder keine PV-Anlage? Lade, wenn viel Erneuerbare verfügbar sind und unterstütze damit die Energiewende.

Mit einem [dynamischen Stromtarif](https://docs.evcc.io/docs/features/dynamic-prices) sparst du sogar ordentlich Geld.
{{</ split-entry-text>}}
{{</ split>}}

---

## Wir 💚 gute Benutzeroberflächen

Wir möchten, dass PV-Strom-Laden für alle einfach wird. Im Optimalfall funktioniert das ganz ohne manuelles Regeln und Einstellen. Wenn du aber doch mal sehen willst, was das System so macht, haben wir **eine aufgeräumte und responsive Weboberfläche** parat.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_evcc_mobile_standard" width="508" >}}
{{< screenshot-entry src="2_evcc_mobile_details" width="508" >}}
{{< screenshot-entry src="3_evcc_mobile_savings" width="508" >}}
{{< screenshot-entry src="4_evcc_tablet_standard" width="1387" >}}
{{< screenshot-entry src="5_evcc_tablet_details" width="1387" >}}
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
{{< infobox-entry title="Wallboxen & Steckdosen" img="img/evcc-illu-wallbox.svg" >}}
{{< infobox-content group="Chargers">}}
{{< infobox-content group="SmartPlugs">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Energiemesstechnik" img="img/evcc-illu-energiemessung.svg" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Wechselrichter & Speichersysteme" img="img/evcc-illu-wechselrichter.svg" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Fahrzeuge" img="img/evcc-illu-fahrzeuge.svg" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}
{{< /infobox >}}

Mehr Details findest du in unserer [Dokumentation](https://docs.evcc.io/docs/devices/chargers). Ist dein Gerät noch nicht unterstützt, dann lass es uns auf [GitHub](https://github.com/evcc-io/evcc) wissen. Wenn es eine Schnittstelle hat, können wir es anbinden.

### Plugin-Architektur und Smarthome-Integration

Du hast ein spezielles Setup oder verwendest exotische Geräte? evcc kommt mit einer **flexiblen Plugin-Architektur** und erlaubt es dir, eigene Anbindungen über Modbus, SunSpec, HTTP, JSON, REST, MQTT, JavaScript und Shell zu entwickeln.

Zudem gibt es Integrationen für Home Assistant, openHAB und ioBroker.
Um sich auch mit anderen, übergeordneten Energiemanagern abzusprechen, hat evcc zusätzlich eine Unterstützung der Protokolle SEMP und EEBUS integriert.

## Wie evcc funktioniert

{{< full_width_image src="/img/evcc-schema.svg" alt="Darstellung der Funktionsweise" width="200" height="100" >}}

Die Funktionsweise von evcc ist relativ einfach.
Das System sammelt aktuelle Informationen über die Energieerzeugung, den Zustand des Hausakkus, den aktuellen Strompreis und den Ladezustand des Elektroautos.

Mit dieser Daten regelt evcc die Wallbox, um deinen [PV-Überschuss](https://docs.evcc.io/docs/features/solar-charging) maximal zu nutzen.
Hast du einen dynamischen Stromtarif, kannst du einen [Ladeplan](https://docs.evcc.io/docs/features/plans) oder eine [Preisgrenze](https://docs.evcc.io/docs/features/dynamic-prices) definieren, um in den günstigsten Zeiten zu laden.

### Fahrzeugintegration

Bietet dein [Elektroauto eine API](https://docs.evcc.io/docs/features/vehicle), kann evcc Informationen wie den aktuellen Ladestand abfragen.
Diese Daten können genutzt werden, um Komfortfunktionen wie [Ladelimits](https://docs.evcc.io/docs/features/limits) zur Akkupflege oder einen [Mindestladestand](https://docs.evcc.io/docs/features/limits) für sofortiges Aufladen zu definieren.

In der Oberfläche kannst du deine [Ladevorgänge](https://docs.evcc.io/docs/features/sessions) sehen.
Sofern dein Fahrzeug dies unterstützt, wird neben dem Sonnenanteil und den angefallenen Kosten auch der Kilometerstand angezeigt.

### Hausakkuintegration

Über die [Hausbatteriesteuerung](https://docs.evcc.io/docs/features/battery) definierst du, ob die Überschussenergie zuerst in den Hausakku oder ins Elektroauto fließen soll.
Neuere Hybridwechselrichter können auch direkt über evcc gesteuert werden.
Dadurch kann evcc das ungewollte Entladen des Hausakkus verhindern oder ihn in den Wintermonaten gezielt zu Zeiten mit günstigem Netzstrom laden.

### Große Anlagen, kleine Anlagen

Auch komplexere Szenarien wie das Laden von mehreren Fahrzeuge, die Einbindung mehrerer PV- und Speichersysteme oder ein [Lastmanagement](https://docs.evcc.io/docs/features/loadmanagement) um den Hausanschluss nicht zu überlasten, sind möglich.

Hast du eine Balkon-PV-Anlage und schaltbare Steckdosen?
Auch dann hilft dir evcc, um deinen E-Bike-Akku mit Sonnenstrom zu laden oder deine Eiswürfelmaschine bei Überschuss zu aktivieren.
Viele Mikrowechselrichter und smarte Steckdosen werden unterstützt.

---

## Installiere evcc bei dir zuhause

### Systemvoraussetzung

evcc ist in Go geschrieben und sehr effizient: es wird weder viel CPU noch RAM benötigt. Typischerweise läuft evcc auf einem **Raspberry Pi** oder in **Docker** (z.B. Synology NAS) bei dir zuhause. Windows, macOS und Linux werden auch unterstützt.

### evcc einrichten

evcc ist sehr flexibel. Die Ersteinrichtung erfordert aktuell aber noch einige technische Kenntnisse.
Wenn dich die Verwendung der Kommandozeile nicht schockt und du schon mal eine YAML-Datei bearbeitet hast, steht der Installation nichts im Weg.
In der Dokumentation erfährst du alles, was du wissen musst.

{{< button-cta url="https://docs.evcc.io/">}}
Jetzt loslegen
{{</ button-cta>}}

---

## Professioneller Support

Du bist Solarteur oder Elektriker, richtest beruflich Ladelösungen ein und brauchst Unterstützung bei der Einrichtung von evcc? Wir können leider keinen individuellen Support leisten. Für eine Beratung, Betreuung oder Schulung vermitteln wir dich aber gerne an Experten und Poweruser aus der Community, die das System sehr gut kennen.

{{< button-cta url="mailto:pro-support@evcc.io?subject=Anfrage professioneller evcc-Support" type="secondary">}}
Anfrage stellen
{{</ button-cta>}}

---

## c't Magazin erklärt evcc

{{< youtube link="https://www.youtube.com/watch?v=MoBpEXHMNjI" thumb="video/evcc-ct-youtube-video.webp" title="c't erklärt evcc" width="1000" height="563" >}}

In diesem YouTube Video der c't Redaktion bekommst du einen schnellen Überblick über evcc, wie es funktioniert und was es kann.

---

## Unterstütze das Projekt

### Aktiv teilnehmen

Werde Teil unseres Entwicklungsteams und hilf mit, dein installiertes System zu unterstützen, Fehler zu korrigieren und die Dokumentation zu verbessern.

Informiere dich, stelle Fragen und erhalte Unterstützung von anderen Anwendern und Entwicklern im [Forum](https://github.com/evcc-io/evcc/discussions).
Oder komm in unseren Chat, lerne uns kennen und diskutiere mit uns: [Slack](/slack)

### Finanzieller Support

Um ein Projekt dieser Größenordnung nachhaltig vorantreiben zu können, brauchen wir eure Unterstützung. Hier erfährst du mehr über unser [Sponsoring Modell](https://docs.evcc.io/docs/sponsorship).

Arbeitest du in einer Firma, die Wallboxen, Energiemesssysteme oder PV-Systeme anbietet? Möchtest du euren Kunden das Laden mit eigenem Sonnenstrom ermöglichen? Sprich uns gerne an. Eigene Code-Beiträge und Hardware-Sponsoring helfen uns, die Fähigkeiten von evcc auszubauen.

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Sprich uns an
{{</ button-cta>}}

## Sponsoren

{{< sponsors >}}

## Core Team

{{< team >}}
