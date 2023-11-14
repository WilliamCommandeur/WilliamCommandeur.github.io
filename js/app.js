const question = 'Tu veux boire une bière avant le match ce soir ?'
// const solution = 'oui'
// const solution2 ='Oui'
// const solution3 ='Ouais'
// const solution4 ='ouais'
// const solution5 ='Yes'
// const solution6 ='yes'

let reponse=prompt(question);
let reponsefinal = reponse.indexOf('oui');
let reponsefinal2 = reponse.indexOf('Oui');
let reponsefinal3 = reponse.indexOf('ouai');
let reponsefinal4 = reponse.indexOf('ouais');
let reponsefinal5 = reponse.indexOf('Ouais');
let reponsefinal6 = reponse.indexOf('yes');
let reponsefinal7 = reponse.indexOf('Yes');
let reponsefinal8 = reponse.indexOf('ok');
let reponsefinal9 = reponse.indexOf('OK');
let reponsefinal10 = reponse.indexOf('grave');
let reponsefinal11 = reponse.indexOf('Grave');
let message = 'T\'as changé'
if (reponsefinal !== -1 || reponsefinal2 !== -1 || reponsefinal3 !== -1 || reponsefinal4 !== -1 || reponsefinal5 !== -1 || reponsefinal6 !== -1 || reponsefinal7 !== -1 || reponsefinal8 !== -1 || reponsefinal9 !== -1 || reponsefinal10 !== -1 || reponsefinal11 !== -1) {
    message = 'Ok va pour une petite mousse'
}
alert(message)