const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve([0,4,2,3])
        reject("This is an error")
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log("Success: ", result)
}).catch((err)=>{
    console.log("Error --> "+err)
})