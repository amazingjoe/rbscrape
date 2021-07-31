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

            if (!grid) {
                grid = new gridjs.Grid({
                    columns: ["Name"],
                    data: []
                }).render(document.getElementById("gridjs"));                
            }

            grid.updateConfig({
                columns: ["terms"],
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

async function getPageTitles(callback) {
    var pageObject = {};

    var nodevals = document.querySelectorAll(superobj.get('product_titles'));

    var terms = [];
    document.getElementById("gridjs").innerHTML = "";
    var counter=0;
    nodevals.forEach(element => {        
        terms.push([counter,element.innerHTML]);
        counter++;
    });
    console.log(typeof griddata);
    console.log(JSON.stringify(terms));
    grid.updateConfig({
        columns: ["Listing #","Title"],
        search: false,
        data: terms
    }).forceRender();

    return callback;
}