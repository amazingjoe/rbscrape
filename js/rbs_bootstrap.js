    function bootstrap(callback) {
        /* Go GreenBubble */
        document.querySelector('path[data-testid="ds-brandmark"]').setAttribute('fill', '#2E7D32');
        document.querySelector('div[data-product-nav="true"]').style.display = 'none';
        document.querySelector('[class*="PromoMessage__promoMessage"]').style.display = 'none';
        /* Suppress Search Popout */
        document.querySelector('div[class*="styles__completionsList"]').style.display = 'none';

        
            createScript("https://cdn.jsdelivr.net/gh/amazingjoe/rbscrape@main/js/rbs_comtools.js").then(()=> {
            createScript("https://cdn.jsdelivr.net/gh/amazingjoe/rbscrape@main/js/rbs_domtools.js").then(()=> {
                createCSS("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css");
                createScript("https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.umd.js", function() {
                    console.log("GridJS script started...");
                    var newEl = document.createElement('div');
                    newEl.id = "gridjs";
                    var ref = document.querySelector('main');
                    insertBefore(newEl, ref);
                    ref.style.display = "none";
                    createCSS("https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css");
                    grid = new gridjs.Grid({
                        columns: ["Name"],
                        data: []
                    }).render(document.getElementById("gridjs"));
                    return callback();

            });
            });
        });


        createScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js", function() {
            console.log("Lodash script started...");
            console.log("version " + _.VERSION);
        });
    }