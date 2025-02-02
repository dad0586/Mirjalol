const ismlar = ['ahror', 'danyor', 'farxod', 'aziz'];
const newName = [];

ismlar.forEach (function(ism){
    const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + "bek"
    newName.push(newIsm);  
})

console.log(newName);
