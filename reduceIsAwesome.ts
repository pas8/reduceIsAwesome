export const reduceSortOddNumbersFunc = (arr: number[]): number[] => {
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


export const reduceReverseFunc = (arr: any[]): any[] => arr.reduce((acc, item) => [item, ...acc], [] as any[]);

export const reduceFlatFunc = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return arr;
  return arr.reduce((acc, item) => acc.concat(reduceFlatFunc(item)), [] as any[]);
};
