// function titleCased(tutorials){
//   return tutorials.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }
// }

// function titleCased(str) {
//   return str.split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(' ')
// }

// const titleCased = (str) => {
//   return str.split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }
  
// function titleCased(str){
  let tutorials = [
  'What does the this Keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  });
}

str = str.split(' ');
for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
}


// return str.toLowerCase().split(' ').map(function(word) {
//   return word.replace(word[0], word[0].toUpperCase());
// }).join(' ');
// }
// tutorials.titleCased