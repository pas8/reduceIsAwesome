const handleSortOddNumbers = (arr: number[]): number[] => {
  const sortedEvenArr = arr.filter((number) => number % 2).sort((a, b) => a - b);

  const { arr: sortedArr } = arr.reduce(
    (acc, number) => {
      const isNumberOdd = !(number % 2);
      const evenIdx = isNumberOdd ? acc.evenIdx : acc.evenIdx + 1;

      const arr = [...acc.arr, isNumberOdd ? number : sortedEvenArr[acc.evenIdx]];
      return { arr, evenIdx };
    },

    { arr: [], evenIdx: 0 } as { arr: number[]; evenIdx: number }
  );

  return sortedArr;
};

// console.log(oddSortFunc([7, 3, 4, 9, 5, 2, 17]));

const handleZipString = (str: string): string => {
  const strArr = str.split('');

  const { arr } = strArr.reduce(
    (acc, item, idx) => {
      const prevItem = acc.arr[idx - 1];
      if (!prevItem) return { arr: [item], currentSymbol: item };

      const isNumber = !Number.isNaN(+prevItem);
      const isSymbolRepeat = acc.currentSymbol === item;
      const START_STR_NUMBER = `${2}`;

      const arr = [...acc.arr, isNumber ? `${+prevItem + 1}` : START_STR_NUMBER];

      if (isSymbolRepeat) return { arr, currentSymbol: acc.currentSymbol };

      return { arr: [...acc.arr, item], currentSymbol: item };
    },
    { arr: [], currentSymbol: '' } as { arr: string[]; currentSymbol: string }
  );
  const zipedStr = arr.filter((item, idx) => Number.isNaN(+arr[idx + 1]) || Number.isNaN(+item)).join('');
  return zipedStr;
};

enum fizzzBuzzObjDenotation {
  VALUEARR = 'valueArr',
  CAPTION = 'caprion',
}

const defaultFizzBuzzDenotation = [
  {
    [fizzzBuzzObjDenotation.VALUEARR]: [3, 5],
    [fizzzBuzzObjDenotation.CAPTION]: 'fizzbuzz',
  },
  {
    [fizzzBuzzObjDenotation.VALUEARR]: [3],
    [fizzzBuzzObjDenotation.CAPTION]: 'fizz',
  },
  {
    [fizzzBuzzObjDenotation.VALUEARR]: [5],
    [fizzzBuzzObjDenotation.CAPTION]: 'buzz',
  },
] as { [fizzzBuzzObjDenotation.VALUEARR]: number[]; [fizzzBuzzObjDenotation.CAPTION]: string }[];

const fizzBuzzFunc = (length: number, STARTIDX = 1, denotationArr = defaultFizzBuzzDenotation): (number | string)[] => {
  const numberArr = Array.from({ length }, (__, idx) => idx + STARTIDX);

  const fizzBuzzArr = numberArr.reduce((acc, num) => {
    const currentValue =
      denotationArr.find(({ valueArr }) => valueArr.every((number) => !(num % number)))?.caprion || num;
      
    return [...acc, currentValue];
  }, [] as (number | string)[]);
  

  return fizzBuzzArr
};

console.log(fizzBuzzFunc(15));

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
