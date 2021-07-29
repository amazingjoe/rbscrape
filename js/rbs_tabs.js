
function openTab(event, tabId) {

    // Get all elements with class tabcontent and hide
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class tablinks and remove is-active class
    tablinks = document.getElementsByClassName('tablinks');
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' is-active','');
    }

    // Show the current tab and add is-active class to that tab
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.className+= " is-active";
}