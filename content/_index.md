# Sonne tanken. Ganz einfach.

evcc ist angetreten, die Nachhaltigkeit beim Laden unserer Elektrofahrzeuge zu optimieren. Dazu ermöglicht evcc das Laden mit möglichst viel selbsterzeugten Solarstrom. In den meisten Fällen ist das sogar ohne weitere Änderung an der bestehenden Haus-Elektroinstallation möglich.

{{< features >}}
{{< feature-entry
    icon="sun"
    title="Sonnenstrom laden"
    description="evcc lädt dein Fahrzeug automatisch wenn die Sonne scheint. Total komfortabel." >}}
{{< feature-entry
    icon="coinjar"
    title="Geld sparen"
    description="Erhöhe deine Autarkie indem du Überschussstrom selbst nutzt anstatt ihn einzuspeisen. Das spart bares Geld." >}}
{{< feature-entry
    icon="eco1"
    title="Klima schonen"
    description="Grünstromverträge sind bilanziell CO₂-neutral. Laden an der eigenen PV-Anlage ist immer emmissionsfrei." >}}
{{< feature-entry
    icon="polygon"
    title="Netze entlasten"
    description="Hilf bei der Denzentralisierung des Stromnetztes. Verringere den Druck auf Kraftwerks- und Trassenausbau. Strom lokal nutzen ist die Zukunft." >}}
{{< /features >}}

---

## Wir 💚 gute Benutzeroberflächen

Wir möchten, dass PV-Strom-Laden für alle einfach möglich wird. Im Optimalfall funktioniert das ganz ohne manuelles Regeln und Einstellen. Wenn du aber doch mal sehen willst, was das System so macht haben wir **eine aufgeräumte und responsive Weboberfläche** parat.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_evcc_mobile_standard" width="508" >}}
{{< screenshot-entry src="2_evcc_mobile_details" width="508" >}}
{{< screenshot-entry src="3_evcc_mobile_savings" width="508" >}}
{{< screenshot-entry src="4_evcc_tablet_standard" width="1387" >}}
{{< screenshot-entry src="5_evcc_tablet_details" width="1387" >}}
{{< /screenshots >}}

---

## Wie evcc funktioniert

**evcc läuft bei dir zu Hause**, beispielsweise auf einem Raspberry Pi.

{{< full_width_image src="img/evcc-schema.svg" alt="Darstellung der Funktionsweise" width="200" height="100" >}}

**evcc regelt deine steuerbare Wallbox** abhängig von der aktuellen PV-Produktion und deinem Hausverbrauch. Produzierst du mehr Strom als benötigt startet evcc den Ladevorgang des Autos und passt die Stromstärke über den Tagesverlauf permanent an. Reicht der Überschussstrom nicht mehr aus weil Waschmaschine, Spülmaschine und der Herd gerade laufen pausiert evcc das Autoladen zeitweise.

Damit evcc die Ladung regeln kann, ist ein **auslesbarer Energiezähler** am Netzanschluss erforderlich. Bei den meisten Photovoltaik-Installationen ist so ein Messzähler schon vorhanden. Wir haben Schnittstellen für fast alle Hersteller implementiert.

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

Da evcc deine Wallbox steuert, funktioniert PV-Überschussladen mit allen dort angeschlossenen Fahrzeugen. Hat **dein Auto eine Online-API** kann evcc zusätzlich Informationen über den Ladestand und die Reichweite abfragen und anzeigen. Dadurch werden Funktionen wir Ladelimit, Zielzeitladen oder Mindestreichweite freigeschaltet.

Hast du **einen Batteriespeicher im Haus** können wir auch diesen berücksichtigen. Seine Energie kann zum Autoladen mitverwendet werden und du kannst sicherstellen, dass der Hausakku abends trotzdem noch gefüllt ist um ohne Netzbezug über die Nacht zu kommen.

### Balkonkraftwerke, Steckdosen, E-Bikes, ...

Der Kern von evcc ist das Laden von Elektroautos an der eigenen PV-Anlage. Allerdings unterstützen wir auch kleinere Installationen. evcc steuert nicht nur Wallboxen sondern auch **Smarte Steckdose**. Du kannst damit dein **E-Bike-Akku**, **E-Scooter**, **Akkuladegerät** oder eine **Powerbank** laden oder deine **Wärmepumpe**, **Elektroheizung** oder einen **Heizstab** schalten. Die Kombinationsmöglichkeiten sind hier vielfältig.

