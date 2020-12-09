---
header_button_cta:
  url: "https://github.com/andig/evcc"
  title: "evcc auf GitHub"
---

# Sonne tanken. Ganz einfach.

evcc ist angetreten, die Nachhaltigkeit beim Laden unserer Elektroautos zu optimieren. Dazu ermöglicht evcc das Laden mit möglichst viel selbsterzeugtem Strom. Im optimalen Fall ist dies sogar ohne Änderung an der Haus-Installation möglich.

[evcc herunterladen](https://github.com/andig/evcc)

---

## Was evcc besonders macht

- Lade dein E-Auto mit selbst erzeugtem Sonnenstrom
- Nutze bereits vorhandene Systeme (PV, Wallboxen)
- Intuitive und übersichtliche Benutzeroberfläche
- 100% Open Source

---

## Wie evcc funktioniert

{{< full_width_image src="img/evcc-schema.svg" src-s="img/evcc-schema-s.svg" alt="Darstellung der Funktionsweise" >}}

Den eigenen Sonnenstrom zum Laden des Autos zu verwenden bedeutet den Eigenverbrauch zu erhöhen und damit den Strom nicht zu verkaufen sondern selbst zu verwenden.

Unterstützte Wallboxen ermöglichen es die Stromstärke mit der das Auto geladen wird zu verändern. Wenn viel Sonnenstrom erzeugt wird, erlaubt evcc der Wallbox das angeschlossene Auto mit hoher Leistung zu laden. Wird weniger Strom erzeugt verlangsamt oder pausiert evcc den Ladevorgang.

Damit evcc die Wallbox bestmöglich steuern kann, ist ein Messgerät am Netzanschluss der Hausinstallation notwendig. Durch dieses Messgerät kennt evcc den momentanen PV-Überschuss und kann die Ladeleistung entsprechend anpassen.

Wenn eine unterstützte PV-Installation vorhanden ist, kann evcc auch die aktuelle PV-Leistung anzeigen. Ist eine unterstützte Hausbatterie vorhanden, kann auch deren Kapazität angezeigt werden. Und wenn sogar ein unterstütztes Elektroauto vorhanden ist, kann evcc die Ladung bei einem gewünschten Batterieladestand beendet werden. Und das sind nur einige Beispiele was mit evcc möglich ist oder in Zukunft möglich sein wird!

---

{{< infobox >}}

## Unterstützte Systeme

### Wallboxen

go-eCharger • EVSEWifi • KEBA • NRGkick • openWB • Phoenix • Porsche Mobile Charger Connect • SimpleEVSE • Wallbe

### Messgeräte

Discovergy • Eastron SDM • SMA Home Manager & Energy Meter • weitere ModBus & MQTT basierte Systeme

### Wechselrichter

E3DC • Fronius • KOSTAL • SMA • SolarEdge • Tesla PowerWall

### Autos

Audi • BMW • Ford • Hyundai • Kia • Nissan • Porsche • Renault • Tesla • Volkswagen

{{< /infobox >}}

---

## Screenshots

[hier kommen Screenshots]

[Demo ansehen](https://demo.evcc.io/)

---

## Für wen sich evcc eignet

Beim momentanen Stand der Entwicklung wird Linux-Grundwissen für die Installation der Software benötigt. evcc läuft auf beliebiger Computer-Hardware (Linux, NAS, Raspberry PI) - entweder als Binary oder mit Docker benötigt. Die Konfiguration erfolgt momentan noch manuell über eine toml Datei. Für einige Systeme existieren bereits [Beispielkonfigurationen](https://github.com/andig/evcc-config).

Neben der Software muss eine ausreichende Haus-Installation vorhanden sein. Vor allem das Messgerät für den PV-Überschuss muss vom gewählten Computer erreichbar sein und ausgelesen werden können. Falls so ein Gerät nicht bereits vorhanden ist, ist es notwendig dass ein Elektriker ein entsprechendes installiert. Je nach vorhandenem PV-System kann ein solches auch schon vorhanden sein.

---

## Unterstütze das Projekt

### Aktiv teilnehmen

Werde Teil unseres Entwicklungsteams und hilf dein installiertes System zu unterstützen, Fehler zu korrigieren und die Dokumentation zu verbessern.
Erzähle deinen Freunden und Bekannten von den Möglichkeiten die evcc bietet.

Komm in unseren Chat, lerne uns kennen und diskutiere mit: [Slack](https://join.slack.com/t/evccgroup/shared_invite/zt-fw52e6lt-tdazCp1LPdPlYuKz3PvTAw)

### Finanzieller Support

Alle Beteiligten arbeiten an evcc in ihrer Freizeit. Du kannst uns gerne mit einer Spende [unterstützen](https://github.com/sponsors/andig).

Arbeitest du in einer Firma welche Wallboxen, Messgeräte oder PV-Systeme anbietet? Möchtest du euren Kunden das Laden mit eigenem Sonnenstrom ermöglichen? Sprich uns gerne an. Hardware Sponsoring hilft uns die Fähigkeiten von evcc auszubauen.

---

## Implementiert in [Go](https://golang.org)

![EVCC Gopher](img/ccs-gopher.svg)
