# ICA Adventure

In deze opdracht maken studenten een (erg simpele en in eerste instantie single player) text adventure. De opdracht komt in de eerste paar weken geregeld terug.

Dit project bestaat uit twee files: 

1. **game.js** houdt de state van de game bij en bevat alle game logica. Studenten krijgen alleen de datastructuur en een begin van de implementatie van `goToLocation` en moeten de rest zelf uitwerken
1. **main.js** bevat de user interface en roept functies uit game.js aan. Deze is compleet uitgewerkt en kan gebruikt worden om de functies uit game.js te testen.

## Opmerkingen

Bij het opzetten van de code heb ik gebalanceerd tussen nuttig leerwerk voor studenten, netheid van de code, begrijpelijkheid voor de doelgroep en hoevelheid werk en aanpasbaarheid voor de komende weken. Daardoor zijn niet alle beslissingen misschien even duidelijk. Hieronder een paar overwegingen:

#### Game.js

* **Alle `get`-ers moeten copies van de data teruggeven.**  
Dit heb ik gedaan omdat je anders toch de data kunt manipuleren die je terugkrijgt, terwijl je daarvoor alleen de functies zou moeten gebruiken. Daarnaast is dit voor studenten een mooie manier om kennis te maken met destructuring om te kopieeeren.  
_Dit is natuurlijk een leuk onderwerp voor in de les_
* **De huidige locatie van de speler is een naam_ en geen referentie.**
Alternatief is om de referentie naar de locatie te kopieren, maar dan gaat de implementatie van `goToLocation` te veel lijken op `takeItem`. 
* **Return values van goToLocatio en takeItem.**  
Deze functies veranderen iets aan de game state en dan zit je met de vraag of ze iets moeten returnen.
Zeker als er parameters worden meegegeven die niet leiden tot een verandering omdat ze niet aan de spelregels voldoen. Het gooien van een exceptie is dan wat overdreven en niet overzichtelijk.  
Ik denk dat het het mooiste is om een result-achtig object terug te geven (en dat zie je ook vaker), maar dat maakt de opgave gelijk weer groter en complexer. Daarom geef ik nu een string terug die aardig weergeeft wat de situatie is nadat de functie zijn werk heeft gedaan.  
_Ook dit kan een mooi onderwerp zijn voor in de les. Zeker de overweging om geen exceptie te gooien, is leuk om te behandelen, maar dan moet je denk ik wel een klas hebben die al meer ervaring heeft met excepties_

### Main.js

* **Elk case statement uit de `execute`-functie returnt de response (ipv een return aan het eind)**  
Dit is vooral gedaan omdat er later asynchrone code wordt toegevoegd, waardoor sommige case statements een asynchrone callback krijgen en sommige niet. Door nu overal te returnen wordt het maken van deze aanpassing een stuk overzichtelijker, dan als de functie een return op het eind zo hebben staan.
* **Exception handling**  
Je zou je kunnne afvragen of je wel een Error zou moeten gooien als de gebruiker een fout maakt tijdens het typen van een commando, of vergeet een argument mee te geven. Beter zou het zij om haar te helpen met het oplossen van de fout. Dat maakt de code echter wel een stuk ingewikkelder.
Daarnaast hebben we het in de les over Exceptions gehad en het is toch ook leuk dat je in de komende week kunt zien hoe de `try-catch` die om `execute` staat verandert als je asynchrone callbacks gebruikt, of Promises.  
Het liefst had ik wel een subclass van error gemaakt ipv een code-property mee te geven, maar classes behandelen we pas later. Daarom volg ik nu maar de `Node`-conventie.