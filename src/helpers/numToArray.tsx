export const numToArray = (number:number) => {
  let array = [];

  for (let i = 1; i <= number; i++) {
    array.push(i.toString());
  }

  return array;
}