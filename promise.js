//promise {30day}

function callPromiseFun(task) {
    return new Promise((resolve , reject)=>{
        if(task) {
            resolve("Task is completed..");
        }
        else {
            reject("task not complted...!");
        }
    })
}

    let onResolve = ((res)=>{
        console.log(res);
    })
    let onReject =((err) => {
        console.log(err);
    })

    callPromiseFun(true).then(onResolve).catch(onReject);