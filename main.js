
// const maxsulot = function (product, tax) {
// let total = 0;

// for (let i=0; i<=maxsulot.length; i++){
//     total += product[i] + product[i] * tax;
// }
// return total;
// }

// const result = maxsulot([10, 13, 45], 0.2)
// console.log(result);


const maxsulot = (product, tax) => {
    let total = 0;
    
    for (let i=0; i<=maxsulot.length; i++){
        total += product[i] + product[i] * tax;
    }
    return total;
    }
    
    const result = maxsulot([10, 13, 45], 0.2)
    console.log(result);