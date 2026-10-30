---
title: "evcc - Chytré nabíjení - Inteligentní řízení energie pro váš domov"
description: "Nabíjejte svůj elektromobil chytře. Ovládejte nabíječku, tepelné čerpadlo a domácí baterii. Funguje se stovkami zařízení. Vše máte pod kontrolou a data zůstávají vaše. Open source a vyvíjeno komunitou."
---

# Chytré nabíjení. Úplně jednoduše.

Nabíjejte svůj elektromobil chytře. Ovládejte nabíječku, tepelné čerpadlo a domácí baterii. Funguje se stovkami zařízení. Vše máte pod kontrolou a data zůstávají vaše. Open source a vyvíjeno komunitou.

{{< button-cta url="https://docs.evcc.io/cs/installation" target="_blank" subline="Raspberry Pi, Docker a další.">}}
Začít
{{</ button-cta>}}

---

## Funkce

{{< feature-cards >}}
{{< feature-card title="Nabíjení ze solárního přebytku" icon="sun" link="https://docs.evcc.io/cs/features/solar-charging" >}}
Vaše auto se nabíjí, když svítí slunce. Nabíjecí výkon automaticky sleduje dostupný přebytek.
{{< /feature-card >}}

{{< feature-card title="Dynamické tarify elektřiny" icon="lightning" link="https://docs.evcc.io/cs/features/dynamic-prices" >}}
S tarify podle spotových cen nabíjíte automaticky v nejlevnějších hodinách.
{{< /feature-card >}}

{{< feature-card title="Plány nabíjení a předpovědi" icon="calendar-check" link="https://docs.evcc.io/cs/features/plans" >}}
Nastavte čas odjezdu a cíl nabíjení. evcc automaticky najde nejlevnější nebo nejekologičtější časy nabíjení.
{{< /feature-card >}}

{{< feature-card title="Aplikace pro iOS a Android" icon="device-mobile" link="https://docs.evcc.io/cs/features/app" >}}
Sledujte a ovládejte nabíjení odkudkoli s doprovodnou aplikací evcc.
{{< /feature-card >}}

{{< feature-card title="Domácí baterie" icon="battery-charging" link="https://docs.evcc.io/cs/features/battery" >}}
Optimálně sladí domácí baterii a elektromobil. Funkce Rychlé dobití nabije auto z domácí baterie. V případě potřeby ji doplní levnou energií ze sítě.
{{< /feature-card >}}

{{< feature-card title="Tepelná čerpadla" icon="thermometer" link="https://docs.evcc.io/cs/heating" >}}
Využijte k vytápění solární energii nebo levnou elektřinu ze sítě. evcc zapne vaše tepelné čerpadlo automaticky v nejvhodnější dobu.
{{< /feature-card >}}

{{< feature-card title="Řízení provozovatelem sítě" icon="shield-check" link="https://docs.evcc.io/cs/external-limit" >}}
Automatické snížení výkonu na signál provozovatele sítě. Podporuje německou regulaci § 14a. Všechny zásahy jsou zdokumentovány.
{{< /feature-card >}}

{{< feature-card title="Řízení zátěže" icon="gauge" link="https://docs.evcc.io/cs/features/loadmanagement" >}}
Rozdělí dostupný výkon mezi více nabíjecích bodů. Chrání vaši přípojku k síti před přetížením.
{{< /feature-card >}}

{{< feature-card title="Open Source" icon="github-logo" link="https://github.com/evcc-io/evcc" >}}
Transparentní a nezávislé. Vývoj financuje komunita, ne korporace.
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

## Na dobrém UI nám 💚 záleží

Chceme, aby chytré řízení energie bylo snadné pro každého. Ideálně vše funguje bez ručních zásahů a pravidelného dolaďování. Pokud ale chcete vidět, co systém dělá, máme pro vás připravené **přehledné a responzivní webové rozhraní**.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_small_main_2" width="489" alt="Snímek obrazovky evcc na iPhonu: tok energie a aktuální nabíjení" >}}
{{< screenshot-entry src="2_small_plan_departure" width="489" alt="Snímek obrazovky evcc na iPhonu: dialogové okno plánu nabíjení s dynamickými cenami elektřiny" >}}
{{< screenshot-entry src="3_small_battery" width="489" alt="Snímek obrazovky evcc na iPhonu: pravidla nabíjení podle domácí baterie" >}}
{{< screenshot-entry src="4_small_forecast" width="489" alt="Snímek obrazovky evcc na iPhonu: předpověď solární výroby a ceny ze sítě" >}}
{{< screenshot-entry src="5_small_year_cost" width="489" alt="Snímek obrazovky evcc na iPhonu: roční přehled s náklady na nabíjení" >}}
{{< screenshot-entry src="6_large_total_solar" width="1305" alt="Snímek obrazovky evcc na iPadu: solární podíl a celková statistika" >}}
{{< screenshot-entry src="7_large_main_energyflow" width="1305" alt="Snímek obrazovky evcc na iPadu: tok energie a aktuální nabíjení" >}}
{{< screenshot-entry src="8_large_sessions" width="1305" alt="Snímek obrazovky evcc na iPadu: nabíjecí relace se solárním podílem a energií podle vozidla" >}}
{{< screenshot-entry src="9_large_session_detail" width="1305" alt="Snímek obrazovky evcc na iPadu: podrobnosti nabíjecí relace" >}}
{{< screenshot-entry src="10_small_savings" width="489" alt="Snímek obrazovky evcc na iPhonu: přehled nabité energie se solárním podílem, cenou energie a emisemi CO₂" >}}
{{< /screenshots >}}

