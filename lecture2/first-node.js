

console.log("Sakshi is working hard for the internship")

const fs = require('fs')
fs.writeFile("Output.txt", "Writing File", (err)=>{
  if(err) console.log("Error occured")
    else console.log('file written successfully');
    
})