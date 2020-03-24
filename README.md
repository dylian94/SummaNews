# Summa Nieuws
Deze applicatie laat het laatste Summa College nieuws zien.

# Voor eerste gebruik
1. Open powershell, blader naar de map waar het project uitgepakt is en voer het volgende commando uit:
```npm install```
2. Vraag een API-sleutel voor "Bing News Search" aan (uitgebreide instructie hieronder).
3. Open "Common/fetchNews.js" en zet de API sleutel op de juiste locatie.

##Bing New Search API sleutel aanvragen
_Deze instructie geld alleen voor Summa ICT studenten_
1. Ga naar de [API aanvraag pagina](https://portal.azure.com/#create/Microsoft.CognitiveServicesBingSearch-v7) van Microsoft.
2. Meld je aan met je school account.
3. Vul bij naam "SummaNewsApp" in.
4. Kies bij abbonement voor "Azure for Students".
5. Kies bij prijscategorie voor "F1 (3 Aanroepen per seconde, 1k Aanroepen per maand)", deze categorie is gratis (voor één project)
6. Klik bij resourcegroep op "Nieuw" en geef deze ook de naam "SummaNewsApp".
7. Kies bij resourcegroeplocatie voor "(Europe) West-Europa".
8. Geef aan dat je de kennisgeving gelezen en begrepen hebt (als dit ook daadwerkelijk zo is)/
9. Klik onderaan de pagina op "Maken".
10. Wacht tot de resource is aangemaakt (er staat dan "Uw implementatie is voltooid", dit duurt event)
11. Klik op "Naar de resource gaan".
12. Kopieër de API-sleutel bij "Key1" en gebruik deze in de app zoals hierboven beschreven.