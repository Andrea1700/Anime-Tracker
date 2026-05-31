# Projektdokumentation - Anime Tracker

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
    1. [Understand & Define](#31-understand--define)
    2. [Sketch](#32-sketch)
    3. [Decide](#33-decide)
    4. [Prototype](#34-prototype)
    5. [Validate](#35-validate)
4. [Erweiterungen](#4-erweiterungen)
5. [Projektorganisation](#5-projektorganisation)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang](#7-anhang)


---

## 1. Ausgangslage

- **Problem:** Viele Anime-Fans verfolgen mehrere Serien gleichzeitig. Dabei geht häufig der Überblick verloren, welche Episode zuletzt geschaut wurde, welche Anime bereits abgeschlossen sind und welche noch auf der persönlichen Watchlist stehen. Oft werden Notizen in verschiedenen Apps oder sogar manuell geführt, wodurch Informationen verteilt und unübersichtlich werden.
- **Ziele:**
  - Anime an einem zentralen Ort verwalten
  - Fortschritt einfach aktualisieren können
  - Persönliche Notizen speichern
  - Favoriten markieren
  - Anime schnell finden und filtern
  - Eine benutzerfreundliche mobile Oberfläche bereitstellen
- **Primäre Zielgruppe:** Anime-Fans, die mehrere Anime gleichzeitig verfolgen und ihren Fortschritt übersichtlich organisieren möchten.

---

## 2. Lösungsidee

- **Kernfunktionalität:** Die Anwendung Anime Tracker ermöglicht es Benutzern, Anime zu verwalten und ihren Fortschritt zu verfolgen. Kernfunktionen umfassen: Anime hinzufügen/löschen/anzeigen, Fortschritt aktualisieren (inkl. manueller Eingabe), Statusverwaltung (Watching / Completed / Plan to Watch), Suchfunktion, Genre- und Status-Filter, Sortierung, Favoriten-System, persönliche Notizen sowie Cover-Bilder.
- **Annahmen:**
  - Nutzer möchten ihren Anime-Fortschritt zentral verwalten.
  - Filter- und Suchfunktionen verbessern die Übersichtlichkeit.
  - Cover-Bilder erleichtern die Orientierung.
  - Notizen bieten zusätzlichen Mehrwert.
- **Abgrenzung:** Nicht zum Umfang gehören: Anime-Streaming, Benutzerkonten, Synchronisation zwischen Geräten, Integration externer Anime-Datenbanken sowie soziale Funktionen.

---

## 3. Vorgehen & Artefakte

### 3.1 Understand & Define

- **Zielgruppenverständnis:** Die Zielgruppe sind Anime-Fans, die mehrere Anime gleichzeitig verfolgen. Während der Analyse wurde festgestellt, dass viele Nutzer Schwierigkeiten haben, ihren Fortschritt über verschiedene Serien hinweg zu organisieren. Zentrale Bedürfnisse sind ein Überblick über aktuelle Anime, einfaches Aktualisieren des Fortschritts, Organisations­möglichkeiten durch Filter sowie persönliche Favoriten und Notizen.
- **Wesentliche Erkenntnisse:**
  - Fortschritt muss schnell bearbeitbar sein.
  - Die Navigation sollte einfach und mobilfreundlich sein.
  - Such- und Filterfunktionen erhöhen die Benutzerfreundlichkeit.
  - Cover-Bilder helfen bei der visuellen Orientierung.
  - Favoriten ermöglichen schnellen Zugriff auf wichtige Anime.

### 3.2 Sketch

- **Variantenüberblick:** Es wurden verschiedene Ansätze skizziert: klassische Listenansicht, Karten-Layout, Continue-Watching-Bereich, Favoriten, Fortschrittsbalken, Schnell-Hinzufügen-Funktion, Empfehlungen sowie mood-basierte Vorschläge.
- **Skizzen:** Die verschiedenen Varianten wurden auf Papier erstellt und verglichen:
  - *Listenansicht:* sehr kompakt, aber wenig visuell ansprechend
  - *Kartenansicht:* übersichtlicher und moderner, gut für mobile Geräte geeignet
  - *Mood-Vorschläge:* zusätzliche Unterstützung bei der Anime-Auswahl

  Nach dem Vergleich wurde das Karten-Layout ausgewählt, da es die beste Übersichtlichkeit bietet.

### 3.3 Decide

- **Gewählte Variante & Begründung:** Gewählt wurde ein Karten-Layout mit Fokus auf Übersichtlichkeit und einfacher Bedienung. Entscheidungsgründe: gute Lesbarkeit auf Smartphones, einfache Navigation, klare Trennung der Inhalte, Erweiterbarkeit für zukünftige Funktionen.
- **End-to-End-Ablauf:**
  1. Benutzer öffnet die Anwendung.
  2. Benutzer sieht die persönliche Anime-Liste.
  3. Anime können hinzugefügt oder gelöscht werden.
  4. Fortschritt kann aktualisiert werden.
  5. Status kann angepasst werden.
  6. Favoriten können gespeichert werden.
  7. Notizen können hinterlegt werden.
  8. Anime können gesucht, gefiltert und sortiert werden.
- **Mockup:** [Figma-Prototyp](https://www.figma.com/design/8bTNXdkTIYdzKLqvecok6t/UI-Anime-Tracker?node-id=0-1&t=hfOFKWlSK8F9VE0L-1)

  Die Mockups zeigen die Startseite mit Anime-Liste, die Detailansicht eines Anime, das Hinzufügen-Formular, die Favoriten-Seite sowie Mood-Vorschläge.

### 3.4 Prototype

#### 3.4.1 Entwurf (Design)

> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.

- **Informationsarchitektur:**
  - *Startseite:* Übersicht aller Anime, Suchfunktion, Genre- und Status-Filter, Sortierung
  - *Anime hinzufügen:* Formular zur Erfassung neuer Anime
  - *Detailseite:* Informationen zum Anime, Fortschritt aktualisieren, Status und Notizen bearbeiten, Favoriten verwalten
  - *Favoriten:* Übersicht aller als Favorit markierten Anime

  Die Navigation wurde bewusst einfach gehalten, damit die Anwendung auf mobilen Geräten intuitiv bedient werden kann.

- **User Interface Design:**
  - *Startseite:* Suchfeld, Genre-Filter, Status-Filter, Sortierung, Anime-Karten mit Fortschrittsbalken und Cover-Bildern
  - *Anime hinzufügen:* Einfaches Formular mit Feldern für Titel, Genre, aktuelle/gesamte Episoden, Status und Cover-Bild
  - *Detailansicht:* Fortschritt aktualisieren, manueller Fortschritt, Status ändern, Favoriten setzen, Notizen speichern, Anime löschen

- **Designentscheidungen:**
  - *Karten-Layout:* Übersichtlich, mobilfreundlich
  - *Cover-Bilder:* Verbessern die Orientierung und die visuelle Attraktivität
  - *Status-System (Watching / Completed / Plan to Watch):* Vereinfacht die Organisation der Anime-Liste
  - *Fortschrittsbalken:* Visualisiert den aktuellen Stand auf einen Blick
  - *Mobile-First:* Oberfläche konsequent für mobile Geräte optimiert

#### 3.4.2 Umsetzung (Technik)

- **Technologie-Stack:** SvelteKit, JavaScript, HTML, CSS, MongoDB Atlas
- **Tooling:** Visual Studio Code, Git, GitHub, MongoDB Compass, MongoDB Atlas, Netlify, Figma
- **Struktur & Komponenten:**
  ```
  src/
  ├── lib/
  │   └── components/
  │       └── AnimeCard.svelte
  ├── routes/
  │   ├── +page.svelte
  │   ├── anime/
  │   │   ├── add/
  │   │   └── [id]/
  │   └── favorites/

  static/
  └── images/
  ```
  Die `AnimeCard.svelte`-Komponente wird für die Darstellung der Anime-Karten wiederverwendet.

- **Daten & Schnittstellen:** Die Daten werden in MongoDB Atlas gespeichert. Die Anwendung kommuniziert direkt über SvelteKit Server Actions. Beispiel-Dokument:
  ```json
  {
    "title": "Naruto",
    "genre": "Shonen",
    "currentEpisode": 500,
    "totalEpisodes": 500,
    "status": "Completed",
    "favorite": true,
    "notes": "Bester Anime",
    "imageUrl": "/images/naruto.jpg"
  }
  ```

- **Deployment:** [https://6a1c6530fb6dda0008b7bfe7--animetracker12.netlify.app/](https://6a1c6530fb6dda0008b7bfe7--animetracker12.netlify.app/)

- **Besondere Entscheidungen:**
  - *Lokale Cover-Bilder:* Anstatt externe Bildquellen zu verwenden, werden Cover-Bilder lokal gespeichert, um externe Abhängigkeiten zu vermeiden.
  - *Vereinfachte Statusverwaltung:* Bewusst auf drei Optionen beschränkt, um die Benutzeroberfläche einfach zu halten.
  - *MongoDB Atlas:* Gewählt wegen einfacher Einrichtung und guter Integration mit SvelteKit.

### 3.5 Validate

- **URL der getesteten Version:** [https://6a1c6530fb6dda0008b7bfe7--animetracker12.netlify.app/](https://6a1c6530fb6dda0008b7bfe7--animetracker12.netlify.app/)
- **Ziele der Prüfung:** Ist die Navigation verständlich? Können Benutzer Anime erfolgreich hinzufügen und den Fortschritt aktualisieren? Werden Such- und Filterfunktionen verstanden? Sind Favoriten und Notizen sinnvoll integriert?
- **Vorgehen:** Moderiert, on-site. Die Testpersonen erhielten konkrete Aufgaben und wurden während der Bearbeitung beobachtet.
- **Stichprobe:** 3 Mitstudenten mit Affinität zu Anime.
- **Aufgaben/Szenarien:**
  1. *Aufgabe 1:* Sie sind Anime-Fan und möchten einen neuen Anime zu Ihrer Liste hinzufügen. Fügen Sie den Anime „DAN DA DAN" hinzu und speichern Sie ihn.
  2. *Aufgabe 2:* Sie haben zuletzt Episode 10 eines Anime geschaut. Aktualisieren Sie den Fortschritt dieses Anime.
  3. *Aufgabe 3:* Sie möchten alle abgeschlossenen Anime anzeigen. Verwenden Sie die vorhandenen Filterfunktionen.
- **Kennzahlen & Beobachtungen:**
  - Alle Testpersonen konnten Anime erfolgreich hinzufügen.
  - Die Suchfunktion wurde sofort verstanden.
  - Die Favoritenfunktion wurde positiv bewertet.
  - Die Statusverwaltung wurde als hilfreich empfunden.
  - Identifizierte Probleme: fehlende Suchfunktion (zu Beginn), begrenzte Filtermöglichkeiten, Anime-Karten ohne Bilder wirkten wenig ansprechend.
- **Zusammenfassung der Resultate:** Die Anwendung wurde insgesamt positiv bewertet. Die Grundfunktionen konnten von allen Testpersonen erfolgreich genutzt werden. Besonders hervorgehoben wurden die einfache Bedienung und die übersichtliche Darstellung. Verbesserungspotenzial wurde vor allem bei Such- und Filterfunktionen sowie der visuellen Gestaltung identifiziert.
- **Abgeleitete Verbesserungen:** Als direkte Folge der Evaluation wurden folgende Erweiterungen priorisiert und umgesetzt: Suchfunktion, Genre-Filter, Status-Filter, Favoriten-System, Cover-Bilder, manueller Fortschritt, Statusverwaltung (siehe Kap. 4).

---

## 4. Erweiterungen

### 4.1 Suchfunktion

- **Beschreibung & Nutzen:** Ermöglicht es Benutzern, Anime anhand ihres Titels schnell zu finden. Verbessert die Übersichtlichkeit insbesondere bei grösseren Anime-Sammlungen.
- **Wo umgesetzt:**
  - **Frontend:** Suchfeld auf der Startseite, dynamische Filterung der Anime-Liste
  - **Backend:** Keine zusätzliche Datenbankabfrage notwendig; Filterung erfolgt auf den geladenen Daten
- **Referenz:** Kap. 3.4.1 User Interface Design
- **Aus Evaluation abgeleitet?:** Ja – mehrere Testpersonen wünschten sich eine schnellere Möglichkeit, Anime in der Liste zu finden.

### 4.2 Genre-Filter

- **Beschreibung & Nutzen:** Ermöglicht die Einschränkung der Anime-Liste auf bestimmte Genres und verbessert damit die Übersicht.
- **Wo umgesetzt:**
  - **Frontend:** Filterbuttons auf der Startseite
  - **Backend:** Genres werden aus den vorhandenen Anime-Daten ermittelt
- **Referenz:** Kap. 3.5 Validate
- **Aus Evaluation abgeleitet?:** Ja – Testpersonen wünschten sich zusätzliche Organisationsmöglichkeiten.

### 4.3 Status-Filter

- **Beschreibung & Nutzen:** Anime können nach ihrem Status (Watching / Completed / Plan to Watch) gefiltert werden. Verbessert die Organisation der Anime-Liste.
- **Wo umgesetzt:**
  - **Frontend:** Status-Filter auf der Startseite
  - **Backend:** Statuswerte werden aus den gespeicherten Daten gelesen
- **Referenz:** Kap. 3.4.1 User Interface Design
- **Aus Evaluation abgeleitet?:** Ja.

### 4.4 Favoriten-System

- **Beschreibung & Nutzen:** Anime können als Favorit markiert werden, um schnellen Zugriff auf die wichtigsten Einträge zu ermöglichen.
- **Wo umgesetzt:**
  - **Frontend:** Favoriten-Button sowie eigene Favoriten-Seite
  - **Backend:** Speicherung des Feldes `favorite`
  - **Datenbank:** Boolean-Wert für den Favoritenstatus
- **Referenz:** Kap. 3.4.2 Umsetzung
- **Aus Evaluation abgeleitet?:** Teilweise – die Funktion entstand aus frühen Skizzen und wurde nach der Evaluation weiterentwickelt.

### 4.5 Cover-Bilder

- **Beschreibung & Nutzen:** Anime können mit Cover-Bildern dargestellt werden. Erleichtert die Orientierung und verbessert das Erscheinungsbild der Anwendung.
- **Wo umgesetzt:**
  - **Frontend:** Anime-Karten und Detailansicht
  - **Backend:** Speicherung des Bildpfads
  - **Datenbank:** Feld `imageUrl`
- **Referenz:** Kap. 3.4.1 User Interface Design
- **Aus Evaluation abgeleitet?:** Ja – mehrere Testpersonen empfanden die Liste ohne Bilder als wenig ansprechend.

### 4.6 Manueller Fortschritt

- **Beschreibung & Nutzen:** Neben dem automatischen Fortschritt kann die aktuelle Episode direkt angepasst werden. Unterstützt beispielsweise Rewatching oder Korrekturen.
- **Wo umgesetzt:**
  - **Frontend:** Formular in der Detailansicht
  - **Backend:** Server Action zur Aktualisierung
  - **Datenbank:** Aktualisierung von `currentEpisode`
- **Referenz:** Kap. 3.4.2 Umsetzung
- **Aus Evaluation abgeleitet?:** Ja.

---

## 5. Projektorganisation

- **Repository & Struktur:** GitHub Repository zur Verwaltung des Projekts (siehe Projektstruktur in Kap. 3.4.2).
- **Issue-Management:** Die Entwicklung erfolgte iterativ. Neue Anforderungen wurden nach jeder Übung und Evaluation identifiziert und anschliessend umgesetzt.
- **Commit-Praxis:** Es wurden regelmässig sprechende Commits erstellt, um Entwicklungsstände nachvollziehbar zu dokumentieren (neue Features, Fehlerbehebungen, UI-Verbesserungen, Refactoring).

---

## 6. KI-Deklaration

### 6.1 KI-Tools

- **Eingesetzte Tools:** ChatGPT (OpenAI)
- **Zweck & Umfang:** ChatGPT wurde während des gesamten Projekts unterstützend eingesetzt – für Ideenfindung, Anforderungsanalyse, Unterstützung bei SvelteKit und MongoDB Atlas, Git und Deployment, Formulierung von Dokumentation, Feedback zu Designentscheidungen sowie Fehlersuche und Debugging. Teile der Dokumentation und des Codes entstanden mit KI-Unterstützung.
- **Eigene Leistung (Abgrenzung):** Die Projektidee, alle wesentlichen Entscheidungen und die finale Umsetzung wurden durch den Autor selbst getroffen. Die Vorschläge der KI wurden geprüft, angepasst und in die bestehende Lösung integriert.

### 6.2 Prompt-Vorgehen

Die KI wurde schrittweise und aufgabenspezifisch eingesetzt. Typische Anfragen betrafen die Erklärung technischer Konzepte, Unterstützung bei Fehlermeldungen, Verbesserung von Benutzeroberflächen sowie Dokumentationshilfe. Die Antworten wurden jeweils auf die konkreten Anforderungen des Projekts geprüft und angepasst – die KI lieferte Vorschläge, keine fertigen Lösungen.

### 6.3 Reflexion

Der Einsatz von KI ermöglichte eine schnellere Problemlösung und erleichterte den Einstieg in neue Technologien wie SvelteKit und MongoDB Atlas. Besonders wertvoll war die Unterstützung bei Deployment und Dokumentation. Gleichzeitig war eine kritische Prüfung aller Vorschläge notwendig, da nicht jede Lösung direkt übernommen werden konnte. Die Verantwortung für Designentscheidungen, Implementierung und Qualitätssicherung lag jederzeit beim Projektverfasser.

---

## 7. Anhang

- **Figma Mockup:** [https://www.figma.com/design/8bTNXdkTIYdzKLqvecok6t/UI-Anime-Tracker?node-id=0-1&t=hfOFKWlSK8F9VE0L-1]
- **Deployment:** [https://6a1c6530fb6dda0008b7bfe7--animetracker12.netlify.app/]

- **Geplante zukünftige Erweiterungen:** Mood-basierte Anime-Empfehlungen, Empfehlungssystem, Benutzerkonten, Statistiken und Auswertungen, externe Anime-Datenbank-API, Synchronisation zwischen Geräten.
