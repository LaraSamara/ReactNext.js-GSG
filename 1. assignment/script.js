// Task...2
function sumAndAverage(arr){
if(arr.length === 0){
    return {sum: 0, avg: 0};
}
const sum = arr.reduce((result, number) => result+number, 0);
const avg = sum / arr.length;
return {sum, avg};
}
const numbers = [100, 200, 300, 400, 500, 600];
console.log(sumAndAverage(numbers));
// Task...3
function removeDuplicate(arr){
    return [...new Set(arr)];
}
const strings = ["lara", "sara", "lara", "sali", "eva", "sali" ,"sali", "eva"];
console.log(removeDuplicate(strings));