---

## Funktionen

### Sonnenoptimiertes Laden

### Automatische Phasenumschaltung

### Integration Hausspeicher

### Ladelimit

### Mindestreichweite

### Geplante Abfahrt

### Energiesituation im Blick

### Variable Stromtarife


---

## Was evcc besonders macht

{{< features >}}
{{< feature-entry
    icon="eco4"
    title="Unterstützt deine Geräte"
    description="Nutze PV-Überschussladen mit existierender Hardware. Wechselrichter und Wallbox müssen nicht vom gleichen Hersteller kommen." >}}
{{< feature-entry
    icon="github"
    title="100% Open Source"
    description="Wie sind überzeugt von offener Software. Das schafft Nachvollziehbarkeit und Vertrauen und führt zu besserer Qualität." >}}
{{< feature-entry
    icon="receivepayment"
    title="Community-finanziert"
    description="Eure Sponsorenbeiträge stellen die Weiterenticklung sicher und machen uns unabhängig von großen Firmen. Danke!" >}}
{{< feature-entry
    icon="shield"
    title="Dein Haus, deine Daten"
    description="Wir mistrauen Datenkraken. Deine Energiedaten sind privat und bleiben auf deiner eigenen evcc Instanz." >}}
{{< feature-entry
    icon="zoomout1"
    title="Minimaler Footprint"
    description="evcc ist in Go geschrieben und dadurch extrem ressourcensparend. Selbst der kleinste Raspberry Pi ist vollkommen ausreichend." >}}
{{< /features >}}

---

## evcc ist vernetzt und erweiterbar

evcc setzt bei der Anbindung der Komponenten auf weit verbreitete Schnittstellen und Protokolle, wie z.B. **Modbus, SunSpec, HTTP, JSON, OCPP, REST sowie MQTT**. Wenn du spezielle Anforderungen hast, kannst du mit **JavaScript oder Shell-Scripten** auch deine eigenen Geräte implementieren.

Energie- und Ladedaten lassen sich zu **InfluxDB** exportieren lassen und du kannst dich über Ereignisse wie "Ladevorang beendet" via **Pushover, Telegram oder E-Mail** benachrichtigen lassen.

Um sich auch mit anderen, übergeordneten Energiemanagern abzusprechen hat evcc zusätzliche Unterstützung der Protokolle **SEMP und EEBUS** (experimentell) integriert. Zudem kannst du evcc via **REST-API und MQTT** fernsteuern.

---

## Installiere evcc bei dir zuhause

### Systemvorraussetzung

evcc ist in Go geschrieben und sehr effizient. Es wird weder viel CPU noch RAM benötigt. Typischerweise läuft evcc auf einem **Raspberry Pi** oder in **Docker** (z.B. Synology NAS) in deinem Haus. Windows, macOS und Linux werden auch unterstützt.

### evcc einrichten

evcc ist sehr flexibel. Die Ersteinrichtung erfordert aktuell aber noch einige technische Kentnisse. Wenn dich die Verwendung der Kommandozeile nicht schockt und du schon mal eine YAML Datei bearbeitet hast, steht der Installation nichts im Weg.
In der Dokumentation erfährst du alles was du wissen musst.

{{< button-cta url="https://docs.evcc.io/">}}
Getting Started
{{</ button-cta>}}

---

## Unterstütze das Projekt

### Aktiv teilnehmen

Werde Teil unseres Entwicklungsteams und hilf mit, dein installiertes System zu unterstützen, Fehler zu korrigieren und die Dokumentation zu verbessern.

Informiere dich, stelle Fragen und erhalte Unterstützung von anderen Anwendern und Entwicklern im [Forum](https://github.com/evcc-io/evcc/discussions).
Oder komm in unseren Chat, lerne uns kennen und diskutiere mit uns: [Slack](/slack)

### Finanzieller Support

Alle Beteiligten arbeiten an evcc in ihrer Freizeit. Du kannst uns gerne [als GitHub Sponsor unterstützen](https://docs.evcc.io/docs/sponsorship).

Arbeitest du in einer Firma welche Wallboxen, Energiemesssysteme oder PV-Systeme anbietet? Möchtest du euren Kunden das Laden mit eigenem Sonnenstrom ermöglichen? Sprich uns gerne an. Eigene Code-Beiträge und Hardware-Sponsoring helfen uns die Fähigkeiten von evcc auszubauen.

## Sponsoren

{{< sponsors >}}
