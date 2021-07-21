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
        /* Setup Anchor */
        var newEl = document.createElement('div');
        newEl.id = "rbscrape_nav";
        var ref = document.querySelector('main');
        insertBefore(newEl, ref);

        createScript("https://cdn.jsdelivr.net/gh/amazingjoe/rbscrape@0.030/js/rbs_bootstrap.js", function() {
            bootstrap(() => {
                console.log('done....');
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
                        getPageData(() => {
                            console.log('completed fetch button press')
                        });
                    });
                    console.log('Fetch button called!');
                });                
            });
        });
    }
    main();
})()