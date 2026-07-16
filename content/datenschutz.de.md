# Datenschutz­erklärung

## 1. Datenschutz auf einen Blick

### Allgemeine Hinweise

Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.

### Datenerfassung auf dieser Website

#### Wer ist verantwortlich für die Datenerfassung auf dieser Website?

Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.

#### Wie erfassen wir Ihre Daten?

Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie uns per E-Mail zusenden.

Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.

#### Wofür nutzen wir Ihre Daten?

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.

#### Welche Rechte haben Sie bezüglich Ihrer Daten?

Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.

Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.

## 2. Hosting

### GitHub Pages

Diese Website wird auf Servern von [GitHub Inc.](https://www.github.com/), 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA gehostet.

Beim Besuch dieser Website erfasst GitHub automatisch technische Informationen in Server-Logdateien, die Ihr Browser automatisch übermittelt. Dies umfasst:

- IP-Adresse
- Browsertyp und Browserversion
- Verwendetes Betriebssystem
- Referrer URL (zuvor besuchte Seite)
- Datum und Uhrzeit des Zugriffs

Diese Daten werden von GitHub zu Sicherheits- und Stabilitätszwecken erfasst und dienen der technischen Bereitstellung der Website. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und Sicherheit der Website).

Da GitHub in den USA ansässig ist, erfolgt eine Übermittlung personenbezogener Daten in ein Drittland. GitHub hat sich den EU-Standardvertragsklauseln verpflichtet. Weitere Informationen finden Sie in der [GitHub Privacy Policy](https://docs.github.com/en/github/site-policy/github-privacy-statement) und den [GitHub Data Protection Addendum](https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement).

Die erfassten Daten werden von GitHub entsprechend ihrer Datenschutzrichtlinien gespeichert und verarbeitet. Wir haben keinen direkten Zugriff auf diese Server-Logdateien.

### Community-Telemetrie-Anzeige

Auf der Startseite wird ein Live-Widget angezeigt, das aggregierte Statistiken der evcc-Community darstellt (z. B. Gesamtladeleistung, Anzahl aktiver Nutzer, Sonnenanteil). Diese Daten werden von unserem eigenen Dienst api.evcc.io bereitgestellt.

Beim Laden dieser Anzeige werden keine personenbezogenen Daten von Ihnen als Website-Besucher erfasst oder übermittelt. Das Widget zeigt ausschließlich anonymisierte, aggregierte Daten von teilnehmenden evcc-Nutzern an, die sich freiwillig für das Telemetrie-Programm entschieden haben. Weitere Informationen zur Telemetrie-Teilnahme für evcc-Nutzer finden Sie in unserer [Dokumentation](https://docs.evcc.io/docs/reference/configuration/telemetry).

### Optimizer-Service (optimizer.evcc.io)

evcc bietet eine optionale Optimizer-Funktion, die kostenoptimale Entscheidungen für dein Energiesystem trifft. Wenn du den Optimizer in der Benutzeroberfläche aktivierst, werden folgende Daten an unseren Dienst `optimizer.evcc.io` übermittelt:

- Prognosedaten: PV-Ertrag, Strompreise, Einspeisetarife
- Historische Daten: typisches Verbrauchsprofil deines Haushalts
- Aktueller Zustand: Ladestand der Batterie, angeschlossene Fahrzeuge, Wärmebedarf

Der Dienst wird auf Microsoft Azure in einem deutschen Rechenzentrum betrieben. Es erfolgt keine Übermittlung in Drittländer. Der Dienst arbeitet **zustandslos** – es werden keine Daten dauerhaft auf dem Server gespeichert. Die übermittelten Daten werden ausschließlich zur Berechnung des Optimierungsergebnisses verwendet und danach verworfen.

Der Optimizer wird nur aktiv, wenn du ihn explizit in der Benutzeroberfläche aktivierst. Die Nutzung setzt ein aktives [Sponsoring](https://docs.evcc.io/docs/sponsorship) voraus. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Aktivierung der Funktion).

Alternativ kannst du den Optimizer lokal betreiben und damit die Datenübermittlung vollständig vermeiden. Weitere Informationen dazu findest du in unserer [Dokumentation](https://docs.evcc.io/docs/features/optimizer#technical).

### Remote-Access-Dienst (*.evcc.cloud)

evcc bietet eine optionale Remote-Access-Funktion, die deine lokale evcc-Instanz über eine persönliche Domain auf `evcc.cloud` erreichbar macht. Wenn du Remote Access in der Benutzeroberfläche aktivierst, baut deine lokale Instanz eine dauerhafte verschlüsselte Verbindung zu unserem Dienst `*.evcc.cloud` auf.

Bei der Registrierung werden folgende Daten verarbeitet und gespeichert:

- Die zufällig vergebene Domain
- Ein Hash des Verbindungstokens
- Die Zuordnung zu deinem Sponsor-Token
- Zeitstempel der Registrierung und der letzten Verbindung

Während des Betriebs leitet der Dienst HTTP-Anfragen von autorisierten Clients durch den Tunnel an deine lokale evcc-Instanz weiter. Der Dienst reicht den Datenverkehr nur durch und speichert keine Anfrageinhalte. Die Authentifizierung der Zugriffe (Passwörter) erfolgt ausschließlich auf deiner lokalen evcc-Instanz; auf dem Dienst werden keine Zugangsdaten gespeichert.

Der Dienst wird auf Microsoft Azure in einem deutschen Rechenzentrum betrieben. Es erfolgt keine Übermittlung in Drittländer.

Remote Access wird nur aktiv, wenn du es explizit in der Benutzeroberfläche aktivierst. Die Nutzung setzt ein aktives [Sponsoring](https://docs.evcc.io/docs/sponsorship) voraus. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Aktivierung der Funktion).

Wenn du Remote Access deaktivierst, bleibt die Zuordnung zwischen Sponsor-Token und Domain bestehen, damit du dieselbe Domain bei einer erneuten Aktivierung wiederverwenden kannst. Du kannst die Löschung der Registrierungsdaten jederzeit per E-Mail an info@evcc.io anfordern.

Weitere Informationen findest du in unserer [Dokumentation](https://docs.evcc.io/docs/features/remote-access).

### Sponsor-Token-Prüfung (sponsor.evcc.io)

Wenn du ein Sponsor-Token konfiguriert hast, prüft deine lokale evcc-Instanz dieses beim Start gegen unseren Dienst `sponsor.evcc.io`. Dabei werden folgende Daten übermittelt:

- Das Sponsor-Token
- Eine anonymisierte Gerätekennung (ein Einweg-Hash der Gerätekennung; sie ist unabhängig von der Telemetrie-Kennung und kann nicht mit dieser verknüpft werden)

Um Missbrauch und Weitergabe von Sponsor-Tokens zu erkennen, erfassen wir, auf welchen Geräten ein Token verwendet wird. Dabei werden folgende Daten gespeichert:

- Zeitstempel
- Die dem Token zugeordnete E-Mail-Adresse oder der GitHub-Benutzername
- Art des Sponsorings
- Ein Hash des Tokens
- Die anonymisierte Gerätekennung

Die Gerätekennung wird ausschließlich für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt.

Der Dienst wird auf Servern der [Fly.io Inc.](https://fly.io/), USA, betrieben; die Daten werden in einem Rechenzentrum innerhalb der EU gespeichert. Fly.io hat sich zu EU-Standardvertragsklauseln verpflichtet. Weitere Informationen findest du in der [Datenschutzerklärung von Fly.io](https://fly.io/legal/privacy-policy/).

Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Verhinderung von Missbrauch des Sponsoring-Dienstes). Die Daten werden gespeichert, solange sie für die Missbrauchserkennung erforderlich sind, und anschließend gelöscht. Du kannst die Löschung jederzeit per E-Mail an info@evcc.io anfordern.

## 3. Zahlungsabwicklung für evcc-Sponsoring (creem.io)

Wenn du ein evcc-Sponsoring erwirbst, erfolgt die Zahlungsabwicklung über unseren Zahlungsdienstleister creem.io, ein Dienst der Armitage Labs OÜ, Telliskivi Street 57b/1, Tallinn 10412, Estland.

### Datenverarbeitung durch creem.io

Bei deinem Sponsoring-Kauf werden folgende Daten an creem.io übermittelt und von diesem verarbeitet:
- Name und E-Mail-Adresse
- Zahlungsinformationen (abhängig von der gewählten Zahlungsmethode)
- Rechnungsadresse
- IP-Adresse
- Kaufdatum und -zeitpunkt
- Art des erworbenen Sponsorings (monatlich, jährlich, lebenslang)

creem.io agiert als unser Merchant of Record und ist verantwortlich für:
- Die sichere Abwicklung der Zahlung
- Die Erhebung und Abführung der Mehrwertsteuer
- Die Erstellung und Bereitstellung von Rechnungen
- Die Verwaltung von wiederkehrenden Zahlungen (bei Abonnements)

### Rechtsgrundlage

Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung des Kaufvertrags für dein evcc-Sponsoring.

### Datenweitergabe an uns

creem.io übermittelt an uns als Anbieter des evcc-Sponsorings folgende Daten:
- Name und E-Mail-Adresse
- Art des erworbenen Sponsorings
- Kaufdatum
- Sponsor-Token

Diese Daten benötigen wir zur:
- Aktivierung und Validierung deines Sponsor-Tokens
- Kommunikation bezüglich deines Sponsorings
- Erfüllung steuerrechtlicher Aufbewahrungspflichten

### Speicherdauer

Wir speichern die Sponsoring-bezogenen Daten:
- Bei laufenden Abonnements: für die Dauer des Abonnements plus gesetzliche Aufbewahrungsfristen
- Bei Lifetime-Sponsorships: dauerhaft zur Validierung deiner Sponsoring-Berechtigung
- Steuerrelevante Daten: 10 Jahre gemäß handels- und steuerrechtlichen Vorschriften

### Widerruf und Kündigung

Du kannst wiederkehrende Sponsorships jederzeit über das creem.io-Portal unter https://www.creem.io/portal/ kündigen. Die Kündigung wird zum Ende der aktuellen Abrechnungsperiode wirksam.

Weitere Informationen zum Datenschutz bei creem.io findest du in der [creem.io Datenschutzerklärung](https://www.creem.io/privacy).

## 4. Allgemeine Hinweise und Pflicht­informationen

### Datenschutz

Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

### Hinweis zur verantwortlichen Stelle

Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

Michael Geers\
Neuenkirchener Str. 23a\
49593 Bersenbrück

E-Mail: info@evcc.io

Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.

### Speicherdauer

Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keinen anderen rechtlich zulässigen  Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.

### Widerruf Ihrer Einwilligung zur Datenverarbeitung

Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.

### Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)

WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).

WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).

### Beschwerde­recht bei der zuständigen Aufsichts­behörde

Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.

### Recht auf Daten­übertrag­barkeit

Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.

### SSL- bzw. TLS-Verschlüsselung

Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.

### Auskunft, Löschung und Berichtigung

Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.

### Recht auf Einschränkung der Verarbeitung

Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:

Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.

Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.

Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.

Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.

Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.

Quelle: [https://www.e-recht24.de/muster-datenschutzerklaerung.html](https://www.e-recht24.de/muster-datenschutzerklaerung.html)
