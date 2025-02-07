# The Hogwarts Archive
Det här projektet använder olika URL:s från hp-api för att få karaktärer från de olika husen samt information om karaktärerna.
## Installation 
* För att ladda ner projektet, kör git clone + url i terminalen 
* Gå till projektets mapp och kör npm i 
* Kör sedan npm run dev 
## Funktioner
* Klicka på knapparna för att få fram information om det huset
* Klicka på karaktärernas namn för att få upp mer information om dem
## API
Detta projektet använder https://hp-api.onrender.com/ 
## URL Fetches 
karaktärer i ett hus https://hp-api.onrender.com/api/characters/house/
Karaktärer https://hp-api.onrender.com/api/characters/
## Använda teknologier 
TypeScript - För typad och strukturerad JavaScript-kod.

SCSS - För avancerad och modulär CSS.

Fetch API - För att hämta data från externa API:er med async/await.

HTML/CSS/JavaScript - Grundläggande webbteknologier.
## Projektstruktur
TheHogwartsArchive/
├─ scr/
│  ├─ api/
│  │  ├─ baseURL.ts
│  │  ├─ characterfetch.ts
│  │  ├─ characterinfofetch.ts
│  ├─ components/
│  │  ├─ cards/
│  │  │  ├─ card.scss
│  │  │  ├─ card.ts
│  │  ├─ buttons/
│  │  │  ├─ buttons.ts
│  │  │  ├─ buttons.scss
│  ├─ styles/
│  │   ├─ header.scss
│  │  ├─ mixins.scss
│  ├─ types/
│  │  ├─ types.ts
│  ├─ vite-env.d.ts
│  ├─ main.ts
│  ├─ style.scss
├─ resources/
.gitignore
index.HTML
package-lock.json
package.json
tsconfig.json
## Kontakt 
Skapare: Stephanie Baard
Linkedin: https://www.linkedin.com/in/stephanie-baard/
