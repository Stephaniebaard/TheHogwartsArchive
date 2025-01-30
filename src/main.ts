import './style.scss'
import './buttons.scss'
import './header.scss'
import {Houses, Character } from './Types';

const HPBaseURL = `https://hp-api.onrender.com/api`;
const HPCharactersURL = `${HPBaseURL}/characters`;

// funktion för att hämta karaktärer baserat på
const allCharactersInaHouse = async (category: Houses): Promise<Character[]> => {
const allCharactersInaHouseURL = `${HPCharactersURL}/house/${category}`;
const response =  await fetch(allCharactersInaHouseURL);
const data = await response.json();

return data as Character[];
} 



// Flytta senare
// Funktion som skapar knapparna 
const houseButtons: {id: string; house: Houses}[] = [
    { id: "show-gryffindor", house:  "gryffindor" },
    { id: "show-hufflepuff", house: "hufflepuff" },
    { id: "show-ravenclaw", house: "ravenclaw" },
    { id: "show-slytherin", house: "slytherin" },
];

const allCharactersInaHouseArticle = document.getElementById("characters-in-house") as HTMLElement;

const DOMCharactersInaHouse = async (house: Houses) => {
    const characters = await allCharactersInaHouse(house);

    allCharactersInaHouseArticle.innerHTML = '';

    const h2 = document.createElement("h2") as HTMLElement;
    h2.innerHTML = `${house}`;
    allCharactersInaHouseArticle.appendChild(h2);

    for (let i = 0; i < characters.length; i++)
    {
        const article = document.createElement("article") as HTMLElement;
        article.id = `House-${characters[i].id}`;

        const nameElement = document.createElement("span");
        nameElement.innerHTML = `${characters[i].name}`;
        nameElement.style.cursor = "pointer";
        nameElement.addEventListener("click",() => { showCharacterDetails(characters[i]); });

        article.appendChild(nameElement);
        allCharactersInaHouseArticle.appendChild(article);  
    }
};

houseButtons.forEach(button => {
    const buttonElement = document.getElementById(button.id) as HTMLButtonElement;
    buttonElement.addEventListener("click",()=>{
        DOMCharactersInaHouse(button.house);
    });
});

// Funktion som ändrar dikt beroende på vilket hus man klickar på
const buttons = document.querySelectorAll('button');
const housePoem = document.getElementById('house-poem') as HTMLParagraphElement;
const poems = [
    "You might belong in Gryffindor, where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart.",
    "You might belong in Hufflepuff where they are just and loyal, those patient Hufflepuffs are true, and unafraid of toil.",
    "Or yet in wise old Ravenclaw, if you've a ready mind, where those of wit and learning, will always find their kind.",
    "Or perhaps in Slytherin, you'll make your real friends, those cunning folk use any means, to achieve their ends."
];

function changePoem(index: number){
    housePoem.textContent = poems[index];
}

buttons.forEach((button, index)=>{
    button.addEventListener('click', ()=> changePoem(index));
});

// Funktion för att visa karaktärens information
const showCharacterDetails = (character: Character) => {
    const card = document.getElementById("character-card") as HTMLElement;
    const characterName = document.getElementById("character-name") as HTMLElement;
    const characterInfo = document.getElementById("character-info") as HTMLElement;

    characterName.innerHTML = character.name;
    characterInfo.innerHTML = `
        Gender: ${character.gender}<br>
        House: ${character.house}<br>
        Actor: ${character.actor}<br>
        Birth Year: ${character.yearOfBirth}<br>
        Species: ${character.species}<br>
        Patronus: ${character.patronus || ""}<br>
        Wand: ${character.wand ? `Wood: ${character.wand.wood}, Core: ${character.wand.core}, Length: ${character.wand.length} cm` : "N/A"}<br>
    `
    

    card.style.display = "block";
};

const closeCard = document.getElementById("close-card") as HTMLAnchorElement;
closeCard.addEventListener("click", () => {
    const card = document.getElementById("character-card") as HTMLElement;
    card.style.display = "none";
});