const { StrictMode } = require("react");

const score  = 100;
let acocuntName = "binod"
var acocuntEmail = "binod@gmail.com"
const accountPassword = "password"
let justDeclare;  // value will be undefined


console.log(score);


console.table([score, acocuntName, acocuntEmail, accountPassword, justDeclare]) 
// intresting schema format ma dekhaudo rixa.


// prefer not to use the var 
// cause it will create unusual problem in block and functional scope


