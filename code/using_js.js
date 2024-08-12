// it is good practice to grab the ID of parts of the document DOM
const btn = document.getElementById('btnAgree')
const mon = document.getElementById('monitor')

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