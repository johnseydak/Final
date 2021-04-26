var homeContent = ``
var aboutContent = ``
var aboutContent = ``
var aboutContent = ``
var aboutContent = ``
 
function getPageContent(pageId) {
    $("#app").html(eval(pageId));
    } //this _private function is getting the page Id but export makes it public

    export {getPageContent};