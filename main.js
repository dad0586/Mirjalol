const para = document.querySelectorAll('p');
para.forEach((text) => {
    if (text.textContent.includes('succes')) { 
        text.classList.add('succes');
    }
    if (text.textContent.includes('error')) {
        text.classList.add('error');
    }
});