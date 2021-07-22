function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}  

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertAfter(el, referenceNode);
}  

function removeJunk(callback) {
    var oldsearchbar = document.querySelector('header > div > div');
    oldsearchbar.innerHTML = '';

    var oldnavlinks = document.querySelectorAll('header > div > a');
    for (var i=0; i< oldnavlinks.length; i++) {oldnavlinks[i].outerHTML = "";}

    var oldnavicons = document.querySelector('header > div:nth-of-type(3n)');
    oldnavicons.outerHTML = "";
}

function insertTabs(callback) {

    var htmltemplate = `<div class="tabs">
        <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
        </ul>
    </div>`;
 
    var newEl = document.createElement('div');
    newEl.id = "rbscrape_tabs";
    newEl.innerHTML = htmltemplate;
    var ref = document.querySelector('div[class*="headerWrapper"]');
    insertAfter(newEl, ref);

}

function createButton(callback) {
    var newEl = document.createElement('button');
    newEl.id = "searchbutton";
    newEl.type = "button";
    newEl.classList.add("button");
    newEl.classList.add("is-primary");
    newEl.innerText = "Term Search";
    var ref = document.querySelector('header > div > div');
    insertBefore(newEl, ref);
    return callback();
}

function createButton2(callback) {
    var newEl = document.createElement('button');
    newEl.id = "fetchproducts";
    newEl.type = "button";
    newEl.classList.add("button");
    newEl.classList.add("is-primary");
    newEl.innerText = "Fetch DOM Products";
    var ref = document.querySelector('header > div > div');
    insertBefore(newEl, ref);
    return callback();
}

function createSearchBar(callback) {
    var newEl = document.createElement('input');
    newEl.id = "searchfield";
    newEl.type = "text";
    newEl.classList.add("input");
    newEl.classList.add("is-large");    
    newEl.placeholder = "Enter Search term";
    var ref = document.querySelector('header > div > div');
    insertBefore(newEl, ref);
    return callback();
}