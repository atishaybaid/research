if(navigator.serviceWorker){
    navigator.serviceWorker.register("serviceWorker.js",{
        scope:"/research/"
    }).then(function (reg){
        console.log("service worker registration success",reg);
    },function(err){
        console.log("service worker registration failed",err);
    })
}