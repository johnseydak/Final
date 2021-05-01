var homeContent = `` //paste homepage html inside quotations
var aboutContent = ``//paste aboutpage html inside quotations
var galleryContent = ``//paste page html inside quotations
var blogContent = ``//paste homepage html inside quotations
var contactContent = ``//paste homepage html inside quotations
 
function getPageContent(pageId) {
    $("#app").html(eval(pageId));
    } //this _private function is getting the page Id but export makes it public
    
    export {getPageContent};
