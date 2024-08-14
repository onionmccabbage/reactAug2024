export const planet = 'Jupiter'
export let arrr = ['red', 'green', 'blue']
// if we say export default it means we can import WITHOUT using curly-braces
// export default function fnX(){ // old-skool function!!
//     return 'this is from a function'
// }
const fnX = ()=>{
    return 'this is from a function'
}
// to export a modern-syntax function do this
export default fnX