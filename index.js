//console.log('It Worked')


const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value 
    
    //console.log(f.personName.value)
    //console.log('Submittt~')
}

personForm.addEventListener('submit', handleSubmit)


