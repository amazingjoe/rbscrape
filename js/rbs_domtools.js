function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

function createButton(callback) {
    var newEl = document.createElement('button');
    newEl.id = "searchbutton";
    newEl.type = "button";
    newEl.class = "button is-primary";
    newEl.innerText = "Click Here";
    var ref = document.querySelector('main');
    insertBefore(newEl, ref);
    return callback();
}

function createSearchBar(callback) {
    var newEl = document.createElement('input');
    newEl.id = "searchfield";
    newEl.type = "text";
    newEl.placeholder = "Enter Search term";
    var ref = document.querySelector('main');
    insertBefore(newEl, ref);
    return callback();
}