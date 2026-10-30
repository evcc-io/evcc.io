---
title: "evcc - Recharge intelligente - Pilotage de l’énergie pour votre maison"
description: "Rechargez votre véhicule électrique de manière intelligente. Pilotez votre chargeur, votre pompe à chaleur et votre batterie domestique. Compatible avec des centaines d’appareils. Vous gardez le contrôle et vos données. Open source et porté par la communauté."
---

# Recharge intelligente. Tout simplement.

Rechargez votre véhicule électrique de manière intelligente. Pilotez votre chargeur, votre pompe à chaleur et votre batterie domestique. Compatible avec des centaines d’appareils. Vous gardez le contrôle et vos données. Open source et porté par la communauté.

{{< button-cta url="https://docs.evcc.io/fr/installation" target="_blank" subline="Raspberry Pi, Docker et cie">}}
Commencer
{{</ button-cta>}}

---

## Fonctionnalités

{{< feature-cards >}}
{{< feature-card title="Charge avec le surplus solaire" icon="sun" link="https://docs.evcc.io/fr/features/solar-charging" >}}
Votre voiture se recharge quand le soleil brille. La puissance de charge suit automatiquement le surplus disponible.
{{< /feature-card >}}

{{< feature-card title="Tarifs d’électricité dynamiques" icon="lightning" link="https://docs.evcc.io/fr/features/dynamic-prices" >}}
Avec un tarif indexé sur le prix spot, la recharge a lieu automatiquement pendant les heures les moins chères.
{{< /feature-card >}}

{{< feature-card title="Plans de charge et prévisions" icon="calendar-check" link="https://docs.evcc.io/fr/features/plans" >}}
Indiquez l’heure de départ et l’objectif de charge. evcc trouve automatiquement les créneaux de charge les moins chers ou les plus propres.
{{< /feature-card >}}

{{< feature-card title="Application iOS et Android" icon="device-mobile" link="https://docs.evcc.io/fr/features/app" >}}
Suivez et pilotez votre recharge où que vous soyez avec l’application evcc.
{{< /feature-card >}}

{{< feature-card title="Batterie domestique" icon="battery-charging" link="https://docs.evcc.io/fr/features/battery" >}}
Coordonnez au mieux la batterie et le véhicule. Le boost batterie permet une recharge rapide à partir de la batterie domestique. Au besoin, la batterie se recharge avec de l’énergie bon marché du réseau.
{{< /feature-card >}}

{{< feature-card title="Pompes à chaleur" icon="thermometer" link="https://docs.evcc.io/fr/heating" >}}
Chauffez avec l’énergie solaire ou l’électricité bon marché du réseau. evcc active automatiquement votre pompe à chaleur aux meilleurs moments.
{{< /feature-card >}}

{{< feature-card title="Pilotage par le gestionnaire de réseau" icon="shield-check" link="https://docs.evcc.io/fr/external-limit" >}}
Réduction automatique de la puissance sur signal du gestionnaire de réseau. Compatible avec le § 14a EnWG (réglementation allemande). Toutes les interventions sont documentées.
{{< /feature-card >}}

{{< feature-card title="Gestion de la charge" icon="gauge" link="https://docs.evcc.io/fr/features/loadmanagement" >}}
Répartissez la puissance disponible entre plusieurs points de charge. Votre raccordement au réseau est protégé contre les surcharges.
{{< /feature-card >}}

{{< feature-card title="Open source" icon="github-logo" link="https://github.com/evcc-io/evcc" >}}
Transparent et indépendant. Le développement est financé par la communauté, pas par de grands groupes.
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

## Nous 💚 les belles interfaces

Nous voulons rendre la gestion intelligente de l’énergie accessible à tous. Idéalement, tout fonctionne sans intervention manuelle ni réglages réguliers. Mais si vous voulez voir ce que fait le système, une **interface web claire et adaptée à tous les écrans** est à votre disposition.

{{< theme-switch >}}

{{< screenshots class="content-gallery" >}}
{{< screenshot-entry src="1_small_main_2" width="489" alt="Capture d’écran evcc iPhone : flux d’énergie et recharge en cours" >}}
{{< screenshot-entry src="2_small_plan_departure" width="489" alt="Capture d’écran evcc iPhone : boîte de dialogue du plan de charge avec tarifs d’électricité dynamiques" >}}
{{< screenshot-entry src="3_small_battery" width="489" alt="Capture d’écran evcc iPhone : règles de charge selon la batterie domestique" >}}
{{< screenshot-entry src="4_small_forecast" width="489" alt="Capture d’écran evcc iPhone : prévision de la production solaire et du prix du réseau" >}}
{{< screenshot-entry src="5_small_year_cost" width="489" alt="Capture d’écran evcc iPhone : vue annuelle avec les coûts de charge" >}}
{{< screenshot-entry src="6_large_total_solar" width="1305" alt="Capture d’écran evcc iPad : part solaire et statistiques globales" >}}
{{< screenshot-entry src="7_large_main_energyflow" width="1305" alt="Capture d’écran evcc iPad : flux d’énergie et recharge en cours" >}}
{{< screenshot-entry src="8_large_sessions" width="1305" alt="Capture d’écran evcc iPad : sessions de charge avec part solaire et énergie par véhicule" >}}
{{< screenshot-entry src="9_large_session_detail" width="1305" alt="Capture d’écran evcc iPad : détails d’une session de charge" >}}
{{< screenshot-entry src="10_small_savings" width="489" alt="Capture d’écran evcc iPhone : vue d’ensemble de l’énergie chargée avec part solaire, prix de l’énergie et émissions de CO₂" >}}
{{< /screenshots >}}

Essayez notre instance de démonstration pour découvrir l’interface.

