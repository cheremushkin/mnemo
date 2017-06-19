Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length !== array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] !== array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


/* AJAX */
function request(data) {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://localhost/mnemo/ПКЗ/index.php' + (data ? ('?' + data) : ''), true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.timeout = 1000;

    request.onload = function () {
        if (request.readyState !== 4) return false;
        if (request.status === 200) {
            // parse the response and transmission to handler
            console.log(request.responseText);
            logic.state(JSON.parse(request.responseText));
        } else alert(request.status);
    };

    request.send(null);
}