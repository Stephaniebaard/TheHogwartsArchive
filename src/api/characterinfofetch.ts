import {Character } from '../types/Types';
 

// Funktion för att visa karaktärens information
export const showCharacterDetails = (character: Character) => {
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