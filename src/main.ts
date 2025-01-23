import './style.scss'
import { CharacterCategories, Houses, Character } from './Types';


const HPBaseURL = `https://hp-api.onrender.com/api`;
const HPCharactersURL = `${HPBaseURL}/characters`;

const AllCharactersInaHouse = async (category: Houses): Promise<Character[]> => {
const AllCharactersInaHouseURL = `${HPCharactersURL}/house/${category}`;
const response =  await fetch(AllCharactersInaHouseURL);
const data = await response.json();

return data as Character[];
}

console.log(await AllCharactersInaHouse(`gryffindor`));

// Flytta senare
const main = document.querySelector("main");
const AllCharactersInaHouseDiv = document.getElementById("characters-in-house") as HTMLDivElement;

const DOMCharactersInaHouse = async (house: Houses) => {
    const characters = await AllCharactersInaHouse(house);

    const h2 = document.createElement("h2") as HTMLElement;
    h2.innerHTML = `Characters in ${house}:`;
    AllCharactersInaHouseDiv.appendChild(h2);

    for (let i = 0; i < characters.length; i++)
    {
        const article = document.createElement("article") as HTMLElement;
        article.id = `House-${characters[i].id}`;
        article.innerHTML = `Character ${i + 1}: ${characters[i].name}`;
        AllCharactersInaHouseDiv.appendChild(article);

        const CharacterArticle = document.getElementById(`House-${characters[i].id}`) as HTMLElement;
        CharacterArticle.appendChild;
    }
};

DOMCharactersInaHouse(`gryffindor`);