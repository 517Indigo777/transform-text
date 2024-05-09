import { camelCase } from 'lodash';

function transformText(text) {
const upperCaseText = text. toUpperCase();

return camelCase(upperCaseText) ;

module.exports = transformText;