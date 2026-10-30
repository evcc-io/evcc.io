# Smart opladning. Super enkelt.

Oplad din elbil intelligent. Styr oplader, varmepumpe og hjemmebatteri. Fungerer med hundredvis af enheder. Din kontrol, dine data. Open source og drevet af fællesskabet.

{{< button-cta url="https://docs.evcc.io/da/installation" target="_blank" subline="Raspberry Pi, Docker og co.">}}
Kom i gang
{{</ button-cta>}}

---

## Funktioner

{{< feature-cards >}}
{{< feature-card title="Opladning med soloverskud" icon="sun" link="https://docs.evcc.io/da/features/solar-charging" >}}
Din bil lader, når solen skinner. Ladeeffekten følger automatisk det tilgængelige overskud.
{{< /feature-card >}}

{{< feature-card title="Dynamiske eltariffer" icon="lightning" link="https://docs.evcc.io/da/features/dynamic-prices" >}}
Med spotpristariffer lader du automatisk i de billigste timer.
{{< /feature-card >}}

{{< feature-card title="Ladeplaner & prognoser" icon="calendar-check" link="https://docs.evcc.io/da/features/plans" >}}
Angiv afgangstidspunkt og opladningsmål. evcc finder automatisk de billigste eller grønneste tidspunkter at lade på.
{{< /feature-card >}}

{{< feature-card title="iOS- og Android-app" icon="device-mobile" link="https://docs.evcc.io/da/features/app" >}}
Overvåg og styr din opladning hvor som helst med evcc-appen.
{{< /feature-card >}}

{{< feature-card title="Hjemmebatteri" icon="battery-charging" link="https://docs.evcc.io/da/features/battery" >}}
Koordiner batteri og elbil optimalt. Batteriboost til hurtig opladning fra hjemmebatteriet. Fyld op med billig energi fra elnettet efter behov.
{{< /feature-card >}}

{{< feature-card title="Varmepumper" icon="thermometer" link="https://docs.evcc.io/da/heating" >}}
Brug solenergi eller billig strøm fra elnettet til opvarmning. evcc aktiverer automatisk din varmepumpe på de bedste tidspunkter.
{{< /feature-card >}}

{{< feature-card title="Styring fra netselskabet" icon="shield-check" link="https://docs.evcc.io/da/external-limit" >}}
Automatisk effektreduktion ved signal fra netselskabet. Understøtter den tyske § 14a-regulering. Alle indgreb dokumenteres.
{{< /feature-card >}}

{{< feature-card title="Belastningsstyring" icon="gauge" link="https://docs.evcc.io/da/features/loadmanagement" >}}
Fordel den tilgængelige effekt på flere ladepunkter. Beskytter din nettilslutning mod overbelastning.
{{< /feature-card >}}

{{< feature-card title="Open source" icon="github-logo" link="https://github.com/evcc-io/evcc" >}}
Gennemsigtigt og uafhængigt. Udviklingen finansieres af fællesskabet, ikke af koncerner.
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

## Vi 💚 gode brugerflader

Vi vil gøre smart energistyring enkel for alle. Ideelt set fungerer alt uden manuelle indgreb eller løbende justeringer. Men hvis du gerne vil se, hvad systemet laver, har vi en **overskuelig og responsiv webbrugerflade** klar.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_small_main_2" width="489" alt="evcc iPhone-skærmbillede: energiflow og aktuel opladning" >}}
{{< screenshot-entry src="2_small_plan_departure" width="489" alt="evcc iPhone-skærmbillede: dialogboks for ladeplan med dynamiske elpriser" >}}
{{< screenshot-entry src="3_small_battery" width="489" alt="evcc iPhone-skærmbillede: opladningsregler afhængigt af hjemmebatteriet" >}}
{{< screenshot-entry src="4_small_forecast" width="489" alt="evcc iPhone-skærmbillede: prognose for solproduktion og elpris" >}}
{{< screenshot-entry src="5_small_year_cost" width="489" alt="evcc iPhone-skærmbillede: årsoversigt med opladningsomkostninger" >}}
{{< screenshot-entry src="6_large_total_solar" width="1305" alt="evcc iPad-skærmbillede: solandel og samlet statistik" >}}
{{< screenshot-entry src="7_large_main_energyflow" width="1305" alt="evcc iPad-skærmbillede: energiflow og aktuel opladning" >}}
{{< screenshot-entry src="8_large_sessions" width="1305" alt="evcc iPad-skærmbillede: opladningssessioner med solandel og energi pr. køretøj" >}}
{{< screenshot-entry src="9_large_session_detail" width="1305" alt="evcc iPad-skærmbillede: detaljer om en opladningssession" >}}
{{< screenshot-entry src="10_small_savings" width="489" alt="evcc iPhone-skærmbillede: oversigt over ladeenergi med solandel, energipris og CO₂-emission" >}}
{{< /screenshots >}}

Prøv vores demoinstans for at udforske brugerfladen.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Prøv demoinstansen
{{</ button-cta>}}