Vyzkoušejte naši demo instanci a prozkoumejte rozhraní.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Vyzkoušet demo instanci
{{</ button-cta>}}

---

## Jak to funguje

Systém běží lokálně a průběžně sbírá data z vaší domácnosti: odběr ze sítě a export do sítě, solární výrobu, spotřebu domu a stav nabití vaší domácí baterie a vozidla. Na tomto základě **řídí vaši nabíječku** a nabíjí vaše auto přesně tehdy, když je elektřina nejlevnější nebo nejekologičtější.

{{< themed-image light="/img/evcc-schema1-light.svg" dark="/img/evcc-schema1-dark.svg" width="627" height="465" alt="Schéma: evcc propojuje fotovoltaickou elektrárnu, síť, domácí baterii, spotřebu a vozidlo a řídí nabíječku" >}}

---

## Komunikujeme se všemi výrobci {#devices}

Uzavřené ekosystémy, cloudové služby a proprietární řešení nám nejsou po chuti.
evcc běží na **vašem vlastním hardwaru** a nechá vaše zařízení chytře spolupracovat, **bez ohledu na výrobce.**
Vaše data zůstávají u vás.

{{< infobox title="Podporované a otestované systémy" >}}

{{< infobox-entry title="Nabíječky" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Vozidla" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Solár a baterie" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Chytré spínače" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Tepelná čerpadla a elektrické ohřívače" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Měřiče energie" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

Další podrobnosti najdete v naší [dokumentaci](https://docs.evcc.io/cs/chargers). Pokud vaše zařízení zatím není podporováno, dejte nám vědět na [GitHubu](https://github.com/evcc-io/evcc). Pokud má rozhraní, dokážeme ho připojit.

---

## Spuštění během několika minut

{{< steps >}}
{{< step title="Instalace" >}}Nahrajte image na SD kartu a vložte ji do Raspberry Pi.<br>Alternativně: Docker na vašem NAS nebo serveru.{{< /step >}}
{{< step title="Konfigurace" >}}Vše přímo v prohlížeči: přidejte zařízení, upravte nastavení, hotovo.{{< /step >}}
{{< step title="Nabíjení" >}}evcc optimalizuje automaticky. Vše sledujete přes webové rozhraní nebo aplikaci.{{< /step >}}
{{< /steps >}}

{{< button-cta url="https://docs.evcc.io/cs/installation" target="_blank">}}
Začít
{{</ button-cta>}}

---

## Podpořte projekt

Zapojte se do komunity, pomozte opravovat chyby, vylepšovat dokumentaci nebo se jen podělte o své zkušenosti. Ozvěte se na [fóru](https://github.com/evcc-io/evcc/discussions) nebo s námi chatujte na [Slacku](/slack).

Projekt této velikosti potřebuje vaši podporu, aby mohl dál fungovat. Více se dozvíte o našem [sponzorském modelu](https://docs.evcc.io/cs/sponsorship).

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Kontaktujte nás
{{</ button-cta>}}

---

## Z komunity

{{< live-telemetry >}}

Na našem [blogu](https://docs.evcc.io/cs/blog/) pravidelně představujeme instalace evcc z komunity. Poznejte [lidi](#community-person) a [techniku](#community-tech) za těmito instalacemi.

{{< community >}}
{{< community-entry img="joerg" name="Technický blogger Jörg" link="https://docs.evcc.io/cs/blog/2026/10/29/joerg-meintechblog">}}
{{< community-entry img="orv" name="Veslařský klub Osnabrück" link="https://docs.evcc.io/cs/blog/2025/11/29/osnabruecker-ruderverein">}}
{{< community-entry img="tobias" name="Tobias z Treburu" link="https://docs.evcc.io/cs/blog/2025/10/04/tobias-aus-trebur">}}
{{< community-entry img="michael" name="Michael z hlavního týmu" link="https://docs.evcc.io/cs/blog/2025/06/30/michael-vom-core-team">}}
{{< community-entry img="ulrike-gunther" name="Ulrike a Gunther z Alzenau" link="https://docs.evcc.io/cs/blog/2025/04/26/ulrike-und-gunther-aus-alzenau">}}
{{< community-entry img="olaf" name="Olaf z Bergisch Gladbachu" link="https://docs.evcc.io/cs/blog/2024/12/21/olaf-aus-bergisch-gladbach">}}
{{< community-entry img="andreas" name="Andreas z Wettringenu" link="https://docs.evcc.io/cs/blog/2024/11/14/andreas-aus-wettringen">}}
{{< community-entry img="bastian" name="Bastian z Ahlhornu" link="https://docs.evcc.io/cs/blog/2024/10/25/portrait-bastian-aus-alhorn">}}
{{< community-entry img="tjarko" name="Tjarko z Großefehnu" link="https://docs.evcc.io/cs/blog/2024/09/21/portrait-tjarko-grossefehn">}}
{{< community-entry img="christian" name="Christian z Trebbinu" link="https://docs.evcc.io/cs/blog/2024/08/25/portrait-christian-trebbin">}}
{{< community-entry img="arne" name="Arne z Gifhornu" link="https://docs.evcc.io/cs/blog/2024/08/09/portrait-arne-gifhorn">}}
{{< /community >}}

---

## Sponzoři

{{< sponsors >}}

## Hlavní tým

{{< team >}}
