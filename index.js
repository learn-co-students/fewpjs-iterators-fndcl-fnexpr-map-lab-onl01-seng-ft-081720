const tutorials = [
  'what does the this keyword mean?',
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

// const titleCased = () => {
//   return tutorials
// }

//////////// SOLUTION ////////////

const titleCased = () => {
  return tutorials.map( tutorialTitle => {
    let splitTitles = tutorialTitle.split(' ')
    let capitalizedFirstLetter =
      splitTitles.map( splitTitle => splitTitle.charAt(0).toUpperCase() + splitTitle.slice(1) )
    let reJoinedTitle = capitalizedFirstLetter.join(' ')
    return reJoinedTitle
  })
}

//////////////////////////////////


//  TESTING    TESTING    TESTING
// const titleCased = () => {
//   return tutorials.map( tutorialTitle => {
//     let splitTitles = tutorialTitle.split(' ')
//     let capitalizedFirstLetter;

//     return splitTitles

//   })
// }


console.log(titleCased())


// MY SECOND EFFORT

// const titleCased = () => {
//   return tutorials.map(function(tutorial) {
//     return tutorial.replace(
//           /\w\S*/g,
//         function(txt) {
//           return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//         }
//       );
//   })
// }



// MY ORIGINAL SOLUTION

// let titleCased = tutorials.map(function(tutorial) {
//   return tutorial.replace(
//     /\w\S*/g,
//     function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
//   );
// })

// console.log(ans)

