import { houseButtons } from "../buttons/buttons";

// Funktion för att ändra backgrund på korten baserat på vilket hus man klickar på
const cardColor = document.getElementById("characters-in-house") as HTMLElement;
export const changeBackground = (house: string) => {
    let color:string = '';

    switch(house) {
        case 'gryffindor':
            color = 'linear-gradient(to bottom right, rgb(92, 33, 33), rgb(183, 62, 62))';
            break;
        case 'hufflepuff':
            color = 'linear-gradient(to bottom right, rgb(62, 48, 31), rgb(147, 102, 35))';
            break;
        case 'ravenclaw':
            color = 'linear-gradient(to bottom right, rgb(18, 46, 86), rgb(42, 78, 130))';
            break;
        case 'slytherin':
            color = 'linear-gradient(to bottom right, rgb(14, 33, 37), rgb(12, 71, 63))';
            break;
    }
    cardColor.style.backgroundImage = color; 
    
};
houseButtons.forEach(button => {
    const buttonElement = document.getElementById(button.id) as HTMLButtonElement;
    buttonElement.addEventListener("click",()=> changeBackground(button.house));
});

// Funktion som byter bild baserat på hus
document.addEventListener("DOMContentLoaded", () => {
const houseImage = document.getElementById('house-image') as HTMLImageElement;

 const changeImage = (house: string) => {
    let imageUrl: string = '';

    switch (house) {
        case 'gryffindor':
            imageUrl = '../resources/Gryffindor.png'; 
            break;
        case 'hufflepuff':
            imageUrl = '../resources/Hufflepuff.png';
            break;
        case 'ravenclaw':
            imageUrl = '../resources/Ravenclaw.png';
            break;
        case 'slytherin':
            imageUrl = '../resources/Slytherin.png'; 
            break;
    }     

    
    houseImage.src = imageUrl; 
    console.log (imageUrl);
    houseImage.onerror = (event) => {
        console.log('Fel vid laddning av bild:', imageUrl);
        console.error('Event:', event);
        houseImage.src = '../resources/Hogwartsicon.png'; // fallback-bild
    };
    
};
houseButtons.forEach(button => {
    const buttonElement = document.getElementById(button.id) as HTMLButtonElement;
    buttonElement.addEventListener('click', () => changeImage(button.house));
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

export function changePoem(index: number){
    housePoem.textContent = poems[index];
}

buttons.forEach((button, index)=>{
    button.addEventListener('click', ()=> changePoem(index));
});


// gör så att profil ikonen inte alltid är synlig

const characterName = document.getElementById("character-name") as HTMLElement;
const profileIcon = document.getElementById("profile-icon") as HTMLElement;

characterName.addEventListener('click',() => {
    if (profileIcon.style.display === 'none')
       {profileIcon.style.display = 'block';}
    else 
    {profileIcon.style.display = 'none';}
});