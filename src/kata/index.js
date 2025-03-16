// function highlightText(text, searchTerm) {
//   const regex = new RegExp(`(${searchTerm})`, 'gi');
//   return text.replace(regex, '<span style="background-color: yellow;">$1</span>');
// }
//
// document.getElementById('search').addEventListener('submit', function (e) {
//   e.preventDefault();
//
//   const searchInput = document.getElementById('search-input').value.trim();
//   const listItems = document.querySelectorAll('#list li');
//
//   if (!searchInput) {
//     listItems.forEach(item => {
//       item.style.display = 'list-item';
//       item.innerHTML = item.getAttribute('data-value');
//     });
//     return;
//   }
//
//   const searchLower = searchInput.toLowerCase();
//
//   listItems.forEach(item => {
//     const itemText = item.getAttribute('data-value').toLowerCase();
//     if (itemText.includes(searchLower)) {
//       item.style.display = 'list-item';
//       const highlightedText = highlightText(item.innerHTML, searchInput);
//       item.innerHTML = highlightedText;
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });

// document.getElementById('search').addEventListener('submit', function(event) {
//   event.preventDefault();
//
//   const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
//   const listItems = document.querySelectorAll('#list li');
//
//   if (searchTerm === "") {
//     listItems.forEach(item => {
//       item.style.display = 'list-item';
//       item.innerHTML = item.getAttribute('data-value');
//     });
//   } else {
//     listItems.forEach(item => {
//       const itemText = item.getAttribute('data-value').toLowerCase();
//       if (itemText.includes(searchTerm)) {
//         item.style.display = 'list-item';
//
//         const regex = new RegExp(`(${searchTerm})`, 'gi');
//         item.innerHTML = item.getAttribute('data-value').replace(regex, `<span style="background-color: yellow;">$1</span>`);
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }
// });
//
//
