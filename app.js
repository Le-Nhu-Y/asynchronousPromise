function buyACar (){
    let carPrice = 3;
    let myMoney = 4;
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            if (myMoney>=carPrice){
                resolve("Bạn đã đủ tiền mua xe")
            } else {
                reject("Bạn chưa đủ tiền")
            }
        })
    })

}
buyACar ()
    .then(function (result){
        console.log(result);
    })
    .catch((error) =>{
        console.log(error)
    })
