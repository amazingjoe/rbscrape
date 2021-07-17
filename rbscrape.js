(function() {
    /* Glolbal Vars */
    var grid = null;
    var searchterm = document.querySelector('[name="query"]');
    var searchtermbutton = document.querySelector('button[aria-label="Search term"]');
    var selectors = {};
    /* Utility Functions  */
    var urllist = ["https://www.redbubble.com/typeahead/?term=cat&locale=en", "https://www.redbubble.com/typeahead/?term=dog&locale=en"];

    function main() {
        createScript("https://cdn.jsdelivr.net/gh/amazingjoe/rbscrape@main/js/rbs_bootstrap.js", function() {
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
        });
    }
    main();
})()