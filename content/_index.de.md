# Sonne tanken. Ganz einfach.

evcc ist angetreten, die Nachhaltigkeit beim Laden unserer Elektrofahrzeuge zu optimieren. Dazu ermöglicht evcc das Laden mit möglichst viel selbsterzeugten Solarstrom. In den meisten Fällen ist das sogar ohne weitere Änderung an der bestehenden Haus-Elektroinstallation möglich.

---

{{< live-telemetry >}}

---

## Was evcc besonders macht

- Lade dein Elektrofahrzeug mit eigenem PV Überschussstrom
- Nutze bereits vorhandene Systeme (PV- und Batteriewechselrichter, Wallboxen, Energiezähler)
- Intuitive und übersichtliche Benutzeroberfläche
- 100 % Open Source

---

## Wir 💚 gute Benutzeroberflächen

Wir möchten, dass PV-Strom-Laden für alle einfach möglich wird. Im Optimalfall funktioniert das ganz ohne manuelles Regeln und Einstellen. Wenn du aber doch mal sehen willst, was das System so macht, haben wir **eine aufgeräumte und responsive Weboberfläche** parat.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_evcc_mobile_standard" width="508" >}}
{{< screenshot-entry src="2_evcc_mobile_details" width="508" >}}
{{< screenshot-entry src="3_evcc_mobile_savings" width="508" >}}
{{< screenshot-entry src="4_evcc_tablet_standard" width="1387" >}}
{{< screenshot-entry src="5_evcc_tablet_details" width="1387" >}}
{{< /screenshots >}}

Wir haben eine Beispiel-Installation aufgesetzt mit der du die Oberfäche schon mal ausprobieren kannst.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Demo Instanz ansehen
{{</ button-cta>}}

---

## Wie evcc funktioniert

{{< full_width_image src="/img/evcc-schema.svg" alt="Darstellung der Funktionsweise" width="200" height="100" >}}

Den eigenen Sonnenstrom zum Laden des Autos zu verwenden bedeutet den Eigenverbrauch zu erhöhen und damit den Strom nicht ins Netz abzugeben sondern selbst zu nutzen.

Bereits heute werden zahlreiche Hersteller von Wallboxen unterstützt und evcc ermöglicht es die Stromstärke, mit der das Auto geladen wird, zu steuern. Das heißt, wenn viel Sonnenstrom erzeugt wird, erlaubt evcc das angeschlossene Auto mit hoher Leistung zu laden. Wird weniger Strom erzeugt, verlangsamt oder pausiert evcc den Ladevorgang.

Damit evcc die Ladung bestmöglich regeln kann, ist ein Messgerät (= auslesbarer Energiezähler) am Netzanschluss der Hausinstallation notwendig. Durch dieses Messgerät kennt evcc den momentanen Energieüberschuss und kann die Ladeleistung kontinuierlich anpassen. Das Gute ist, dass in fast jeder vorhandenen PV-Anlage ein entsprechendes Gerät bereits vorhanden ist oder einfach nachgerüstet werden kann.

Ist ein durch evcc unterstütztes Elektrofahrzeug eingerichtet, kann dessen momentaner Batterieladezustand und Reichweite angezeigt und in der Ladeplanung mit berücksichtigt werden - auch, wenn die Sonne ab und an mal nicht so viel scheint, bleibt so die Mobilität sichergestellt.

Und noch etwas kann evcc: Ist ein unterstützter Batteriespeicher vorhanden, wird auch dessen Ladezustand gesteuert und mit Sonnenstrom versorgt.

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

evcc setzt bei der Anbindung der Komponenten auf weit verbreitete Schnittstellen und Protokolle, wie z.B. Modbus, SunSpec, HTTP, JSON, REST sowie MQTT.
Damit lassen sich nahezu alle am Markt verfügbaren und vorhandenen Produkte herstellerunabhängig nach den jeweiligen Erfordernissen und örtlichen Gegebenheiten anbinden.
Um sich auch mit anderen, übergeordneten Energiemanagern abzusprechen hat evcc zusätzliche Unterstützung der Protokolle SEMP und EEBUS integriert.

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
