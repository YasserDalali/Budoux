import { loadDefaultJapaneseParser } from './budouxJs/bin/budoux';

const parser = loadDefaultJapaneseParser();
console.log(parser.parse('今日は天気です。'));



console.log("Budoux is integrated successfully");


alert("TEST")

const contentElement = document.querySelector('p');  //! Will select the paragraph element
const processedHTML = parser.translateHTMLString(contentElement.innerHTML); // Will translate the HTML content
contentElement.innerHTML = processedHTML; // Replaces the innerHTML of the paragraph with the translated content