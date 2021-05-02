var homeContent = `<div class="home">
<div class="homequote">
    <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    <div class="name">John Smith</div>
    <div class="position">Corporation CEO, books author.</div>
</div>
<div class="upcomingevents">
    <div class="upcomingheadline">UPCOMING EVENTS</div>
    <div class="upcomingevents1">
        <div class="dateblock1">
            <div class="date1"></div>
                <div class="line1">06</div>
                <div class="line2">JUN</div>
            </div>
        <div class="text1">
            <div class="blurb1"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="blurb2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
        </div>
    </div>
<div class="upcomingevents2">
    <div class="dateblock2">30<br>JUL</div>
    <div class="text1"><div class="blurb1"><p>Sed et persipiatis unde omnis iste natus</p></div>
    <div class="blurb2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div></div>
</div>
<div class="upcomingevents3">
    <div class="dateblock3">30<br>AUG</div>
    <div class="text1"><div class="blurb1"><p>Sed et persipiatis unde omnis iste natus</p></div>
    <div class="blurb2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div></div>
</div>
<div class="upcomingevents4">
    <div class="dateblock4">23<br>NOV</div>
    <div class="text1"><div class="blurb1"><p>Sed et persipiatis unde omnis iste natus</p></div>
    <div class="blurb2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div></div>
</div>
<div class="upcomingevents5">
    <div class="dateblock5">23<br>DEC</div>
    <div class="text1"><div class="blurb1"><p>Sed et persipiatis unde omnis iste natus</p></div>
    <div class="blurb2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div></div>
</div>
</div>` //paste homepage html inside quotations
var aboutContent = ``//paste aboutpage html inside quotations
var galleryContent = ``//paste page html inside quotations
var blogContent = ``//paste homepage html inside quotations
var contactContent = ``//paste homepage html inside quotations
 
function getPageContent(pageId) {
$("#app").html(eval(pageId));
} //this _private function is getting the page Id but export makes it public
    
export {getPageContent};
