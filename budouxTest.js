import { loadDefaultJapaneseParser } from './node_modules/budoux/src/index.ts';
import { HTMLProcessor } from './node_modules/budoux/src/html_processor.ts';

const parser = loadDefaultJapaneseParser();
console.log(parser.parse('今日は天気です。'));
// ['今日は', '天気です。']

const ele = document.querySelector('p');
const htmlProcessor = new HTMLProcessor(parser, {
  separator: ' '
});
htmlProcessor.applyToElement(ele);