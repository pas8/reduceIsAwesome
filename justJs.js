const oddSortFunc = (arr) => {
  const sortedEvenArr = arr.filter((number) => number % 2).sort((a, b) => a - b);

  const { arr: sortedArr } = arr.reduce(
    (acc, number) => {
      const isNumberOdd = !(number % 2);
      const evenIdx = isNumberOdd ? acc.evenIdx : acc.evenIdx + 1;

      const arr = [...acc.arr, isNumberOdd ? number : sortedEvenArr[acc.evenIdx]];
      return { arr, evenIdx };
    },

    { arr: [], evenIdx: 0 }
  );

  return sortedArr;
};

// console.log(oddSortFunc([7, 3, 4, 9, 5, 2, 17]));

const handleZipString = (str) => {
  const strArr = str.split('');

  const { arr } = strArr.reduce(
    (acc, item, idx) => {
      const prevItem = acc.arr[idx - 1];
      if (!prevItem) return { arr: [item], currentSymbol: item };

      const isNumber = !Number.isNaN(+prevItem);
      const isSymbolRepeat = acc.currentSymbol === item;
      const START_NUMBER = 2;

      const arr = [...acc.arr, isNumber ? +prevItem + 1 : START_NUMBER];

      if (isSymbolRepeat) return { arr, currentSymbol: acc.currentSymbol };

      return { arr: [...acc.arr, item], currentSymbol: item };
    },
    { arr: [], currentSymbol: '' }
  );
  const zipedStr = arr.filter((item, idx) => Number.isNaN(+arr[idx + 1]) || Number.isNaN(+item)).join('');
  return zipedStr;
};

const fizzBuzzFunc = (num,powIdx) => {



}

console.log(Array.from({ length: 12 }, (__,idx) => idx),2 ** 4) 


// console.log(handleZipString('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));

// function rle(str) {
//   const result = [str[0]];
//   let count = 1;

//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === str[i - 1]) {
//       count++;

//       if (i === str.length - 1) {
//         result.push(str[i]);
//         if (count > 1) {
//           result.push(count);
//         }
//       }
//     } else {
//       if (i > 1) {
//         result.push(str[i - 1]);
//       }

//       if (i === str.length - 1) {
//         result.push(str[i]);
//       }

//       if (count > 1) {
//         result.push(count);
//       }

//       count = 1;
//     }
//   }

//   return result.join('');
// }
// console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
