async function updateInfo(callback) {
    var griddata = [];
    var searchfield = document.querySelector('#searchfield');

    if (searchfield != null && searchfield != '') {
        console.log('Running fetch for : ' + `https://www.redbubble.com/typeahead/?term=${searchfield.value}&locale=en`);
        fetch(`https://www.redbubble.com/typeahead/?term=${searchfield.value}&locale=en`)
        .then(res => res.json()).then(data => data.completions).then(griddata => {
            console.log(griddata);
            var terms = [];
            document.getElementById("gridjs").innerHTML = "";
            griddata.forEach(element => terms.push([element]));
            console.log(typeof griddata);
            console.log(JSON.stringify(terms));
            grid.updateConfig({
                search: false,
                data: terms
            }).forceRender();
        }).then(finsihed => {
            return callback();
        });
    } else {
        return callback();
    }
}

async function getPageData(callback) {
    var pageObject = {};

    var nodevals = document.querySelectorAll(superobj.get('product_titles'));

    var terms = [];
    document.getElementById("gridjs").innerHTML = "";
    nodevals.forEach(element => terms.push([element.innerHTML]));
    console.log(typeof griddata);
    console.log(JSON.stringify(terms));
    grid.updateConfig({
        columns: ["Key","Term"],
        search: false,
        data: terms
    }).forceRender();

    return callback;
}