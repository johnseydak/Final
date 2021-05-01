var homeContent = `<section class="promo-tours">
<div class="promo israel">
    <div class="header"><i>ISRAEL</i></div>
    <div class="price"><i>FROM $1000</i></div>
    <div class="learn-more">Learn More</div>
</div>
<div class="promo usa">
    <div class="header"><i>U.S.A.</i></div>
    <div class="price"><i>FROM $1500</i></div>
    <div class="learn-more">Learn More</div>
</div>
<div class="promo austrailia">
    <div class="header"><i>AUSTRAILIA</i></div>
    <div class="price"><i>FROM $1800</i></div>
    <div class="learn-more">Learn More</div>
</div>
</section>
<section class="booking-form">
<div class="h1">Booking form</div>
<div class="row1">
    <div class="name">name...</div>
    <div class="email">email...</div>
</div><br>
<div class="row2">
    <div class="country">country...</div>
    <div class="hotel">hotel...</div>
</div><br>
<div class ="row3">
    <div class="check-in">Check-In</div>
</div><br>
<div class="row4">
<div class="check-out">Check-Out</div>
</div><br>
<div class="row5">
    <div class="adult">Adult</div>
    <div class="children">Children</div>
    <div class="rooms">Rooms</div>
</div>
<div class="message">message</div>
<div class="submit">SUBMIT</div>
</section>` //paste homepage html inside quotations
var aboutContent = ``//paste aboutpage html inside quotations
var galleryContent = ``//paste page html inside quotations
var blogContent = ``//paste homepage html inside quotations
var contactContent = ``//paste homepage html inside quotations
 
function getPageContent(pageId) {
$("#app").html(eval(pageId));
} //this _private function is getting the page Id but export makes it public


export {getPageContent};
