var defferedPrompt;

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