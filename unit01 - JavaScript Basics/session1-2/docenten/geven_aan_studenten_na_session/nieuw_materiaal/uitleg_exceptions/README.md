# Uitleg over exceptions. 

De uitleg in dit stuk is gebaseerd op hoofdstuk 8 van Eloquent JavaScript.

Laat dit hoofdstuk en met name de code zien tijdens de uitleg.

Dit hoofdstuk is ook onderdeel van de toetsstof van unit 1.

Hieronder kort de hoofdpunten:

1. **Error propagation**
Begin met uitleggen hoe we een functie zouden kunnen laten weten dat er een fout is opgetreden (als we geen excepties hadden)
1. **Exceptions** 
    1. Leg uit hoe excepties werken aan de hand van het voorbeeld. Begin bij de aanroep van look op regel 17 en ga vanuit daar stap voor stap door de code. Het belangrijkste punt om te melden is dat de methode `look` zelf, anders dan `duplicateLastElement` (uit het stuk erboven), geen error-afhandeling hoeft te hebben (zoals in de laatste paragraaf staat).
    1. Haal het try catch block weg en laat zien dat je dan een crash krijgt te zien met een zgn stack trace.
    1. Laat het geheugenmodel zien met een try catch erin.
    1. Behandel de notes over Error-klasse en dat je alles kunt gooien.
    1. Leg uit waarom het niet handig is om een try catch block om het hele programma te zetten.
1. **Cleaning up after exceptions**
    1. Plak de code in een note onder het code block met de `getAccount` en `transfer` functions om de werking te illustreren
    1. Check ook nog of de studenten de blokhaken-syntax begrijpen om properties uit een object te selecteren
