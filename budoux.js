import { loadDefaultJapaneseParser } from 'budoux';

const parser = loadDefaultJapaneseParser();
console.log(parser.parse('今日は天気です。'));
// ['今日は', '天気です。']