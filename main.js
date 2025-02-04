const ul = document.querySelector('ul')
const button = document.querySelector('button')
button.addEventListener( 'click', () => {
    
    const li = document.createElement('li')
    li.textContent = 'Mirjalol  ✌️'
    ul.appendChild(li)
    
})


const items = document.querySelectorAll('li')
// console.log(items);
items.forEach((item) =>{
    item.addEventListener('click' , (e) => {
        // console.log(item);
        // item.style.textDecoration = 'line-through'
        // e.target.style.opacity = '0.8'
        // item.remove();
        
    })
})

ul.addEventListener('click', (e) => {
    if(e.target.nodeName == 'LI'){
        e.target.remove();
    }
    
} )

