var defferedPrompt;

if(!window.Promise){
    window.Promise = Promise;
}

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log('service worker registered');
    });
}

window.addEventListener('beforeinstallpromot', function(event){
    console.log("Before install promot fired");
    event.preventDefault();
    defferedPrompt = event;
});

var promise = new Promise(function (resolve,reject){
    setTimeout(function() {
        // resolve("Timeout complete");
        reject("Timeour complete");
    }, 2000);
})

fetch('https://httpbin.org/ip').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});

fetch('https://httpbin.org/post', {
    method:"POST",
    headers: { 
        "Content-Type": "application/json",
        "Accept":"application/json"
     },
     body: JSON.stringify({message: "Sample message for the post"})
}).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});

promise.then(function(success) {
    return success;
}).then(function(newMessage){
    console.log("Promise repeat success");
}).catch(function(error){
    console.log("Promise error catch");
})