async function updateInfo(callback) {
    var griddata = [];
    var searchterm = document.querySelector('[name="query"]');
    if (searchterm != null && searchterm != '') {
        console.log('Running fetch for : ' + `https://www.redbubble.com/typeahead/?term=${searchfield.value}
&locale=en`);
        fetch(`https://www.redbubble.com/typeahead/?term=${searchfield.value}
&locale=en`).then(res => res.json()).then(data => data.completions).then(griddata => {
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