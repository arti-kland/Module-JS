// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
var last = secretMessage.pop();//Remove from the end of an Array
var newLength = secretMessage.push('to', 'program');//Add to the end of an Array
var pos = secretMessage.indexOf('easily');//Find the index of an item in the Array (item = easily)
secretMessage[6] = 'right';//Change the value of a item : ('easily' change to 'right')
var first = secretMessage.shift();//Remove from the front of an Array
var newLength = secretMessage.unshift('Programming') // add to the front 'Programming'

secretMessage.forEach(function (value, i) {//boucle qui parcour mon tableau et recuper les index et valeur
    console.log('%d: %s', i, value);//affiche pour chaque index la valeur liée.
});
var pos1 = secretMessage.indexOf('you');
var removedItem = secretMessage.splice(pos = 5, n = 5 );
secretMessage.splice(5, 0, 'know');

console.log(secretMessage);
console.log(secretMessage.join(' '));
console.log(pos);
console.log(pos1);
