"use strict";

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);

console.log(array3);
//-concat---------------------------------//

const array = [1, 2, 3];
array.reverse();
console.log(array);
//-reverse---------------------------------//

const arrayPush = [1, 2, 3];
arrayPush.push(4, 5, 6);
console.log(arrayPush);

const arrayUnshift = [1, 2, 3];
arrayUnshift.unshift(4, 5, 6);
console.log(arrayUnshift);
//-push---unshift--------------------------//

const arrayShift = ["js", "css", "html"];
arrayShift.shift();
console.log(arrayShift);

const arrayPop = ["js", "css", "html"];
arrayPop.pop();
console.log(arrayPop);
//-shift---pop----------------------------//

const arraySlice = [1, 2, 3, 4, 5];
const arraySliceOne = arraySlice.slice(0, 3);
const arraySliceTwo = arraySlice.slice(3);
console.log(arraySliceOne);
console.log(arraySliceTwo);
//-slice----------------------------------//

const arraySpliceA = [1, 2, 3, 4, 5];
arraySpliceA.splice(1, 2);
console.log(arraySpliceA);

const arraySpliceB = [1, 2, 3, 4, 5];
const arraySpliceC = arraySpliceB.splice(1, 3);
console.log(arraySpliceC);

const arraySpliceD = [1, 2, 3, 4, 5];
arraySpliceD.splice(3, 0, "a", "b", "c");
console.log(arraySpliceD);

const arraySpliceF = [1, 2, 3, 4, 5];
arraySpliceF.splice(1, 0, "a", "b");
arraySpliceF.splice(6, 0, "c");
arraySpliceF.splice(8, 0, "e");
console.log(arraySpliceF);
//-splice----------------------------------//

const arraySort = [3, 4, 1, 2, 7];
console.log(arraySort.sort());
//-sort------------------------------------//

// Во всех задания ниже сделать функцию!!!
// В комментариях к коду описать задание.
// =========================================================//
// Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку,
// и возвращать true, если строка есть в массиве, и false - если нет
