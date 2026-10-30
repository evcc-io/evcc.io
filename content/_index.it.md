---
title: "evcc - Ricarica intelligente - Gestione smart dell’energia per la tua casa"
description: "Ricarica il tuo veicolo elettrico in modo intelligente. Controlla caricabatterie, pompa di calore e batteria domestica. Funziona con centinaia di dispositivi. Il controllo è tuo, i dati sono tuoi. Open source e portato avanti dalla community."
---

# Ricarica intelligente. Semplicissima.

Ricarica il tuo veicolo elettrico in modo intelligente. Controlla caricabatterie, pompa di calore e batteria domestica. Funziona con centinaia di dispositivi. Il controllo è tuo, i dati sono tuoi. Open source e portato avanti dalla community.

{{< button-cta url="https://docs.evcc.io/it/installation" target="_blank" subline="Raspberry Pi, Docker e altro.">}}
Inizia ora
{{</ button-cta>}}

---

## Funzionalità

{{< feature-cards >}}
{{< feature-card title="Ricarica con surplus solare" icon="sun" link="https://docs.evcc.io/it/features/solar-charging" >}}
La tua auto si ricarica quando splende il sole. La potenza di ricarica segue automaticamente il surplus disponibile.
{{< /feature-card >}}

{{< feature-card title="Tariffe elettriche dinamiche" icon="lightning" link="https://docs.evcc.io/it/features/dynamic-prices" >}}
Con le tariffe a prezzo spot ricarichi automaticamente nelle ore più economiche.
{{< /feature-card >}}

{{< feature-card title="Piani di ricarica e previsioni" icon="calendar-check" link="https://docs.evcc.io/it/features/plans" >}}
Imposta l’orario di partenza e l’obiettivo di ricarica. evcc trova automaticamente gli orari di ricarica più economici o più puliti.
{{< /feature-card >}}

{{< feature-card title="App per iOS e Android" icon="device-mobile" link="https://docs.evcc.io/it/features/app" >}}
Monitora e controlla la ricarica da qualsiasi luogo con l’app di evcc.
{{< /feature-card >}}

{{< feature-card title="Batteria domestica" icon="battery-charging" link="https://docs.evcc.io/it/features/battery" >}}
Coordina al meglio batteria e auto elettrica. Il boost da batteria permette una ricarica veloce dall’accumulo. Se serve, ricarica la batteria con energia economica dalla rete.
{{< /feature-card >}}

{{< feature-card title="Pompe di calore" icon="thermometer" link="https://docs.evcc.io/it/heating" >}}
Usa l’energia solare o l’energia economica dalla rete per il riscaldamento. evcc attiva automaticamente la tua pompa di calore nei momenti migliori.
{{< /feature-card >}}

{{< feature-card title="Controllo del gestore di rete" icon="shield-check" link="https://docs.evcc.io/it/external-limit" >}}
Riduzione automatica della potenza su segnale del gestore di rete. Supporta la normativa tedesca § 14a EnWG. Tutti gli interventi vengono documentati.
{{< /feature-card >}}

{{< feature-card title="Gestione del carico" icon="gauge" link="https://docs.evcc.io/it/features/loadmanagement" >}}
Distribuisce la potenza disponibile su più punti di ricarica. Protegge il tuo allacciamento alla rete dal sovraccarico.
{{< /feature-card >}}

{{< feature-card title="Open source" icon="github-logo" link="https://github.com/evcc-io/evcc" >}}
Trasparente e indipendente. Lo sviluppo è finanziato dalla community, non da grandi aziende.
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

## Ci piacciono le belle interfacce 💚

Vogliamo rendere la gestione intelligente dell’energia semplice per tutti. Idealmente tutto funziona senza interventi manuali né continue regolazioni. Ma se vuoi vedere cosa fa il sistema, c’è un’**interfaccia web pulita e reattiva** pronta all’uso.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_small_main_2" width="489" alt="Screenshot di evcc su iPhone: flusso di energia e ricarica in corso" >}}
{{< screenshot-entry src="2_small_plan_departure" width="489" alt="Screenshot di evcc su iPhone: finestra di dialogo del piano di ricarica con prezzi dell’energia dinamici" >}}
{{< screenshot-entry src="3_small_battery" width="489" alt="Screenshot di evcc su iPhone: regole di ricarica in base alla batteria domestica" >}}
{{< screenshot-entry src="4_small_forecast" width="489" alt="Screenshot di evcc su iPhone: previsione della produzione solare e del prezzo da rete" >}}
{{< screenshot-entry src="5_small_year_cost" width="489" alt="Screenshot di evcc su iPhone: panoramica annuale con i costi di ricarica" >}}
{{< screenshot-entry src="6_large_total_solar" width="1305" alt="Screenshot di evcc su iPad: quota solare e statistiche complessive" >}}
{{< screenshot-entry src="7_large_main_energyflow" width="1305" alt="Screenshot di evcc su iPad: flusso di energia e ricarica in corso" >}}
{{< screenshot-entry src="8_large_sessions" width="1305" alt="Screenshot di evcc su iPad: sessioni di ricarica con quota solare ed energia per veicolo" >}}
{{< screenshot-entry src="9_large_session_detail" width="1305" alt="Screenshot di evcc su iPad: dettagli di una sessione di ricarica" >}}
{{< screenshot-entry src="10_small_savings" width="489" alt="Screenshot di evcc su iPhone: panoramica dell’energia caricata con quota solare, prezzo dell’energia ed emissioni di CO₂" >}}
{{< /screenshots >}}

