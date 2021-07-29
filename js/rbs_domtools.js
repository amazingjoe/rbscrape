function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}  

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function insertInside(el, referenceNode) {
    referenceNode.appendChild(el);
}  

function removeJunk(callback) {
    var oldsearchbar = document.querySelector('header > div > div');
    oldsearchbar.innerHTML = '';

    var oldnavlinks = document.querySelectorAll('header > div > a');
    for (var i=0; i< oldnavlinks.length; i++) {oldnavlinks[i].outerHTML = "";}

    var oldnavicons = document.querySelector('header > div:nth-of-type(3n)');
    oldnavicons.outerHTML = "";
    return callback();
}

function insertTabs(callback) {

    var htmltemplate = `<style>.tabcontent {display: none;} #Tags{display:block;}</style>
    <div class="tabs">
        <ul>
        <li class="tablinks" onclick="openTab(event, 'Products')"><a>Products</a></li>
        <li class="tablinks is-active" onclick="openTab(event, 'Tags')"><a>Tags</a></li>
        <li class="tablinks" onclick="openTab(event, 'Suggestions')"><a>Suggestions</a></li>
        <li class="tablinks" onclick="openTab(event, 'Popular')"><a>Popular</a></li>
        <li class="tablinks" onclick="openTab(event, 'Trending')"><a>Trending</a></li>
        </ul>
    </div>
    <div id="Products" class="tabcontent">
        <h1>Products</h1>
    </div>
    <div id="Tags" class="tabcontent">
        <h1>Tags</h1>
    </div>
    <div id="Suggestions" class="tabcontent">
        <h1>Suggestions</h1>
    </div>
    <div id="Popular" class="tabcontent">
        <h1>Popular</h1>
    </div>
    <div id="Trending" class="tabcontent">
        <h1>Trending</h1>
    </div>`;
 
    var newEl = document.createElement('div');
    newEl.id = "rbscrape_tabs";
    newEl.innerHTML = htmltemplate;
    var ref = document.querySelector('div[class*="headerWrapper"]');
    insertAfter(newEl, ref);
    return callback();

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