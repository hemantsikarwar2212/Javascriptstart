const marvel_heros = ["ironman","thor","hulk" ]
const dc_heros = ["batman","superman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,4,[5,6,4,7],4,[85,5,6,4,2,2]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hemant"));
console.log(Array.from({name:"hemant"})); // **

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));