---

## Sådan fungerer det

Systemet kører lokalt og indsamler løbende data fra dit hjem: import fra og eksport til elnettet, solproduktion, husets forbrug samt opladningsniveauet for dit hjemmebatteri og dit køretøj. På den baggrund **styrer det din oplader** og lader din bil, præcis når strømmen er billigst eller grønnest.

{{< themed-image light="/img/evcc-schema1-light.svg" dark="/img/evcc-schema1-dark.svg" width="627" height="465" alt="Diagram: evcc forbinder solcelleanlæg, elnet, hjemmebatteri, forbrug og køretøj og styrer opladeren" >}}

---

## Vi taler alle producenters sprog {#devices}

Lukkede økosystemer, cloudtjenester og proprietære løsninger er ikke vores kop te.
evcc kører på **din egen hardware** og får dine enheder til at arbejde intelligent sammen, **uanset producent.**
Dine data bliver hos dig.

{{< infobox title="Understøttede og testede systemer" >}}

{{< infobox-entry title="Opladere" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Køretøjer" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Solceller & lagring" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Smarte kontakter" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Varmepumper & elvarme" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Energimålere" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

Flere detaljer finder du i vores [dokumentation](https://docs.evcc.io/da/chargers). Hvis din enhed endnu ikke understøttes, så giv os besked på [GitHub](https://github.com/evcc-io/evcc). Hvis den har en grænseflade, kan vi forbinde den.

---

## Kom i gang på få minutter

{{< steps >}}
{{< step title="Installer" >}}Flash imaget til et SD-kort, og sæt det i din Raspberry Pi.<br>Alternativt: Docker på din NAS eller server.{{< /step >}}
{{< step title="Konfigurer" >}}Alt direkte i browseren: tilføj enheder, juster indstillinger, færdig.{{< /step >}}
{{< step title="Oplad" >}}evcc optimerer automatisk. Følg med i alt via webbrugerfladen eller appen.{{< /step >}}
{{< /steps >}}

{{< button-cta url="https://docs.evcc.io/da/installation" target="_blank">}}
Kom i gang
{{</ button-cta>}}

---

## Støt projektet

Bliv en del af fællesskabet, hjælp med at rette fejl, forbedr dokumentationen, eller del bare dine erfaringer. Kontakt os på [forummet](https://github.com/evcc-io/evcc/discussions), eller chat med os på [Slack](/slack).

For at holde et projekt af denne størrelse i gang har vi brug for din støtte. Læs mere om vores [sponsormodel](https://docs.evcc.io/da/sponsorship).

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Kontakt os
{{</ button-cta>}}

---

## Fra fællesskabet

{{< live-telemetry >}}

På vores [blog](https://docs.evcc.io/da/blog/) præsenterer vi jævnligt evcc-installationer fra fællesskabet. Lær [menneskene](#community-person) bag installationerne og deres [teknologi](#community-tech) at kende.

{{< community >}}
{{< community-entry img="joerg" name="Techblogger Jörg" link="https://docs.evcc.io/da/blog/2026/10/29/joerg-meintechblog">}}
{{< community-entry img="orv" name="Osnabrück Roklub" link="https://docs.evcc.io/da/blog/2025/11/29/osnabruecker-ruderverein">}}
{{< community-entry img="tobias" name="Tobias fra Trebur" link="https://docs.evcc.io/da/blog/2025/10/04/tobias-aus-trebur">}}
{{< community-entry img="michael" name="Michael fra kerneteamet" link="https://docs.evcc.io/da/blog/2025/06/30/michael-vom-core-team">}}
{{< community-entry img="ulrike-gunther" name="Ulrike og Gunther fra Alzenau" link="https://docs.evcc.io/da/blog/2025/04/26/ulrike-und-gunther-aus-alzenau">}}
{{< community-entry img="olaf" name="Olaf fra Bergisch Gladbach" link="https://docs.evcc.io/da/blog/2024/12/21/olaf-aus-bergisch-gladbach">}}
{{< community-entry img="andreas" name="Andreas fra Wettringen" link="https://docs.evcc.io/da/blog/2024/11/14/andreas-aus-wettringen">}}
{{< community-entry img="bastian" name="Bastian fra Ahlhorn" link="https://docs.evcc.io/da/blog/2024/10/25/portrait-bastian-aus-alhorn">}}
{{< community-entry img="tjarko" name="Tjarko fra Großefehn" link="https://docs.evcc.io/da/blog/2024/09/21/portrait-tjarko-grossefehn">}}
{{< community-entry img="christian" name="Christian fra Trebbin" link="https://docs.evcc.io/da/blog/2024/08/25/portrait-christian-trebbin">}}
{{< community-entry img="arne" name="Arne fra Gifhorn" link="https://docs.evcc.io/da/blog/2024/08/09/portrait-arne-gifhorn">}}
{{< /community >}}

---

## Sponsorer

{{< sponsors >}}

## Kerneteam

{{< team >}}
