
const personForm = document.querySelector('#personForm')
const personPlace = document.querySelector('#personPlace')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const x = ev.target //assigned to the remaining const pulling the target of the querySelector
    //const heading = document.querySelector('h1')

    const details = document.querySelector('#details')
    const name = f.personName.value
    details.innerHTML += '<strong>'+ name + '</strong>'

    heading.textContent = f.personName.value + ', ' +  x.personPlace.value 
   
}

personForm.addEventListener('submit', handleSubmit)




