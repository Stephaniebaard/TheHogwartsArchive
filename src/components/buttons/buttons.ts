import {allCharactersInaHouse} from '../../api/characterfetch';
import {Houses} from '../../types/Types';
import {showCharacterDetails} from '../../api/characterinfofetch';


// Funktion som skapar knapparna 
export const houseButtons: {id: string; house: Houses}[] = [
    { id: "show-gryffindor", house:  "gryffindor" },
    { id: "show-hufflepuff", house: "hufflepuff" },
    { id: "show-ravenclaw", house: "ravenclaw" },
    { id: "show-slytherin", house: "slytherin" },
];

const allCharactersInaHouseArticle = document.getElementById("characters-in-house") as HTMLElement;

export const DOMCharactersInaHouse = async (house: Houses) => {
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
