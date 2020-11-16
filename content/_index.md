---
header_button_cta:
  url: "https://github.com/andig/evcc"
  title: "Get evcc"
---

# Lade dein Auto mit eigener PV

evcc ist angetreten, die Nachhaltigkeit beim Laden unserer Elektroautos noch weiter zu optimieren. Dazu ermöglicht evcc das Laden mit möglichst viel selbsterzeugten Strom. Im optimalen Fall ist dies sogar ohne Änderung in der Haus-Installation möglich.

---

## Was EVCC besonders macht

- Lade dein E-Auto mit selbst erzeugtem Sonnenstrom
- Nutze bereits vorhandene Systeme (PV, Wallboxen)
- Intuitive und übersichtliche Benutzeroberfläche
- 100% Open Source

---

## Wie evcc funktioniert

![alt text](img/schema.png "Darstellung der Funktionsweise")

Den eigenen Sonnenstrom zum Laden des Autos zu verwenden bedeutet den Eigenverbrauch zu erhöhen und damit den Strom nicht zu verkaufen sondern selbst zu verwenden.

Unterstütze Wallboxen ermöglichen es die Stromstärke mit der das Auto geladen wird zu verändern. Wenn mehr Sonnenstrom erzeugt wird, teilt evcc der Wallbox mit dem Auto zu erlauben mit höherer Leistung zu laden. Wenn wieder weniger Strom erzeugt wird, wird die Leistung begrenzt oder sogar komplett pausiert.

Damit evcc nun entscheiden kann wie die Wallbox geregelt werden soll, ist ein Messgerät am Netzanschluss der Hausinstallation notwendig, welches den aktuellen PV Überschuß an evcc melden kann.

Wenn eine unterstütze PV Installation vorhanden ist, kann evcc auch die aktuelle PV-Leistung anzeigen. Ist eine unterstütze Hausbatterie vorhanden, kann auch deren Kapazität angezeigt werden. Und wenn sogar ein unterstützes Elektroauto vorhanden ist, kann evcc die Ladung bei einem gewünschten Batterieladestand beendet werden. Und das sind nur einige Beispiele was mit evcc möglich ist oder in Zukunft möglich sein wird!

---

## Unterstützte Systeme

### Wallboxen

go-eCharger • EVSEWifi • KEBA • NRGkick • openWB • Phoenix • Porsche Mobile Charger Connect • SimpleEVSE • Wallbe

### Messgeräte

Discovergy • Eastron SDM • SMA Home Manager & Energy Meter • weitere ModBus & MQTT basierte Systeme

### Wechselrichter

E3DC • Fronius • KOSTAL • SMA • SolarEdge • Tesla PowerWall

### Autos

Audi • BMW • Ford • Hyundai • Kia • Nissan • Porsche • Renault • Tesla • Volkswagen

---

## Screenshots

[hier kommen Screenshots]

[Demo ansehen](https://demo.evcc.io/)

---

## Für wen sich evcc eignet

Beim momentanen Stand der Entwicklung wird etwas Grundwissen im Bereich der Installation der Software auf einem Computer (Linux, NAS, Raspberry Pi) entweder als Binary oder mit Docker benötigt. Dazu muss auch eine Konfigurationsdatei manuell in einem bestimmten Format (toml) editiert werden. Für einige System existieren bereits Beispielkonfigurationen.

Neben der Software muss eine ausreichende Haus-Installation vorhanden sein. Vor allem das Messgerät für den PV-Überschuß muss vom gewählten Computer erreichbar sein und ausgelesen werden können. Falls so ein Gerät nicht bereits vorhanden ist, ist es notwendig dass ein Elektriker ein entpsrechendes installiert. Je nach vorhandenem PV System kann ein solches auch schon vorhanden sein.

---

## Unterstütze das Projekt

### Aktiv teilnehmen

Werde Teil unseres Entwicklungsteams und hilf dein installiertes System zu unterstützen, Fehler zu korrigieren, die Dokumentation zu verbessern oder deinen Freunden und Bekannten von den Möglichkeiten von evcc zu erzählen.

Komm in unseren Chat und lerne uns kennen: [Slack](https://join.slack.com/t/evccgroup/shared_invite/zt-fw52e6lt-tdazCp1LPdPlYuKz3PvTAw)

### Finanzieller Support

Alle Beteiligten arbeiten an evcc in ihrer Freizeit. Du kannst uns gerne mit einer Spende unterstützen.

Arbeitest du in einer Firma welche Wallboxen, Messgeräte oder PV System anbietet und möchtet auch euren Kunden das Laden mit eigenem Sonnenstrom ermöglichen? Sprecht uns gerne für ein sponsoring an um eure Hardware in evcc zu unterstützen.

---

## Implemented in [Go](https://golang.org)

![EVCC Gopher](img/ccs-gopher.svg)
