# Frontend-Setup & Architektur

## Kurze Beschreibung und Begründung der eingesetzten Bibliothekten

- React Router: Wurde installiert das man anhand des Clientside Routing die Seiten wechseln kann. (createBrowserRouter, RouterProvider usw..)
- jotai: Wurde installiert um mit der session.js die Sessions (nach einer anmeldung) zu verwalten.

## Wie hast du dein Projekt initialisiert und konfiguriert?

1. Zuerst habe ich mit "npm create vite@latest the-great-cake-off -- --template react" ein neues Projekt erstellt und anschliessend ESLint ausgewählt.

2. Danach habe ich den Prettier Code Formatter heruntergeladen und eine .prettierrc Datei erstellt und anhand von Moodle konfiguriert.

3. Als nächstes habe ich den Inhalt der vite.config.js mit dem was auf Moodle ist ersetzt.

4. Damit der die absoluten Pfade automatisch ersetzt werden musste ich noch eine jsconfig.json Datei anlegen. Dort habe ich den Inhalt von Moodle hineingeschreiben.

5. Danach React Router Bibliothek installiert mit npm install react-router.

6. Als letztes habe ich mit git init und git add . die Versionierung gestartet.

## Beschreibe deine Frontend-Architektur (Hauptkomponenten, Ordnerstruktur)

### Ordnerstruktur

- assets:
    - Ist für Bilder und favicons gedacht wird aber in diesem Projekt nicht genutzt.
    - Es sind die Default Icons von der Erstellung drin.
- Components
    - Dort drin sind alle Components
- lib
    - In lib sind alle Skripte die z.B fürs abfragen der Kuchen und / oder für das Anmelden genutzt werden.
    - Zusäzlich sind dort drin noch die validierung Skripte für die Formulare.
- routes
    - In diesem Ordner sind alle Routen, sprich die Elemente die bei der Main Component unter den Routen eingebunden wurden.

### Hauptkomponenten

- Main: Die Root komponente die auch den Router beinhaltet.
- App: Die App komponente ist eine Ebene tiefer als Main und beinhaltet den Header und Outlet (für Navigation)
- AuthForm: Anmeldeformular fürs Einloggen
- Card: Eine einzelne Karte / Eintrag
- Button: Ein Knopf der children props mitgeben kann.
- ButtonGroup: Wird genutzt um Buttons zu Gruppieren falls man mehrere hat.

# Umgang mit künstilicher Intelligenz

## Ab wann ist die nutzung von Ki deklarationsplichtig? (Stufe Geld)

- Die Nutzung der künstlichen Intelligenz ist ab dem Zeitpunkt deklarationsplichtig wenn man Tools ausserhalb der Entwicklungsumgebung nutzt oder zu einer Lösung führt.

## Deklaration KI Nutzung (Alles über Stufe Gelb)

Ich habe für Folgende Aufgaben künstiche Intelligenz genutzt:

- Aufgabe 6 Kuchen Erstellen
    - Hier habe ich KI verwendet zum Fehler Analyseren
    - Wurde zusäzlich genutzt um eine leere Funktion zu erstellen
    - Prompt: Kannst du mir folgende Fehlermeldung erklären: "Fehlermeldung"
    - Eigene Anpassungen wurden anhand der Erklärung vorgenommen.
- Aufgabe 7 Kuchen bearbeiten
    - Hier habe ich KI verwendet zum Fehler Analyseren
    - Prompt: Was bedeutet dieser Fehler "Fehler" und wie könnte der entstehen?
    - Eigene Anpassungen wurden anhand der Erklärung vorgenommen.
- Aufgabe 11 Kommentar zu einem Kuchen erstellen
    - Hier habe ich KI verwendet zum Fehler Analyseren
    - Prompt: Was bedeutet dieser Fehler "Fehler" und wie könnte der entstehen?
    - Prompt: Erkläre den Fehler mit einem Beispiel: "fehler"
    - Eigene Anpassungen wurden anhand des Beispiels vorgenommen.

Genutztes Modell:

- Ausschliesslich ChatGPT

### Reflektion KI Nutzung:

- Vorteile der KI Nutzung
    - Fehler die man nicht verstanden hat, konnte man anhand eines Beispiels verstehen.
    - Man konnte tiefgründiger in den Fehler eintauchen.
- Nachteile / Herausforderungen
    - Manchmal hat mich die künstliche Intelligenz falsch verstanden und das hat zum Teil zeitgekostet die künstliche Intelligenz wieder auf die richtige Bahn zubringen.
- Wie habeich die Qualität und Korrektheit des KI-generierten Codes sichergestellt und ihn angepasst?
    - Ich habe das Beispiel von der Ki mit meinem Code und Code aus dem Internet verglichen.
    - Ich musste den Code immer anpassen da ich immer nach einem Beispiel gefragt habe.

# Fazit

Für mich personlich war das mit den API Abfragen das schwierigste (sieht man auch an der Ki Nutzung). Ich bin dann so vorgegangen das ich den Code von der Fallstudie angeschaut habe und überlegt habe welche Dinge ich Übernehmen kann und welche dinge ich Anpassen muss. Nächstes Mal würde ich das mit den API abfragen noch etwas besser anschauen (War aber auch schwierig da ich die Prüfung ca. 30 Tage nach dem eigentlichen Kurs geschrieben habe).

# Selbsteinschätzung

Ich konnte alles Umsetzen. Bei meinen Tests konnte ich keine Fehler mehr Finden. Ich habe das Gefühl das es sicher für eine Genügende Note reichen wird.

# Fehler die ich nicht mehr beheben konnte

- Beim anmelden mit einer falschen Email oder falschem Passwort.
    - Fehler: "XHR POST http://localhost:8080/auth/signin [HTTP/1.1 401 73ms]"
