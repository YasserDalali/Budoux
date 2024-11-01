import { loadDefaultJapaneseParser } from 'budoux';
console.log("Budoux is integrated successfully")


const parser = loadDefaultJapaneseParser();

const contentElement = document.querySelector('p');  //! Will select the paragraph element
const processedHTML = parser.translateHTMLString(contentElement.innerHTML); // Will translate the HTML content
contentElement.innerHTML = processedHTML; // Replaces the innerHTML of the paragraph with the translated content