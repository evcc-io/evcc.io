---
header_button_cta:
  url: "https://github.com/andig/evcc"
  title: "Get evcc"
---

# Sonne tanken. Ganz einfach.

evcc ist angetreten, die Nachhaltigkeit beim Laden unserer Elektroautos zu optimieren. Dazu ermöglicht evcc das Laden mit möglichst viel selbsterzeugten Strom. Im Idealfall ist dies sogar ohne weitere Änderung in der bestehenden Haus-Elektroinstallation möglich.

---

## Was EVCC besonders macht

- Lade dein E-Auto mit selbst erzeugtem Sonnenstrom
- Nutze bereits vorhandene Systeme (PV- und Batteriewechselrichter, Wallboxen, Energiezähler)
- Intuitive und übersichtliche Benutzeroberfläche
- 100% Open Source

---

## Wie evcc funktioniert

![alt text](img/evcc-schema.svg "Darstellung der Funktionsweise")

Den eigenen Sonnenstrom zum Laden des Autos zu verwenden bedeutet den Eigenverbrauch zu erhöhen und damit den Strom nicht ins Netz abzugeben sondern selbst zu nutzen.

Unterstützte Wallboxen ermöglichen es die Stromstärke mit der das Auto geladen wird zu steuern. Wenn viel Sonnenstrom erzeugt wird, erlaubt evcc der Wallbox das angeschlossene Auto mit hoher Leistung zu laden. Wird weniger Strom erzeugt verlangsamt oder pausiert evcc den Ladevorgang.

Damit evcc die Ladung bestmöglich regeln kann, ist ein Messgerät (=auslesbarer Energiezähler) am Netzanschluss der Hausinstallation notwendig. Durch dieses Messgerät kennt evcc den momentanen Energieüberschuss und kann die Ladeleistung kontinuierlich anpassen.

Wenn eine unterstützte Photovoltaikanlage vorhanden ist, kann evcc auch die aktuelle PV-Leistung anzeigen. Ist ein unterstützter Energiespeicher vorhanden, kann auch dessen Ladezustand angezeigt werden. Und wenn sogar ein unterstütztes Elektroauto vorhanden ist, kann evcc automatisch dessen momentanen Batterieladezustand übermittelt bekommen und so den benötigten Reichweitenbedarf sicherstellen - auch wenn die Sonne ab und an mal nicht so viel scheint. Und das sind nur einige Beispiele was mit evcc möglich ist oder in Zukunft möglich sein wird!

Sollte es dennoch mal ganz schnell gehen müssen lässt sich auf Wunsch das Fahrzeug auch jederzeit mit maximaler Leistung laden.

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

Beim momentanen Stand der Entwicklung wird mindestens etwas Linux-Grundwissen für die Installation der Software benötigt. evcc läuft auf beliebiger Computer-Hardware (Linux, NAS, Raspberry PI) - entweder als Binary oder mit Docker benötigt. Die Konfiguration erfolgt momentan noch manuell über eine yaml-Datei. Für einige Systeme existieren bereits [Beispielkonfigurationen](https://github.com/andig/evcc-config).

Neben der Software muss eine ausreichende Haus-Installation vorhanden sein und eine Vernetzung der Komponenten gegeben sein.
Vor allem das Messgerät für den Energieüberschuss muss vom gewählten Computer erreichbar sein und ausgelesen werden können. Falls so ein Energiezähler bzw. Messmodul nicht bereits vorhanden ist, ist es notwendig dass ein Elektriker ein entsprechendes installiert. Bei einem existierenden PV-System ist eine solche Messeinrichtung recht häufig schon vorhanden, bei einem installierten Batteriespeichersystem sogar regelmäßig.

---

## Unterstütze das Projekt

### Aktiv teilnehmen

Werde Teil unseres Entwicklungsteams und hilf dein installiertes System zu unterstützen, Fehler zu korrigieren und die Dokumentation zu verbessern. 
Erzähle deinen Freunden und Bekannten von den Möglichkeiten die evcc bietet.

Komm in unseren Chat, lerne uns kennen und diskutiere mit: [Slack](https://join.slack.com/t/evccgroup/shared_invite/zt-fw52e6lt-tdazCp1LPdPlYuKz3PvTAw)

### Finanzieller Support

Alle Beteiligten arbeiten an evcc in ihrer Freizeit. Du kannst uns gerne mit einer Spende unterstützen.

Arbeitest du in einer Firma welche Wallboxen, Messgeräte oder PV-Systeme anbietet? Möchtest du euren Kunden das Laden mit eigenem Sonnenstrom ermöglichen? Sprich uns gerne an. Hardware Sponsoring hilft uns die Fähigkeiten von evcc auszubauen.

---

## Implemented in [Go](https://golang.org)

![EVCC Gopher](img/ccs-gopher.svg)
