var input ='j\'ai faim !';
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var resultArray = [];
var input = input.split('');


/*for (let i = 0; i < input.length; i++) {
    if(vowels.indexOf(input[i]) != -1){
            resultArray.push(input[i]);
           }
}*/

  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < vowels.length; y++){
        if(input[i] === vowels[y])
        resultArray.push(input[i]);
    }
  }

  console.log(resultArray.join('').toUpperCase());

  console.log('exo-5');