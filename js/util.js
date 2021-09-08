// required use of an anonymous callback,
// as .open() will NOT return a value but simply returns undefined in asynchronous mode!

const loadJSON = (callback) => {
    const xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    // 1. replace './data.json' with the local path of your file
    xObj.open('GET', '../products/products.json', true);
    xObj.onreadystatechange = () => {
        if (xObj.readyState === 4 && xObj.status === 200) {
            // 2. call your callback function
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
}

const init = () => {
    loadJSON((response) => {
        // 3. parse JSON string into JSON Object
        console.log('response =', response);
        const json = JSON.parse(response);
        console.log('your local JSON =', JSON.stringify(json, null, 4));
        // 4. render to your page
        const app = document.querySelector('#app');
        app.innerHTML = `<pre>${JSON.stringify(json, null, 4)}</pre>`;
    });
}

//init();