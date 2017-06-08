(function () {
    const personForm = document.querySelector('#personForm')

    function renderColor(color) {
        const div = document.createElement('div')
        div.style.backgroundColor = color
        div.style.width = '100px'
        div.style.height = '50px'

        return div

    }

    function renderListItem(label, value) {
        //const item = document.createElement('li')
        //item.innerHTML = `${label}: ${value}`
    const item = document.createElement('li')
    const dt = document.createElement('dt')
    const dd = document.createElement('dd')
    dt.textContent = label
    dd.innerHTML = value
    item.appendChild(dt)
    item.appendChild(dd)

    return item
    }
    function renderList(personData) {
        const list = document.createElement('dl')
        // call renderlistitem several items //['name', 'favoriteColor', 'age']
        Object.keys(personData).map(function(label) {
            const item = renderListItem(label, personData[label])
            list.appendChild(item)
        
        })

        return list
    }
    

    function handleSubmit(ev) {
        ev.preventDefault()
        const f = ev.target
        const details = document.querySelector('#details')

        
        const person = {
            name: f.personName.value,    
            favoriteColor:  renderColor(f.favoriteColor.value).outerHTML, //'black'
            age: f.age.value, //'confidential'
        }
    
    const list = renderList(person)
    details.appendChild(list)

   
}

personForm.addEventListener('submit', handleSubmit)
})()








//removed code and some notes 

//const personPlace = document.querySelector('#personPlace')

//return `<div style="background-color: ${favoriteColor}; width: 100px; height: 50px; "></div>`

//const x = ev.target //assigned to the remaining const pulling the target of the querySelector
//const heading = document.querySelector('h1')
  
//const boldedName = document.createElement('strong')//creates the empty strong element
//boldedName.textContent = name//puts name inside empty strong element
//details.appendChild(boldedName) // sticks inside the details div

//const colorDiv = `<div style="background-color: ${favoriteColor}; width: 100px; height: 50px; "></div>`

// const thing = document.createElement(``)
// thing.textContent = 
// details.appendChild(thing)

//Committed on Addition of Dom- Elements

//const list = document.createElement('ul')
// const nameItem = document.createElement('li')
//nameItem.textContent = `Name: ${name}`
   
// const colorItem = document.createElement('li')
//colorItem.innerHTML = `Favorite Color: ${colorDiv}`
// colorItem.innerHTML = `Favorite Color: ${rendercolor(favoriteColor).outerHTML}`
   
//const ageItem = document.createElement('li')
// ageItem.textContent = `Age: ${age}`
//(including the list.appendChildx3 above)

 //can't take boldedName and place directly below to grab the element
// details.innerHTML += `<strong>${name}</strong>` //called string interpolation //'<strong>'+ name + '</strong>'
//heading.textContent = f.personName.value + ', ' +  x.personPlace.value 

//notes- avoid global variables because of bringing in libraries- unpredictable 
//circumstances
// IIFE- immediate invoked function expression - sets local variables within the function
// i.e no global functions 

//list.appendChild(nameItem)
//list.appendChild(colorItem)
//list.appendChild(ageItem)
//details.appendChild(list)

// details.innerHTML = `
//<ul>
    // <li> Name: ${name} </li>
    // <li> Favorite Color: ${colorDiv}</li>
    // <li> Age: ${age} </li>

//</ul>
//`  
//const name = f.personName.value
//const favoriteColor = f.favoriteColor.value
//const age = f.age.value 