(function() {
    /* Glolbal Vars */
    var grid = null;
    var searchterm = document.querySelector('[name="query"]');
    var searchtermbutton = document.querySelector('button[aria-label="Search term"]');
    var selectors = {};
    /* Utility Functions  */
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


    bootstrap(() => {
        console.log('done....');
        createSearchBar(() => {
            searchfield.addEventListener("click", function() {
                updateInfo(() => {
                    console.log('completed button press')
                });
            });
            console.log('Search field called!');
        });
        createButton(() => {
            searchtermbutton.addEventListener("click", function() {
                updateInfo(() => {
                    console.log('completed button press')
                });
            });
            console.log('Create button called!');
        });
    });
})()