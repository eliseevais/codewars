// function solution(input) {
//   const [rulesSection, sequencesSection] = input.split('\n\n');
//
//   const rules = rulesSection.split('\n').map(rule => {
//     const [x, y] = rule.split('|').map(Number);
//     return [x, y];
//   });
//
//
//   const sequences = sequencesSection.split('\n').map(sequence =>
//     sequence.split(/[ ,]+/).map(Number)
//   );
//
//
//   function isValidSequence(sequence) {
//     for (let [x, y] of rules) {
//       const xIndex = sequence.indexOf(x);
//       const yIndex = sequence.indexOf(y);
//
//       if (xIndex !== -1 && yIndex !== -1 && xIndex > yIndex) {
//         return false;
//       }
//     }
//     return true;
//   }
//
//
//   let validCount = 0;
//   for (let sequence of sequences) {
//     if (isValidSequence(sequence)) {
//       validCount++;
//     }
//   }
//
//   return validCount;
// }
//
// module.exports = solution;

// function solution(input) {
//   const [rulesSection, sequencesSection] = input.split('\n\n');
//
//   const rules = rulesSection.split('\n').map(rule => {
//     const [x, y] = rule.split(' ').map(Number);
//     return [x, y];
//   });
//
//   const sequences = sequencesSection.split('\n').map(sequence =>
//     sequence.split(/[ ,]+/).map(Number)
//   );
//
//   function isValidSequence(sequence) {
//     for (let [x, y] of rules) {
//       const xIndex = sequence.indexOf(x);
//       const yIndex = sequence.indexOf(y);
//
//       if (xIndex !== -1 && yIndex !== -1 && xIndex > yIndex) {
//         return false;
//       }
//     }
//     return true;
//   }
//
//   let validCount = 0;
//   for (let sequence of sequences) {
//     if (isValidSequence(sequence)) {
//       validCount++;
//     }
//   }
//
//   return validCount;
// }
//
// module.exports = solution;

function solution(input) {
  const [rulesSection, sequencesSection] = input.split('\n\n');

  const rules = rulesSection.split('\n').map(rule => {
    const [x, y] = rule.split('|').map(Number);
    return [x, y];
  });


  const sequences = sequencesSection.split('\n').map(sequence =>
    sequence.split(/[ ,]+/).map(Number)
  );


  function isValidSequence(sequence) {
    for (let [x, y] of rules) {
      const xIndex = sequence.indexOf(x);
      const yIndex = sequence.indexOf(y);

      if (xIndex !== -1 && yIndex !== -1 && xIndex > yIndex) {
        return false;
      }
    }
    return true;
  }


  let validCount = 0;
  for (let sequence of sequences) {
    if (isValidSequence(sequence)) {
      validCount++;
    }
  }

  return validCount;
}

module.exports = solution;



