// // function getRecord(url, recordId) {
// //   try {
// //     const response = fetch(url);
// //
// //     if (!response.ok) {
// //       throw new Error(`Ошибка при получении данных с сервера: ${response.status}`);
// //     }
// //
// //     const data = response.json();
// //
// //     if (!data.records || !Array.isArray(data.records)) {
// //       throw new Error(`Неожиданный формат данных: ${url}`);
// //     }
// //
// //     const record = data.records.find(record => record.id === recordId);
// //
// //     if (!record) {
// //       throw new Error(`Запись не найдена, id: ${recordId}`);
// //     }
// //
// //     return {
// //       getTitle: () => record.title,
// //       getSummary: () => record.summary,
// //       getDetails: () => record.details
// //     };
// //
// //   } catch (error) {
// //     throw error;
// //   }
// // }
// //
// // module.exports = getRecord;
//
// async function getRecord(url, recordId) {
//   try {
//     const response = await fetch(url);
//
//     if (!response.ok) {
//       throw new Error(`Ошибка при получении данных с сервера: ${response.status}`);
//     }
//
//     const data = await response.json();
//
//     if (!data.records || !Array.isArray(data.records)) {
//       throw new Error(`Неожиданный формат данных: ${url}`);
//     }
//
//     const record = data.records.find(record => record.id === recordId);
//
//     if (!record) {
//       throw new Error(`Запись не найдена, id: ${recordId}`);
//     }
//
//     return {
//       getTitle: () => record.title,
//       getSummary: () => record.summary,
//       getDetails: () => record.details
//     };
//
//   } catch (error) {
//     throw error;
//   }
// }
//
// module.exports = getRecord;
//


// async function getRecord(url, recordId) {
//   try {
//     const response = await fetch(url);
//
//     if (!response.ok) {
//       throw new Error(`Ошибка при загрузке данных: ${response.status}`);
//     }
//
//     let data;
//     try {
//       data = await response.json();
//     } catch (err) {
//       throw new Error(`Неожиданный формат данных: ${url}`);
//     }
//
//     const record = data.records.find(record => record.id === recordId);
//
//     if (!record) {
//       throw new Error(`Запись не найдена, id: ${recordId}`);
//     }
//
//     return {
//       getTitle: () => record.title,
//       getSummary: () => record.summary,
//       getDetails: () => record.details
//     };
//
//   } catch (error) {
//     throw error;
//   }
// }
//
// module.exports = getRecord;

function getRecord(url, recordId) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка при загрузке данных: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const record = data.records.find(record => record.id === recordId);

      if (!record) {
        throw new Error(`Запись не найдена, id: ${recordId}`);
      }

      return {
        getTitle: () => record.title,
        getSummary: () => record.summary,
        getDetails: () => record.details
      };
    })
    .catch(error => {
      throw error;
    });
}

module.exports = getRecord;
