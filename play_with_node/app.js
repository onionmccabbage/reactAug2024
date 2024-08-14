// we usually put all imports at the top
import { planet, arrr } from "./util.js" // many tools (e.g. react) dont need the extension
import fnX from "./util.js" // no curly braces if we import the default export 
// file extensions
// .js for any and every javascript!
// .es also javascript
// njs or nes - reminds us humans thats meant for Node
// jsx, tsx and others (for React)

// back tick syntax lets us inject stuff into a string builder
const t = `hello ${planet}`
console.log(t)
console.log( fnX() )
const j_obj = {n:'Floella', a:42, level:'admin', c:[], n:{}}

// if we need to export/import modules, then our package.json must include:
// "type": "module",