---
header_button_cta:
  url: "https://github.com/andig/evcc"
  title: "evcc auf GitHub"
---

# Sonne tanken. Ganz einfach.

evcc ist angetreten, die Nachhaltigkeit beim Laden unserer Elektrofahrzeuge zu optimieren. Dazu ermöglicht evcc das Laden mit möglichst viel selbsterzeugten Strom. Im Idealfall ist dies sogar ohne weitere Änderung in der bestehenden Haus-Elektroinstallation möglich.

[evcc herunterladen](https://github.com/andig/evcc)

---

## Was evcc besonders macht

- Lade deine Elektrofahrzeuge mit selbst erzeugtem Sonnenstrom
- Nutze bereits vorhandene Systeme (PV- und Batteriewechselrichter, Wallboxen, Energiezähler)
- Intuitive und übersichtliche Benutzeroberfläche
- 100% Open Source

---

## Wie evcc funktioniert

{{< full_width_image src="img/evcc-schema.svg" src-s="img/evcc-schema-s.svg" alt="Darstellung der Funktionsweise" >}}

Den eigenen Sonnenstrom zum Laden des Autos zu verwenden bedeutet den Eigenverbrauch zu erhöhen und damit den Strom nicht ins Netz abzugeben sondern selbst zu nutzen.

Unterstützte Wallboxen ermöglichen es die Stromstärke mit der das Auto geladen wird zu steuern. Wenn viel Sonnenstrom erzeugt wird, erlaubt evcc der Wallbox das angeschlossene Auto mit hoher Leistung zu laden. Wird weniger Strom erzeugt verlangsamt oder pausiert evcc den Ladevorgang.

Damit evcc die Ladung bestmöglich regeln kann, ist ein Messgerät (=auslesbarer Energiezähler) am Netzanschluss der Hausinstallation notwendig. Durch dieses Messgerät kennt evcc den momentanen Energieüberschuss und kann die Ladeleistung kontinuierlich anpassen.

Wenn eine unterstützte Photovoltaikanlage vorhanden ist, kann evcc auch die aktuelle PV-Leistung anzeigen. Ist ein unterstützter Energiespeicher vorhanden, kann auch dessen Ladezustand gesteuert und angezeigt werden. Und wenn sogar ein unterstütztes Elektrofahrzeug eingerichtet ist, kann evcc automatisch dessen momentanen Batterieladezustand übermittelt bekommen und so den benötigten Reichweitenbedarf rechtzeitig sicherstellen - auch wenn die Sonne ab und an mal nicht so viel scheint. Und das sind nur einige Beispiele was mit evcc möglich ist oder in Zukunft möglich sein wird!

Sollte es dennoch mal ganz schnell gehen müssen lässt sich auf Wunsch das Fahrzeug auch jederzeit mit maximaler Leistung laden.

---

{{< infobox >}}

## Unterstützte Komponenten (getestet)

### Wallboxen & Steckdosen

AVM FritzDECT • go-eCharger • EVSEWifi • smartWB • KEBA • NRGkick • openWB • Phoenix Contact • Porsche Mobile Charger Connect • EVSE DIN • Tasmota • TinkerForge WARP • Wallbe

### Energiemessgeräte

Discovergy • Eastron SDM • KOSTAL Smart Energy Meter • SMA Sunny Home Manager & Energy Meter • vzlogger

### Wechselrichter & Speichersysteme

E3DC • Fronius • Kaco • KOSTAL • SMA • SolarEdge • SolarLog • sonnen • Tesla PowerWall

### Fahrzeuge

Audi • BMW • Ford • Hyundai • Kia • Mini • Nissan • NIU (E-Scooter) • Porsche • PSA • Renault • Seat • ŠKODA • Tesla • Volkswagen • Volvo

{{< /infobox >}}

evcc setzt bei der Anbindung der Komponenten auf weit verbreitete Schnittstellen und Protokolle wie z. B. Modbus, SunSpec, HTTP, JSON, REST sowie MQTT.
Damit lassen sich nahezu alle am Markt verfügbaren und vorhandenen Produkte herstellerunabhängig nach den jeweiligen Erfordernissen und örtlichen Gegebenheiten anbinden.
Um sich auch mit anderen übergeordneten Energiemanagern abzusprechen hat evcc zusätzliche Unterstützung der Protokolle OCPP, SEMP und EEBUS integriert.

---

## Demo

[Demo der Benutzeroberfläche ansehen](https://demo.evcc.io/)

---

## Für wen sich evcc eignet

Beim momentanen Stand der Entwicklung wird mindestens etwas Linux-Grundwissen für die Installation der Software benötigt. evcc läuft auf beliebiger Computer-Hardware (Windows 64bit, Linux, NAS, Raspberry Pi uvm.) - entweder als Binary oder im Docker-Container.
Die Konfiguration erfolgt momentan noch manuell über eine speziell formatierte [YAML](https://de.wikipedia.org/wiki/YAML)-Datei. Für viele verbreitete Komponenten und typische Konstellationen existieren bereits [Beispielkonfigurationen](https://github.com/andig/evcc-config).

Neben der Software muss eine entsprechende Haus-Installation vorhanden und eine Vernetzung der Komponenten gegeben sein.
Vor allem das Messgerät für den Energieüberschuss muss vom gewählten Computer erreichbar sein und ausgelesen werden können. Falls ein geeigneter Energiezähler bzw. ein dazu passendes Messmodul nicht bereits vorhanden ist, ist es ggf. notwendig dass ein Elektriker ein entsprechendes installiert. Bei einem existierenden PV-System ist eine solche Messeinrichtung recht häufig schon vorhanden, bei einem installierten Batteriespeichersystem sogar regelmäßig.

Die besondere Stärke von evcc ist die Flexibilät bei der Anbindung der vorhandenen Komponenten die kaum Einschränkungen kennt.
Durch die Vielzahl der am Markt verfügbaren und im Bestand verbauten PV-, Speicher- und Energiemesskomponenten, deren individuelle Verschaltung vor Ort, verschiedener Softwareversionsstände usw. ist es aber leider - speziell für Einsteiger - nicht immer ganz einfach auf Anhieb eine dazu passende Grundkonfiguration für evcc zu erstellen. Unterstützung bietet dabei jedoch eine integrierten Scanfunktion, die das eigene Netzwerk nach bestimmten bekannten Geräten durchsuchen kann und somit zumindest eine Hilfestellung bietet. Dennoch ist etwas technisches Verständnis und eine möglichst gute Kenntnis des Anlagenaufbaus für die Ersteinrichtung notwendig. Ist dieser Schritt aber einmal gemeistert ist die Benutzung kinderleicht.

---

## Unterstütze das Projekt

### Aktiv teilnehmen

Werde Teil unseres Entwicklungsteams und hilf dein installiertes System zu unterstützen, Fehler zu korrigieren und die Dokumentation zu verbessern.
Erzähle deinen Freunden und Bekannten von den Möglichkeiten die evcc bietet.

Informiere dich, stelle Fragen und erhalte Unterstützung von anderen Anwendern und Entwicklern im [Forum](https://github.com/andig/evcc/discussions).
Komm in unseren Chat, lerne uns kennen und diskutiere mit: [Slack](https://join.slack.com/t/evccgroup/shared_invite/zt-fw52e6lt-tdazCp1LPdPlYuKz3PvTAw)

### Finanzieller Support

Alle Beteiligten arbeiten an evcc in ihrer Freizeit. Du kannst uns gerne mit einer Spende [unterstützen](https://github.com/sponsors/andig).

Arbeitest du in einer Firma welche Wallboxen, Energiemesssysteme oder PV-Systeme anbietet? Möchtest du euren Kunden das Laden mit eigenem Sonnenstrom ermöglichen? Sprich uns gerne an. Eigene Code-Beiträge und Hardware-Sponsoring helfen uns die Fähigkeiten von evcc auszubauen.

---

## Implementiert in [Go](https://golang.org)

![EVCC Gopher](img/ccs-gopher.svg)
