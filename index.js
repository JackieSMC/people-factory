
const personForm = document.querySelector('#personForm')
const personPlace = document.querySelector('#personPlace')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const x = ev.target //assigned to the remaining const pulling the target of the querySelector
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + ', ' +  x.personPlace.value 

   
}

personForm.addEventListener('submit', handleSubmit)


