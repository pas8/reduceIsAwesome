
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

export const fizzBuzzFunc = (length: number, STARTIDX = 1, denotationArr = defaultFizzBuzzDenotation): (number | string)[] => {
  const numberArr = Array.from({ length }, (__, idx) => idx + STARTIDX);

  const fizzBuzzArr = numberArr.reduce((acc, num) => {
    const currentValue =
      denotationArr.find(({ valueArr }) => valueArr.every((number) => !(num % number)))?.caprion || num;

    return [...acc, currentValue];
  }, [] as (number | string)[]);

  return fizzBuzzArr;
};

export const handleZipString = (str: string): string => {
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
