// Intro
// Regex is short for Regular Expression. It helps to match, find or manage text. 
// Start by typing OK in the Regex field to proceed to the first step and access the more detailed description..
const ok = "Understand? OK or NOT";
console.log(ok.match(/OK/g));


//Return all .pdf files
const pdf = "readme.md \
document.pdf \
image.png \
music.mp4 \
manual.pdf";
console.log(pdf.match(/\w+\.pdf/gm));

//All chars
const anyChar = "abcABC123 .:!?";
console.log(anyChar.match(/./g));

const bar = "bar ber bir bor bur";
console.log(bar.match(/b[aeiou]r/g));

// Letter Range[a-z]
// To find the letters in the specified range, the starting letter and the ending letter are written in square brackets [] with a dash between them -. 
// It is case-sensitive. Type the expression that will select all lowercase letters between e and o, including themselves.
const string = "abcdefghijklmnopqrstuvwxyz";
console.log(string.match(/[e-o]/g));

const numbers = "0123456789";
console.log(numbers.match(/[3-6]/g));


//It will negate beor and beur
const negateSpecificWord = "bear beor beer beur"
console.log(negateSpecificWord.match(/be[^ou]r/g));



