// some basics about ES6
// functions - let me count the ways...
const fnA = (x) => { return x * x } // we can call this a lambda
const fnB = (x) => x * x // one liner no brackets, implicit return
const fnC = x => { return x * x } // if there is exactly ONE argument
// CAREFUL - if you mean to return something you MUST write 'return' inside the {}
const fnD = (x) => { x * x } // will this return the square of x? NOOOOOOOOOO!!!!!!!
// recomended = always use brackets ()=>{} React really prefers this

// old skool
function fnX(x) {
    return x * x; // the square of x will be returned
}
result = fnX(3); // result will be 9

// JavaScript is loosely typed
let x = 1 // here x is typed as a number
let c = 'Charli' // c is typed as a string
x = 'wow' // ...and now x is typed as a string
c = 'Raye' // strings are immutable indexed collections of characters
for (let n in c){
    console.log(n, c[n])
}

if (c=='Charli'){
    console.log(' love that green.... ')
} else{
    console.log(' let there be light ')
}

// ways to declare stuff
n = true // impliciti 'let'
let m = ['red', 'green', 'blue'] // a zero-indexed array
let p = { n: 'Floella', a: 42, level: 'admin' }// let is recomended
// many collections are zero-based
for (let i in m) { // iterating
    console.log(i, m[i])
}


// in ES everything is an object
// it is good practice to grab the ID of parts of the document DOM
const btn = document.getElementById('btnAgree')
const mon = document.getElementById('monitor')
const usr = document.getElementById('userName')
// NB getElementById returns the ENTIRE element (including it's children)
const go = document.getElementById('btnGo')
const my_robot = document.getElementById('imgRobot')
const set_n = document.getElementById('whichSet')
const bg_n = document.getElementById('whichBg')
const neoDetector = document.getElementById('isThisNeo')

// a function to add a source to the image
const doStuff = () => {
    // grab whatever the user entered into the fields
    const n = usr.value // remember every form field can have a value
    const m = set_n.value
    const p = bg_n.value
    // iterate over whatever they typed
    for (let i in n){
        console.log(`character ${i} is ${n[i]}`)
    }
    // is this Neo??
    if (n=='Neo'){
        neoDetector.innerHTML = "we've been expecting you..."
    }


    // add that to the robot url: use back-tick syntax
    const imgUrl = `https://robohash.org/${n}?set=set${m}&bgset=bg${p}`
    // set the attributes on our image tag
    my_robot.setAttribute('src', imgUrl)
    my_robot.setAttribute('alt', 'yay robots!')
}
// here is a handy function 
const handleAgree = () => {
    console.log('button was clicked')
    // thank the user
    mon.innerHTML = 'thank you for agreeing to cookies'
    // remove this event listener
    btn.removeEventListener('click', handleAgree)
}
// best practice dictates we should add event listeners here (rather than in HTML)
btn.addEventListener('click', handleAgree) // note NOT handleAgree()
go.addEventListener('click', doStuff)
set_n.addEventListener('change', doStuff)
bg_n.addEventListener('change', doStuff)