Prova la nostra istanza demo per esplorare l’interfaccia.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Prova l’istanza demo
{{</ button-cta>}}

---

## Come funziona

Il sistema gira in locale e raccoglie di continuo i dati della tua casa: prelievo dalla rete e immissione in rete, produzione solare, consumo domestico e livello di carica della batteria domestica e del veicolo. Sulla base di questi dati **controlla il tuo caricabatterie** e ricarica l’auto proprio quando l’energia è più economica o più pulita.

{{< themed-image light="/img/evcc-schema1-light.svg" dark="/img/evcc-schema1-dark.svg" width="627" height="465" alt="Schema: evcc collega impianto fotovoltaico, rete, batteria domestica, consumo e veicolo e controlla il caricabatterie" >}}

---

## Parliamo con tutti i produttori {#devices}

Ecosistemi chiusi, servizi cloud e soluzioni proprietarie non fanno per noi.
evcc gira sul **tuo hardware** e fa collaborare in modo intelligente i tuoi dispositivi, **di qualunque produttore.**
I tuoi dati restano nelle tue mani.

{{< infobox title="Sistemi supportati e testati" >}}

{{< infobox-entry title="Caricabatterie" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Veicoli" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Fotovoltaico e accumulo" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Prese commutabili" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Pompe di calore e resistenze elettriche" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Contatori di energia" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

Trovi maggiori dettagli nella nostra [documentazione](https://docs.evcc.io/it/chargers). Se il tuo dispositivo non è ancora supportato, faccelo sapere su [GitHub](https://github.com/evcc-io/evcc). Se ha un’interfaccia, possiamo collegarlo.

---

## Inizia in pochi minuti

{{< steps >}}
{{< step title="Installa" >}}Scrivi l’immagine su una scheda SD e inseriscila nel tuo Raspberry Pi.<br>In alternativa: Docker sul tuo NAS o server.{{< /step >}}
{{< step title="Configura" >}}Tutto direttamente nel browser: aggiungi i dispositivi, regola le impostazioni, fatto.{{< /step >}}
{{< step title="Ricarica" >}}evcc ottimizza in automatico. Tieni tutto sotto controllo dall’interfaccia web o dall’app.{{< /step >}}
{{< /steps >}}

{{< button-cta url="https://docs.evcc.io/it/installation" target="_blank">}}
Inizia ora
{{</ button-cta>}}

---

## Sostieni il progetto

Unisciti alla community, aiuta a correggere bug, migliora la documentazione o semplicemente condividi la tua esperienza. Scrivici sul [forum](https://github.com/evcc-io/evcc/discussions) o chatta con noi su [Slack](/slack).

Per portare avanti un progetto di queste dimensioni abbiamo bisogno del tuo sostegno. Scopri di più sul nostro [modello di sponsorizzazione](https://docs.evcc.io/it/sponsorship).

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Contattaci
{{</ button-cta>}}

---

## Dalla community

{{< live-telemetry >}}

Nel nostro [blog](https://docs.evcc.io/it/blog/) presentiamo regolarmente installazioni di evcc della community. Scopri le [persone](#community-person) e la [tecnologia](#community-tech) dietro questi impianti.

{{< community >}}
{{< community-entry img="joerg" name="Il tech blogger Jörg" link="https://docs.evcc.io/it/blog/2026/10/29/joerg-meintechblog">}}
{{< community-entry img="orv" name="Circolo di canottaggio di Osnabrück" link="https://docs.evcc.io/it/blog/2025/11/29/osnabruecker-ruderverein">}}
{{< community-entry img="tobias" name="Tobias da Trebur" link="https://docs.evcc.io/it/blog/2025/10/04/tobias-aus-trebur">}}
{{< community-entry img="michael" name="Michael, core team" link="https://docs.evcc.io/it/blog/2025/06/30/michael-vom-core-team">}}
{{< community-entry img="ulrike-gunther" name="Ulrike e Gunther da Alzenau" link="https://docs.evcc.io/it/blog/2025/04/26/ulrike-und-gunther-aus-alzenau">}}
{{< community-entry img="olaf" name="Olaf da Bergisch Gladbach" link="https://docs.evcc.io/it/blog/2024/12/21/olaf-aus-bergisch-gladbach">}}
{{< community-entry img="andreas" name="Andreas da Wettringen" link="https://docs.evcc.io/it/blog/2024/11/14/andreas-aus-wettringen">}}
{{< community-entry img="bastian" name="Bastian da Ahlhorn" link="https://docs.evcc.io/it/blog/2024/10/25/portrait-bastian-aus-alhorn">}}
{{< community-entry img="tjarko" name="Tjarko da Großefehn" link="https://docs.evcc.io/it/blog/2024/09/21/portrait-tjarko-grossefehn">}}
{{< community-entry img="christian" name="Christian da Trebbin" link="https://docs.evcc.io/it/blog/2024/08/25/portrait-christian-trebbin">}}
{{< community-entry img="arne" name="Arne da Gifhorn" link="https://docs.evcc.io/it/blog/2024/08/09/portrait-arne-gifhorn">}}
{{< /community >}}

---

## Sponsor

{{< sponsors >}}

## Core team

{{< team >}}
