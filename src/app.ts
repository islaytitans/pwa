if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    //.register('/dist/sw.js', {scope: '/help/'})
    .register('/dist/sw.js')
    .then(function() {
        console.log('Service worker registered!');
    });
}

let hello = 'hii';