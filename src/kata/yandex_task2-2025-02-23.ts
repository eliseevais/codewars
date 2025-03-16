export const getCompressedString = (text: string): string  => {
  type SomeTypes = {
    [key: string]: number
  };
  const words = text.toLowerCase().match(/[a-zA-Zа-яА-ЯёЁ]+/g) || [];
  let wordFrequency: SomeTypes = {};
  const wordFirstAppearance: SomeTypes = {};
  let index: number = 0;

  words.forEach((word, i) => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    if (!(word in wordFirstAppearance)) {
      wordFirstAppearance[word] = index++;
    }
  });

  const sortedWords = Object.keys(wordFrequency).sort((a, b) => {
    if (wordFrequency[b] !== wordFrequency[a]) {
      return wordFrequency[b] - wordFrequency[a];
    }
    return wordFirstAppearance[a] - wordFirstAppearance[b];
  });

  const wordToIndex: SomeTypes = {};
  sortedWords.forEach((word, idx) => {
    wordToIndex[word] = idx + 0;
  });

  let result = '';
  let wordBuffer = '';
  let i = 0;

  while (i < text.length) {
    if (/[a-zA-Zа-яА-ЯёЁ]+/.test(text[i])) {
      wordBuffer += text[i].toLowerCase();
    } else {
      if (wordBuffer) {
        result += wordToIndex[wordBuffer];
        wordBuffer = '';
      }
      result += text[i];
    }
    i++;
  }

  if (wordBuffer) {
    result += wordToIndex[wordBuffer];
  }

  return result;
}

const text1 = "hello world! привет - мир";
console.log(getCompressedString(text1))


// export function getCompressedString(text) {
//
//   const words = text.toLowerCase().match(/[a-zA-Zа-яА-ЯёЁ]+/g) || [];
//   let wordFrequency = {};
//   const wordFirstAppearance = {};
//   let index: number = 0;
//
//   words.forEach((word, i) => {
//     wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//     if (!(word in wordFirstAppearance)) {
//       wordFirstAppearance[word] = index++;
//     }
//   });
//
//   const sortedWords = Object.keys(wordFrequency).sort((a, b) => {
//     if (wordFrequency[b] !== wordFrequency[a]) {
//       return wordFrequency[b] - wordFrequency[a];
//     }
//     return wordFirstAppearance[a] - wordFirstAppearance[b];
//   });
//
//   const wordToIndex = {};
//   sortedWords.forEach((word, idx) => {
//     wordToIndex[word] = idx + 0; // Индексация с 0
//   });
//
//   let result = '';
//   let wordBuffer = '';
//   let i = 0;
//
//   while (i < text.length) {
//     if (/[a-zA-Zа-яА-ЯёЁ]+/.test(text[i])) {
//       wordBuffer += text[i].toLowerCase();
//     } else {
//       if (wordBuffer) {
//         result += wordToIndex[wordBuffer];
//         wordBuffer = '';
//       }
//       result += text[i];
//     }
//     i++;
//   }
//
//   if (wordBuffer) {
//     result += wordToIndex[wordBuffer];
//   }
//
//   return result;
// }


