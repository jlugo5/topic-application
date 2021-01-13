

const update = document.querySelector('#update-button')
update.addEventListener('click', () => {
    fetch('/quotes', { 
        method: 'put', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ 
            name: 'Dark Vadar',
            quote: 'I see you'
         }) })
})

const delet = document.querySelector('#delete-button')
delet.addEventListener('click', ()=>
fetch('/quotes',{
    method: 'delete',
    headers: { 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        name: 'Dark Vadar'
    })
}))






