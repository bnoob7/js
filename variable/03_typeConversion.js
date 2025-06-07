let score = 69;
let a = '10leo'
let b = undefined
let c = null

console.table({score: score, a: a, b: b, c: c});

let convertAtoNumber = Number(a);
let convertAtoString = String(a);
let convertAtoNull = null


console.table({a: a,
    a_after_Number_conversion : convertAtoNumber, 
    a_after_String_conversion: convertAtoString,
    a_after_Null_conversion : convertAtoNull,

})


// console.log(typeof(score));
