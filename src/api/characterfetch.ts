import {HPBaseURL} from './baseurl';
import {Houses, Character } from '../types/Types';
 
// funktion för att hämta karaktärer baserat på husen
const HPCharactersURL = `${HPBaseURL}/characters`;

export const allCharactersInaHouse = async (category: Houses): Promise<Character[]> => {
const allCharactersInaHouseURL = `${HPCharactersURL}/house/${category}`;
const response =  await fetch(allCharactersInaHouseURL);
const data = await response.json();

return data as Character[];
} 