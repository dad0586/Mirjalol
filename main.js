const para = document.querySelectorAll('p')
console.log(para);
para.forEach((text) =>{
    if (text.textContent.includes('succes') )
    text.classList.add('succes ')

})