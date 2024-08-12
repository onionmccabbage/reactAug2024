// it is good practice to grab the ID of parts of the document DOM
const btn = document.getElementById('btnAgree')
const mon = document.getElementById('monitor')
const usr = document.getElementById('userName')
// NB getElementById returns the ENTIRE element (including it's children)
const go  = document.getElementById('btnGo')
const my_robot = document.getElementById('imgRobot')

// a function to add a source to the image
const doStuff = ()=>{
    // grab whatever the user entered into the text field
    const n = usr.value // remember every form field can have a value
    // add that to the robot url: use back-tick syntax
    const imgUrl = `https://robohash.org/${n}`
    // set the attributes on our image tag
    my_robot.setAttribute('src', imgUrl)
    my_robot.setAttribute('alt', 'yay robots!')
}
// here is a handy function 
const handleAgree = ()=>{
    console.log('button was clicked')
    // thank the user
    mon.innerHTML = 'thank you for agreeing to cookies'
    // remove this event listener
    btn.removeEventListener('click', handleAgree)
}
// best practice dictates we should add event listeners here (rather than in HTML)
btn.addEventListener('click', handleAgree) // note NOT handleAgree()
go.addEventListener('click', doStuff)