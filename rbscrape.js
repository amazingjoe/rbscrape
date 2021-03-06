(function() {
    /* Glolbal Vars */
    var grid = null;
    
    var searchtermbutton = document.querySelector('button[aria-label="Search term"]');
    var selectors = {};
    var pageObject = {};

    /*  Utility Functions  */
    var urllist = ["https://www.redbubble.com/typeahead/?term=cat&locale=en", "https://www.redbubble.com/typeahead/?term=dog&locale=en"];

    function createScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.async = false;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function createCSS(url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }

    function insertBefore(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
    }    

    function main() {
        createScript("https://cdn.jsdelivr.net/gh/amazingjoe/rbscrape@0.074/js/rbs_bootstrap.js", function() {
            bootstrap(() => {
                console.log('done....');
                removeJunk(() => {    
                    console.log('Removing Junk.');
                });
                createSearchBar(() => {    
                    console.log('Search field created.');
                });
                createButton(() => {
                    searchbutton.addEventListener("click", function() {
                        updateInfo(() => {
                            console.log('completed button press')
                        });
                    });
                    console.log('Create button called!');
                });
                createButton2(() => {
                    fetchproducts.addEventListener("click", function() {
                        getPageTitles(() => {
                            console.log('completed fetch button press')
                        });
                    });
                    console.log('Fetch button called!');
                });                                  
                insertTabs(()=> {
                    console.log('Inserting tabs');
                    createCSS("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css");
                    createScript("https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.umd.js", function() {
                        console.log("GridJS script started...");

                        var newEl = document.createElement('div');
                        newEl.id = "gridjs";
                        var ref = document.querySelector('#Tags');
                        insertInside(newEl, ref);
                        ref.style.display = "none";
                        createCSS("https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css");
                        grid = new gridjs.Grid({
                            columns: ["Name"],
                            data: []
                        }).render(document.getElementById("gridjs"));
                    });
                    
                }).then(res => {inittabs();});
                              
            });
        });
    }
    
    
    main();
})()