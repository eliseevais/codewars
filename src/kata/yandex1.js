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


// export function getCompressedString(text) {
//
//   const wordPattern = /\b[a-zа-яё]+\b/gi;
//   const words = text.match(wordPattern) || [];
//
//   const normalizedWords = words.map(word => word.toLowerCase());
//
//   const wordFrequency = {};
//   normalizedWords.forEach(word => {
//     wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//   });
//
//   const sortedWords = Object.keys(wordFrequency)
//     .sort((a, b) => {
//       if (wordFrequency[b] === wordFrequency[a]) {
//         return normalizedWords.indexOf(a) - normalizedWords.indexOf(b);
//       }
//       return wordFrequency[b] - wordFrequency[a];
//     });
//
//   // Маппинг слов на их индексы
//   const wordToIndex = new Map();
//   sortedWords.forEach((word, index) => {
//     wordToIndex.set(word, index + 0);
//   });
//
//   const result = text.split(/(\W+)/).map(part => {
//     if (/\b[a-zа-яё]+\b/i.test(part)) {
//       return wordToIndex.get(part.toLowerCase()) || part;
//     }
//     return part;
//   }).join('');
//
//   return result;
// }

// export function getCompressedString(text) {
//   const wordPattern = /\b[a-zа-яё]+\b/gi; // Регулярное выражение для поиска слов
//   const words = text.match(wordPattern) || []; // Извлекаем все слова
//
//   const normalizedWords = words.map(word => word.toLowerCase()); // Приводим слова к нижнему регистру
//
//   const wordFrequency = {}; // Частота встречаемости каждого слова
//   normalizedWords.forEach(word => {
//     wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//   });
//
//   // Сортировка слов по частоте, если частоты равны, то по их первому вхождению
//   const sortedWords = Object.keys(wordFrequency)
//     .sort((a, b) => {
//       if (wordFrequency[b] === wordFrequency[a]) {
//         return normalizedWords.indexOf(a) - normalizedWords.indexOf(b); // Сортировка по первому вхождению
//       }
//       return wordFrequency[b] - wordFrequency[a]; // Сортировка по частоте
//     });
//
//   // Маппинг слов на их индексы
//   const wordToIndex = new Map();
//   sortedWords.forEach((word, index) => {
//     wordToIndex.set(word, index); // Индекс начинаем с 0
//   });
//
//   // Разделяем текст на части (слова и неслова), маппируем слова на их индексы
//   const result = text.split(/(\W+)/).map(part => {
//     if (/\b[a-zа-яё]+\b/i.test(part)) { // Если это слово
//       return wordToIndex.get(part.toLowerCase()) !== undefined
//         ? wordToIndex.get(part.toLowerCase()) // Заменяем слово на его индекс
//         : part;
//     }
//     return part; // Если это не слово, оставляем как есть
//   }).join('');
//
//   return result; // Возвращаем результат
// }

// зачтено много правильных ответов
// export function getCompressedString(text){
//
//   const words = text.toLowerCase().match(/[a-zA-Zа-яА-ЯёЁ]+/g) || [];
//
//   let wordFrequency = {};
//   const wordFirstAppearance = {};
//   let index = 0;
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


// ///////////////////////////////  исправлен код
//
// export function getCompressedString(text) {
//   const words = text.toLowerCase().match(/[a-zA-Zа-яА-ЯёЁ]+/g) || [];
//
//   let wordFrequency = {};
//   const wordFirstAppearance = {};
//   let index = 0;
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
//     wordToIndex[word] = idx;
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


// export function getCompressedString(text) {
//   const words = [];
//   const wordPositions = [];
//   const wordFrequency = {};
//
//   const wordRegex = /[a-zA-Zа-яА-ЯёЁ]+/g;
//   const punctuationRegex = /[.,!?]/g;
//
//   let match;
//   while ((match = wordRegex.exec(text)) !== null) {
//     const word = match[0].toLowerCase();
//     words.push(word);
//     wordPositions.push({ word: match[0], index: match.index });
//     wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//   }
//
//   const sortedWords = Object.keys(wordFrequency)
//     .sort((a, b) => {
//       if (wordFrequency[b] !== wordFrequency[a]) {
//         return wordFrequency[b] - wordFrequency[a];
//       }
//       return words.indexOf(a) - words.indexOf(b);
//     });
//
//   const wordToIndex = {};
//   sortedWords.forEach((word, idx) => {
//     wordToIndex[word] = idx;
//   });
//
//   let result = '';
//   let lastIndex = 0;
//
//   while ((match = wordPositions.shift())) {
//     const { word, index } = match;
//     result += text.slice(lastIndex, index);
//     result += wordToIndex[word.toLowerCase()];
//     lastIndex = index + word.length;
//   }
//
//   result += text.slice(lastIndex);
//
//   return result;
// }

// export function getCompressedString(text) {
//   const words = [];
//   const wordPositions = [];
//   const wordFrequency = {};
//
//   const wordRegex = /[a-zA-Zа-яА-ЯёЁ]+/g;
//
//   let match;
//   while ((match = wordRegex.exec(text)) !== null) {
//     const word = match[0].toLowerCase();
//     words.push(word);
//     wordPositions.push({ word: match[0], index: match.index });
//     wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//   }
//
//   const sortedWords = Object.keys(wordFrequency)
//     .sort((a, b) => {
//       if (wordFrequency[b] !== wordFrequency[a]) {
//         return wordFrequency[b] - wordFrequency[a];
//       }
//       return words.indexOf(a) - words.indexOf(b);
//     });
//
//   const wordToIndex = {};
//   sortedWords.forEach((word, idx) => {
//     wordToIndex[word] = idx;
//   });
//
//   let result = '';
//   let lastIndex = 0;
//
//   for (let i = 0; i < wordPositions.length; i++) {
//     const { word, index } = wordPositions[i];
//
//     result += text.slice(lastIndex, index);
//     result += wordToIndex[word.toLowerCase()];
//     lastIndex = index + word.length;
//   }
//
//   result += text.slice(lastIndex);
//
//   return result;
// }

export function getCompressedString(text) {
  const words = text.toLowerCase().match(/\b\w+\b|[.,!?]/g) || [];

  const wordCounts = {};
  words.forEach(word => {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });

  const sortedWords = Object.entries(wordCounts).sort((a, b) => {
    if (b[1] === a[1]) {
      return words.indexOf(a[0]) - words.indexOf(b[0]);
    }
    return b[1] - a[1];
  });

  const wordIndex= {};
  sortedWords.forEach(([word, _], i) => {
    wordIndex[word] = i + 1;
  });

  const result = words.map(word => wordIndex[word] || word).join('');

  return result;
}


