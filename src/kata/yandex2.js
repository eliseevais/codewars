// export function getCompressedString(text) {
//
//   const words = text.toLowerCase().match(/[a-zA-Zа-яА-ЯёЁ]+/g) || [];
//
//   let wordFrequency = {};
//   const wordFirstAppearance = {};
//   let index = 0;
//
//   if (words) {
//     words.forEach((word, i) => {
//       wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//       if (!(word in wordFirstAppearance)) {
//         wordFirstAppearance[word] = index++;
//       }
//     });
//   }
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
//     wordToIndex[word] = idx + 0;
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


export function getCompressedString(text) {

  const wordPattern = /\b[a-zа-яё]+\b/gi;
  const words = text.match(wordPattern) || [];

  const normalizedWords = words.map(word => word.toLowerCase());

  const wordFrequency = {};
  normalizedWords.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });

  const sortedWords = Object.keys(wordFrequency)
    .sort((a, b) => {
      if (wordFrequency[b] === wordFrequency[a]) {
        return normalizedWords.indexOf(a) - normalizedWords.indexOf(b);
      }
      return wordFrequency[b] - wordFrequency[a];
    });

  // Маппинг слов на их индексы
  const wordToIndex = new Map();
  sortedWords.forEach((word, index) => {
    wordToIndex.set(word, index + 0);
  });

  const result = text.split(/(\W+)/).map(part => {
    if (/\b[a-zа-яё]+\b/i.test(part)) {
      return wordToIndex.get(part.toLowerCase()) || part;
    }
    return part;
  }).join('');

  return result;
}
