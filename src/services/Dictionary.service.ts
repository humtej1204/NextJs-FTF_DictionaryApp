import { environment } from "@/shared/config/environments";

const apiUrl: string = environment.DICTIONARY_API_URL;

export async function getWordDefinition(word: string) {
    return await fetch(`${apiUrl}/${word}`)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not OK');
        return response.json();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    });
}
