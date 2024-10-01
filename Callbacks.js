// *    CallBack {30day}
 
   /*
    function CallingFun(value) {
        console.log(value)
    }
    function Addition(a,b,callback) {
        let sum = a + b ;
        callback('result '+ sum); 
    }           
    Addition(10,20,CallingFun);
    */

    // * CallBack Hell *

    function loading(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(' 1) Loading data...');
                resolve();
            }, 2000);  
        })
    }
    function approving(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(' 2) Approving data...');
                resolve();
            }, 2000);
        })
    }
    function complete(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(' 3) Complete data...');
                // resolve();
                reject('Reject.❌');
            }, 2000);
        })
    }
    function approved(){
        console.log('Approved.✅')
    }

    //use Promise

    loading().then(approving).then(complete).catch(approved)
    .catch((err)=>{
        console.log(err);
    });
    