{{< button-cta url="https://demo.evcc.io/" target="_blank">}}
Essayer l’instance de démo
{{</ button-cta>}}

---

## Comment ça marche

Le système fonctionne en local et collecte en continu les données de votre maison : import du réseau et export vers le réseau, production solaire, consommation de la maison et niveau de charge de votre batterie domestique et de votre véhicule. Sur cette base, il **pilote votre chargeur** et recharge votre voiture précisément quand l’électricité est la moins chère ou la plus propre.

{{< themed-image light="/img/evcc-schema1-light.svg" dark="/img/evcc-schema1-dark.svg" width="627" height="465" alt="Schéma : evcc relie l’installation photovoltaïque, le réseau, la batterie domestique, la consommation et le véhicule, et pilote le chargeur" >}}

---

## Compatible avec tous les fabricants {#devices}

Les écosystèmes fermés, les services cloud et les solutions propriétaires, ce n’est pas notre truc.
evcc fonctionne sur **votre propre matériel** et fait collaborer intelligemment vos appareils, **quel que soit le fabricant.**
Vos données restent chez vous.

{{< infobox title="Systèmes pris en charge et testés" >}}

{{< infobox-entry title="Chargeurs" area="charger" >}}
{{< infobox-content group="Chargers">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Véhicules" area="vehicle" >}}
{{< infobox-content group="Vehicles">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Solaire et stockage" area="inverter" >}}
{{< infobox-content group="PVBattery">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Prises commutables" area="smartswitch" >}}
{{< infobox-content group="SmartSwitches">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Pompes à chaleur et résistances électriques" area="heating" >}}
{{< infobox-content group="Heating">}}
{{< /infobox-entry >}}

{{< infobox-entry title="Compteurs d’énergie" area="meter" >}}
{{< infobox-content group="Meters">}}
{{< /infobox-entry >}}

{{< /infobox >}}

Vous trouverez plus de détails dans notre [documentation](https://docs.evcc.io/fr/chargers). Si votre appareil n’est pas encore pris en charge, faites-le-nous savoir sur [GitHub](https://github.com/evcc-io/evcc). S’il dispose d’une interface, nous pouvons le connecter.

---

## Opérationnel en quelques minutes

{{< steps >}}
{{< step title="Installer" >}}Flashez l’image sur une carte SD et insérez-la dans votre Raspberry Pi.<br>Autre possibilité : Docker sur votre NAS ou votre serveur.{{< /step >}}
{{< step title="Configurer" >}}Tout se fait dans le navigateur : ajoutez vos appareils, ajustez les paramètres, c’est prêt.{{< /step >}}
{{< step title="Charger" >}}evcc optimise automatiquement. Suivez tout via l’interface web ou l’application.{{< /step >}}
{{< /steps >}}

{{< button-cta url="https://docs.evcc.io/fr/installation" target="_blank">}}
Commencer
{{</ button-cta>}}

---

## Soutenir le projet

Rejoignez la communauté, aidez à corriger des bugs, améliorez la documentation ou partagez simplement votre expérience. Retrouvez-nous sur le [forum](https://github.com/evcc-io/evcc/discussions) ou discutez avec nous sur [Slack](/slack).

Pour faire vivre un projet de cette taille, nous avons besoin de votre soutien. Découvrez notre [modèle de parrainage](https://docs.evcc.io/fr/sponsorship).

{{< button-cta url="mailto:info@evcc.io" type="secondary">}}
Contactez-nous
{{</ button-cta>}}

---

## Du côté de la communauté

{{< live-telemetry >}}

Sur notre [blog](https://docs.evcc.io/fr/blog/), nous présentons régulièrement des installations evcc de la communauté. Découvrez les [personnes](#community-person) et la [technique](#community-tech) derrière ces installations.

{{< community >}}
{{< community-entry img="joerg" name="Jörg, blogueur tech" link="https://docs.evcc.io/fr/blog/2026/10/29/joerg-meintechblog">}}
{{< community-entry img="orv" name="Club d’aviron d’Osnabrück" link="https://docs.evcc.io/fr/blog/2025/11/29/osnabruecker-ruderverein">}}
{{< community-entry img="tobias" name="Tobias de Trebur" link="https://docs.evcc.io/fr/blog/2025/10/04/tobias-aus-trebur">}}
{{< community-entry img="michael" name="Michael, de l’équipe principale" link="https://docs.evcc.io/fr/blog/2025/06/30/michael-vom-core-team">}}
{{< community-entry img="ulrike-gunther" name="Ulrike et Gunther d’Alzenau" link="https://docs.evcc.io/fr/blog/2025/04/26/ulrike-und-gunther-aus-alzenau">}}
{{< community-entry img="olaf" name="Olaf de Bergisch Gladbach" link="https://docs.evcc.io/fr/blog/2024/12/21/olaf-aus-bergisch-gladbach">}}
{{< community-entry img="andreas" name="Andreas de Wettringen" link="https://docs.evcc.io/fr/blog/2024/11/14/andreas-aus-wettringen">}}
{{< community-entry img="bastian" name="Bastian d’Ahlhorn" link="https://docs.evcc.io/fr/blog/2024/10/25/portrait-bastian-aus-alhorn">}}
{{< community-entry img="tjarko" name="Tjarko de Großefehn" link="https://docs.evcc.io/fr/blog/2024/09/21/portrait-tjarko-grossefehn">}}
{{< community-entry img="christian" name="Christian de Trebbin" link="https://docs.evcc.io/fr/blog/2024/08/25/portrait-christian-trebbin">}}
{{< community-entry img="arne" name="Arne de Gifhorn" link="https://docs.evcc.io/fr/blog/2024/08/09/portrait-arne-gifhorn">}}
{{< /community >}}

---

## Sponsors

{{< sponsors >}}

## Équipe principale

{{< team >}}
