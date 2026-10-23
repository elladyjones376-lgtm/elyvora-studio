const config = window.siteConfig;

const demos = [
  {
    title: "School website",
    category: "EDUCATION",
    description: "A welcoming school hub with admissions and a real inquiry form.",
    symbol: "S",
    bannerImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    color: "#e9eef2",
    accent: "#486c80",
    html: `
      <div class="school-head"><div class="brand">HORIZON <small>INTERNATIONAL SCHOOL</small></div><nav><a href="#welcome">Our school</a><a href="#programs">Courses</a><a href="#students">Students</a><a href="#admissions">Admissions</a></nav><button class="nav-apply" data-scroll="admissions">Apply today</button></div>
      <section class="school-hero" id="welcome"><div><small>LEARN WITH PURPOSE</small><h1>Curious minds.<br><i>Bright futures.</i></h1><p>A caring, ambitious learning community where every student can find their path.</p><button class="primary" data-scroll="admissions">Discover admissions →</button></div><div class="school-art"><span>H</span><b>LEARN · GROW · LEAD</b></div></section>
      <section class="school-info" id="programs"><div><small>OUR APPROACH</small><h2>Room to grow, support to thrive.</h2></div><p>Personal learning, inspiring teachers, and a community that welcomes every family. Explore a few of our pathways.</p></section>
      <div class="programs"><article><b>01</b><h3>Early years</h3><p>A joyful start built on discovery and belonging.</p></article><article><b>02</b><h3>Primary</h3><p>Strong foundations for confident, curious learners.</p></article><article><b>03</b><h3>Secondary</h3><p>Challenge, opportunity, and a future-facing outlook.</p></article></div>
      <section class="school-info" id="students"><div><small>STUDENT INFORMATION</small><h2>A school day with room to grow.</h2><button class="primary" id="student-dashboard-toggle" aria-expanded="false">Open student dashboard</button></div><div><p>Student resources, class notices, and a sample course timetable—all in one welcoming place.</p><div class="student-dashboard" hidden><b>Grade 7 · Today</b><p>08:30 Mathematics · 10:15 Science Lab · 13:00 Creative Arts</p><p>Notice: Library club meets after school today.</p></div></div></section>
      <section class="school-form" id="admissions"><div><small>TAKE THE NEXT STEP</small><h2>Find the right fit.</h2><p>Request a call from our admissions team.</p></div><form id="school-form"><input required placeholder="Parent or guardian name"><input required type="email" placeholder="Email address"><select required><option value="">Interested year group</option><option>Early years</option><option>Primary</option><option>Secondary</option></select><button class="primary">Request information</button><output></output></form></section>`,
    logic: `
      document.querySelectorAll("[data-scroll]").forEach(function(b){b.onclick=function(){document.getElementById(b.dataset.scroll).scrollIntoView({behavior:"smooth"})}});
      document.getElementById("student-dashboard-toggle").onclick=function(){var panel=document.querySelector(".student-dashboard");var open=panel.hidden;panel.hidden=!open;this.setAttribute("aria-expanded",String(open));this.textContent=open?"Close student dashboard":"Open student dashboard"};
      document.getElementById("school-form").onsubmit=function(e){e.preventDefault();this.querySelector("output").textContent="Thank you — your admissions inquiry is ready. Our team will be in touch.";this.reset()};`
  },
  {
    title: "E-commerce website",
    category: "SHOPPING",
    description: "Browse a boutique collection, filter products, and add items to a live cart.",
    symbol: "E",
    bannerImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    color: "#f4eae3",
    accent: "#a45d3c",
    html: `
      <header class="shop-head"><a class="brand" href="#">FORME <small>OBJECTS FOR EVERYDAY</small></a><nav><a href="#shop">Shop</a><a href="#story">Our story</a><button class="cart-open">Bag <span class="cart-count">0</span></button></nav></header>
      <section class="shop-hero"><small>THE EVERYDAY EDIT · NO. 04</small><h1>Make room for<br><i>good things.</i></h1><p>Thoughtful objects to bring a little more intention to your everyday.</p><button class="primary" data-shop-scroll>Explore the collection →</button></section>
      <section id="shop" class="shop-list"><div class="shop-title"><div><small>THE COLLECTION</small><h2>Considered essentials</h2></div><select id="product-filter"><option value="all">All objects</option><option value="home">Home</option><option value="wear">Wear</option></select></div><div class="products">
      <article class="product" data-type="home" data-name="Sunday ceramic cup" data-price="240"><div class="product-art art1">01</div><small>HOME · HAND-FINISHED</small><h3>Sunday ceramic cup</h3><div><b>GHS 240</b><button class="add">Add to bag +</button></div></article>
      <article class="product" data-type="wear" data-name="Everyday canvas tote" data-price="320"><div class="product-art art2">02</div><small>WEAR · RECYCLED COTTON</small><h3>Everyday canvas tote</h3><div><b>GHS 320</b><button class="add">Add to bag +</button></div></article>
      <article class="product" data-type="home" data-name="Soft light table lamp" data-price="780"><div class="product-art art3">03</div><small>HOME · WARM LED</small><h3>Soft light table lamp</h3><div><b>GHS 780</b><button class="add">Add to bag +</button></div></article></div></section>
      <aside class="shop-cart"><button class="cart-close">Close ×</button><h2>Your selection <span class="cart-count">0</span></h2><div class="cart-items">Choose something you love and request an order.</div><p class="cart-total">0 items selected</p><button class="primary request-order">Request an order</button><form class="order-request-form" hidden><h3>Order inquiry</h3><input required placeholder="Full name"><input required type="email" placeholder="Email address"><button class="primary" type="button">Send order inquiry</button><output></output></form></aside>`,
    logic: `
      var count=0,total=0;document.querySelector("[data-shop-scroll]").onclick=function(){document.getElementById("shop").scrollIntoView({behavior:"smooth"})};
      document.getElementById("product-filter").onchange=function(){document.querySelectorAll(".product").forEach(function(p){p.hidden=this.value!=="all"&&p.dataset.type!==this.value}.bind(this))};
      document.querySelectorAll(".add").forEach(function(b){b.onclick=function(){var p=b.closest(".product");count++;document.querySelectorAll(".cart-count").forEach(function(x){x.textContent=count});document.querySelector(".cart-total").textContent=count+" item"+(count===1?"":"s")+" selected";var line=document.createElement("div");line.textContent=p.dataset.name;document.querySelector(".cart-items").appendChild(line);document.querySelector(".shop-cart").classList.add("show")}});document.querySelector(".cart-open").onclick=function(){document.querySelector(".shop-cart").classList.add("show")};document.querySelector(".cart-close").onclick=function(){document.querySelector(".shop-cart").classList.remove("show")};document.querySelector(".request-order").onclick=function(){if(!count){document.querySelector(".cart-total").textContent="Add an item before requesting an order.";return}document.querySelector(".order-request-form").hidden=false};document.querySelector(".order-request-form button").onclick=function(){var form=document.querySelector(".order-request-form");if(!form.reportValidity())return;form.querySelector("output").textContent="Thank you — your order inquiry is ready. Our team will follow up with you.";form.reset()};`
  },
  {
    title: "Hotel website",
    category: "HOSPITALITY",
    description: "Explore rooms and check dates using a working reservation request.",
    symbol: "H",
    bannerImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
    color: "#e8e7dc",
    accent: "#667255",
    html: `
      <header class="hotel-head"><a class="brand" href="#">THE OLIVE HOUSE <small>ACCRA · GHANA</small></a><nav><a href="#rooms">Stay</a><a href="#experience">Experience</a><a href="#book">Find a room</a></nav></header>
      <section class="hotel-hero"><small>A QUIETER KIND OF LUXURY</small><h1>Arrive, exhale.<br><i>Feel at home.</i></h1><p>A considered city retreat with warm hospitality and space to slow down.</p><button class="primary" data-hotel-scroll>Discover your stay →</button></section>
      <section class="hotel-intro" id="experience"><small>THE ART OF STAYING WELL</small><h2>City energy, tucked away.</h2><p>Gentle details, locally inspired comforts, and the kind of thoughtful service that lets you settle in.</p></section>
      <section class="hotel-rooms" id="rooms"><article><div class="room-art room1">01</div><small>01 / SIGNATURE ROOM</small><h3>The Garden Suite</h3><p>Private terrace · Breakfast for two</p><b>From $185 / night</b></article><article><div class="room-art room2">02</div><small>02 / PRIVATE RESIDENCE</small><h3>The Olive Residence</h3><p>Two bedrooms · A home of your own</p><b>From $290 / night</b></article></section>
      <section class="booking" id="book"><div><small>YOUR STAY STARTS HERE</small><h2>Find your dates.</h2><p>Choose your dates and we’ll prepare a reservation request.</p></div><form id="hotel-form"><label>Check in<input type="date" required id="checkin"></label><label>Check out<input type="date" required id="checkout"></label><label>Guests<select><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select></label><button class="primary">Check availability</button><output></output></form></section>`,
    logic: `
      document.querySelector("[data-hotel-scroll]").onclick=function(){document.getElementById("book").scrollIntoView({behavior:"smooth"})};var today=new Date().toISOString().slice(0,10);document.getElementById("checkin").min=today;document.getElementById("checkin").onchange=function(){document.getElementById("checkout").min=this.value};
      document.getElementById("hotel-form").onsubmit=function(e){e.preventDefault();var a=new Date(document.getElementById("checkin").value),b=new Date(document.getElementById("checkout").value);var out=this.querySelector("output");if(b<=a){out.textContent="Check-out should be after check-in.";return}var nights=Math.ceil((b-a)/86400000);out.textContent="The Garden Suite is available for "+nights+" night(s). Your reservation inquiry is ready; our team will confirm the details.";};`
  },
  {
    title: "TV station website",
    category: "BROADCAST",
    description: "Switch channels, browse the schedule, and tune into the live-show panel.",
    symbol: "TV",
    bannerImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80",
    color: "#e8e5ef",
    accent: "#66527d",
    html: `
      <header class="tv-head"><a class="brand" href="#">NORTHSTAR <small>TELEVISION</small></a><nav><a href="#live">Watch live</a><a href="#schedule">Schedule</a><a href="#shows">Shows</a></nav><span class="on-air"><i></i> ON AIR</span></header>
      <section class="tv-hero" id="live"><div class="screen"><div class="screen-label">NORTHSTAR LIVE</div><div class="screen-mark">N<span>★</span></div><p id="channel-name">Channel 1 · Newsroom Live</p><button id="watch-button" class="play-button">▶ &nbsp; Play live stream</button></div><div class="tv-copy"><small>YOUR STORIES. YOUR WORLD.</small><h1>Closer to<br><i>what matters.</i></h1><p>News, culture, and conversation from across the region.</p><div class="channel-buttons"><button data-channel="1" class="selected">Channel 1</button><button data-channel="2">Channel 2</button><button data-channel="3">Channel 3</button></div></div></section>
      <section id="schedule" class="schedule"><div><small>COMING UP TODAY</small><h2>The schedule</h2></div><div class="schedule-row"><time>09:00</time><span>Morning Desk</span><b>NEWS</b></div><div class="schedule-row"><time>12:30</time><span>Open Conversation</span><b>CULTURE</b></div><div class="schedule-row"><time>18:00</time><span>Evening Brief</span><b>NEWS</b></div></section>
      <section id="shows" class="tv-shows"><small>WATCH MORE</small><h2>Stories worth staying for.</h2><div class="show-cards"><article>THE DAILY BRIEF<small>News · Weekdays</small></article><article>AFTER HOURS<small>Culture · Weekly</small></article><article>FIELD NOTES<small>Documentary · Series</small></article></div></section>`,
    logic: `
      var names={"1":"Newsroom Live","2":"Culture & Co.","3":"Northstar Sports"};document.querySelectorAll("[data-channel]").forEach(function(b){b.onclick=function(){document.querySelectorAll("[data-channel]").forEach(function(x){x.classList.remove("selected")});b.classList.add("selected");document.getElementById("channel-name").textContent="Channel "+b.dataset.channel+" · "+names[b.dataset.channel];document.getElementById("watch-button").textContent="▶  Watch "+names[b.dataset.channel]}});document.getElementById("watch-button").onclick=function(){this.textContent=this.textContent.indexOf("Playing")<0?"❚❚  Playing demo preview":"▶  Play live stream"};`
  },
  {
    title: "Restaurant website",
    category: "DINING",
    description: "Filter the menu, add dishes to your order, or request a table.",
    symbol: "R",
    bannerImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    color: "#f0e8df",
    accent: "#9a593f",
    html: `
      <header class="rest-head"><a class="brand" href="#">EMBER & GRAIN <small>COOKED WITH CARE</small></a><nav><a href="#menu">The menu</a><a href="#story">Our table</a><a href="#reserve">Reservations</a></nav><span class="order-count" aria-live="polite">Order · 0</span></header>
      <section class="rest-hero"><small>SEASONAL · LOCAL · UNHURRIED</small><h1>A little more<br><i>around the table.</i></h1><p>Good food, generous company, and evenings that take their time.</p><button class="primary" data-menu>Explore the menu ↓</button></section>
      <section id="story" class="rest-story"><small>OUR KIND OF PLACE</small><h2>Come as you are.<br>Stay for another plate.</h2><p>Season-led plates with Ghanaian ingredients, made with the kind of care you can taste.</p></section>
      <section class="menu-section" id="menu"><div class="shop-title"><div><small>FROM OUR KITCHEN</small><h2>The menu</h2></div><div class="menu-filters"><button class="active" data-menu-cat="all">All</button><button data-menu-cat="small">Small plates</button><button data-menu-cat="mains">Mains</button></div></div><div class="menu-items"><article data-kind="small" data-dish="Garden tomato salad" data-cost="120"><div><small>SMALL PLATE</small><h3>Garden tomato salad</h3><p>Ripe tomato, basil oil, toasted sourdough</p></div><b>GHS 120 <button class="dish-add">+</button></b></article><article data-kind="mains" data-dish="Charred market fish" data-cost="260"><div><small>FROM THE FIRE</small><h3>Charred market fish</h3><p>Today's catch, greens, smoked pepper butter</p></div><b>GHS 260 <button class="dish-add">+</button></b></article><article data-kind="mains" data-dish="Slow-roast garden pumpkin" data-cost="190"><div><small>FROM THE GARDEN</small><h3>Slow-roast garden pumpkin</h3><p>Herbed grains, lime yoghurt, toasted seeds</p></div><b>GHS 190 <button class="dish-add">+</button></b></article></div></section>
      <section class="reservation" id="reserve"><div><small>WE'LL SAVE YOU A SEAT</small><h2>Make an evening of it.</h2></div><form id="reservation-form"><input required placeholder="Your name"><input required type="email" placeholder="Email"><input required type="date"><select><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select><button class="primary">Request a table</button><output></output></form></section>`,
    logic: `
      document.querySelector("[data-menu]").onclick=function(){document.getElementById("menu").scrollIntoView({behavior:"smooth"})};document.querySelectorAll("[data-menu-cat]").forEach(function(b){b.onclick=function(){document.querySelectorAll("[data-menu-cat]").forEach(function(x){x.classList.remove("active")});b.classList.add("active");document.querySelectorAll(".menu-items article").forEach(function(a){a.hidden=b.dataset.menuCat!=="all"&&a.dataset.kind!==b.dataset.menuCat})}});var n=0;document.querySelectorAll(".dish-add").forEach(function(b){b.onclick=function(){n++;document.querySelector(".order-count").textContent="Selected dishes · "+n}});document.getElementById("reservation-form").onsubmit=function(e){e.preventDefault();this.querySelector("output").textContent="Thank you — your table request has been noted.";this.reset()};`
  },
  {
    title: "Real estate website",
    category: "PROPERTY",
    description: "Filter listings by budget and type, save favourites, and send an inquiry.",
    symbol: "RE",
    bannerImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    color: "#e8ece6",
    accent: "#61745c",
    html: `
      <header class="estate-head"><a class="brand" href="#">MOSS & STONE <small>PROPERTY, WITH PERSPECTIVE</small></a><nav><a href="#listings">Properties</a><a href="#approach">Our approach</a></nav><button data-estate-scroll>Find a home</button></header>
      <section class="estate-hero"><small>GOOD PLACES. GOOD STORIES.</small><h1>Find the place<br><i>that feels like you.</i></h1><p>Thoughtful homes and spaces, chosen with your next chapter in mind.</p><button class="primary" data-estate-scroll>Explore properties →</button></section>
      <section class="listing-section" id="listings"><div class="shop-title"><div><small>THE COLLECTION</small><h2>Places to begin</h2></div><div class="estate-filters"><select id="estate-type"><option value="all">All types</option><option value="house">House</option><option value="apartment">Apartment</option></select><select id="estate-price"><option value="all">Any price</option><option value="under">Under $300k</option><option value="over">$300k+</option></select></div></div><div class="listings">
      <article class="listing" data-type="house" data-price="420"><div class="listing-art listing1"><button class="save">♡</button><span>01</span></div><small>OSU · 4 BED · HOUSE</small><h3>The courtyard house</h3><p>Warm light, leafy garden, a place to stay.</p><b>$420,000</b><button class="inquire" data-home="The courtyard house">Ask about this home →</button><output class="listing-inquiry-status"></output></article>
      <article class="listing" data-type="apartment" data-price="235"><div class="listing-art listing2"><button class="save">♡</button><span>02</span></div><small>CANTONMENTS · 2 BED · APARTMENT</small><h3>Apartment in the trees</h3><p>Quiet mornings above the canopy.</p><b>$235,000</b><button class="inquire" data-home="Apartment in the trees">Ask about this home →</button><output class="listing-inquiry-status"></output></article>
      <article class="listing" data-type="house" data-price="290"><div class="listing-art listing3"><button class="save">♡</button><span>03</span></div><small>LABONE · 3 BED · HOUSE</small><h3>The long verandah</h3><p>Space for friends, work, and slow Sundays.</p><b>$290,000</b><button class="inquire" data-home="The long verandah">Ask about this home →</button><output class="listing-inquiry-status"></output></article></div><p class="saved-count">0 homes saved</p></section>
      <section class="estate-approach" id="approach"><small>A MORE HUMAN MOVE</small><h2>Good guidance makes<br>all the difference.</h2><p>We listen first, advise honestly, and help you find a property that fits your life.</p><button class="primary" id="estate-contact">Ask us a question</button><output class="estate-contact-status"></output></section>`,
    logic: `
      document.querySelectorAll("[data-estate-scroll]").forEach(function(b){b.onclick=function(){document.getElementById("listings").scrollIntoView({behavior:"smooth"})}});function filterHomes(){var t=document.getElementById("estate-type").value,p=document.getElementById("estate-price").value;document.querySelectorAll(".listing").forEach(function(x){x.hidden=(t!=="all"&&x.dataset.type!==t)||(p==="under"&&Number(x.dataset.price)>=300)||(p==="over"&&Number(x.dataset.price)<300)})}document.querySelectorAll("#estate-type,#estate-price").forEach(function(x){x.onchange=filterHomes});var saved=0;document.querySelectorAll(".save").forEach(function(b){b.onclick=function(){b.classList.toggle("saved");b.textContent=b.classList.contains("saved")?"♥":"♡";b.setAttribute("aria-pressed",String(b.classList.contains("saved")));saved+=b.classList.contains("saved")?1:-1;document.querySelector(".saved-count").textContent=saved+" homes saved"}});document.querySelectorAll(".inquire").forEach(function(b){b.onclick=function(){b.nextElementSibling.textContent="Inquiry started for "+b.dataset.home+". Our agent will be in touch.";}});document.getElementById("estate-contact").onclick=function(){document.querySelector(".estate-contact-status").textContent="Thanks for reaching out. Our property team will be in touch."};`
  },
  {
    title: "Facilities management website",
    category: "OPERATIONS",
    description: "Submit a maintenance request and track a sample job ticket.",
    symbol: "FM",
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    color: "#e8ebed",
    accent: "#536d7c",
    html: `
      <header class="facility-head"><a class="brand" href="#">STEADFAST <small>FACILITIES PARTNERS</small></a><nav><a href="#services">Services</a><a href="#standards">Our standards</a><a href="#ticket">Request support</a></nav><span class="service-badge">24 / 7 RESPONSE</span></header>
      <section class="facility-hero"><small>CARE FOR THE PLACES YOU DEPEND ON</small><h1>Well-run spaces<br><i>work better.</i></h1><p>Reliable facilities management for the buildings, teams, and communities that keep life moving.</p><button class="primary" data-ticket>Request a service →</button></section>
      <section class="facility-services" id="services"><small>SUPPORT THAT SHOWS UP</small><h2>One dependable partner.</h2><div><article><b>01</b><h3>Building maintenance</h3><p>Planned and responsive maintenance, managed with care.</p></article><article><b>02</b><h3>Cleaning & hygiene</h3><p>Healthy, welcoming spaces for people to do their best.</p></article><article><b>03</b><h3>Safety & compliance</h3><p>Clear standards, documented checks, no surprises.</p></article></div></section>
      <section class="facility-request" id="ticket"><div><small>WE'RE READY TO HELP</small><h2>Log a service request.</h2><p>Tell our facilities team what needs attention.</p><div class="ticket-tracker"><label for="ticket-id">Track a sample ticket</label><div><input id="ticket-id" placeholder="e.g. FM-1042"><button id="track-ticket">Track</button></div><output id="ticket-status"></output></div></div><form id="facility-form"><input required placeholder="Your name"><input required type="email" placeholder="Work email"><select required><option value="">Request type</option><option>Maintenance</option><option>Cleaning</option><option>Safety inspection</option></select><textarea required placeholder="How can we help?"></textarea><button class="primary">Submit request</button><output></output></form></section>`,
    logic: `
      document.querySelector("[data-ticket]").onclick=function(){document.getElementById("ticket").scrollIntoView({behavior:"smooth"})};document.getElementById("track-ticket").onclick=function(){var v=document.getElementById("ticket-id").value.trim().toUpperCase();document.getElementById("ticket-status").textContent=v==="FM-1042"?"FM-1042 · In progress · Technician assigned":"No demo ticket found. Try FM-1042."};document.getElementById("facility-form").onsubmit=function(e){e.preventDefault();var out=this.querySelector("output");out.textContent="Request received. Your sample ticket is FM-1043.";this.reset()};`
  },
  {
    title: "Corporate website",
    category: "BUSINESS",
    description: "Explore company services, choose a focus area, and send a project brief.",
    symbol: "C",
    bannerImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    color: "#e9e7e2",
    accent: "#5d625c",
    html: `
      <header class="corp-head"><a class="brand" href="#">COMMON GROUND <small>ADVISORY</small></a><nav><a href="#thinking">Our thinking</a><a href="#services">What we do</a><a href="#contact">Contact</a></nav><a class="corp-cta" href="#contact">Start a conversation ↗</a></header>
      <section class="corp-hero"><small>STRATEGY · PEOPLE · PROGRESS</small><h1>Make change<br><i>mean something.</i></h1><p>We help purposeful organizations turn complex challenges into clear, lasting progress.</p><a class="primary" href="#services">How we help →</a><span class="corp-index">INDEPENDENT THINKING<br>FOR A CHANGING WORLD</span></section>
      <section class="corp-thinking" id="thinking"><small>OUR BELIEF</small><h2>Better futures are<br>built together.</h2><p>We bring people, evidence, and ambition into the same room—then help turn good intentions into meaningful action.</p></section>
      <section class="corp-services" id="services"><small>WHERE WE FOCUS</small><h2>Clarity for complex work.</h2><div class="service-tabs"><button class="active" data-service="Strategy">Strategy</button><button data-service="Culture">Culture</button><button data-service="Impact">Impact</button></div><div class="service-detail"><span>01</span><h3 id="service-title">Strategy</h3><p id="service-copy">Find your direction, make the choices that matter, and bring your ambition into focus.</p></div></section>
      <section class="corp-contact" id="contact"><div><small>LET'S BEGIN</small><h2>What's next<br>for your team?</h2></div><form id="corp-form"><input required placeholder="Your name"><input required type="email" placeholder="Work email"><select><option>I'm interested in...</option><option>Strategy</option><option>Culture</option><option>Impact</option></select><button class="primary">Send an inquiry →</button><output></output></form></section>`,
    logic: `
      var copy={Strategy:"Find your direction, make the choices that matter, and bring your ambition into focus.",Culture:"Build the trust, leadership, and shared purpose that help people do their best work.",Impact:"Measure what matters and turn commitments into positive, visible change."};document.querySelectorAll("[data-service]").forEach(function(b){b.onclick=function(){document.querySelectorAll("[data-service]").forEach(function(x){x.classList.remove("active")});b.classList.add("active");document.querySelector(".service-detail span").textContent="0"+(Array.prototype.indexOf.call(document.querySelectorAll("[data-service]"),b)+1);document.getElementById("service-title").textContent=b.dataset.service;document.getElementById("service-copy").textContent=copy[b.dataset.service]}});document.getElementById("corp-form").onsubmit=function(e){e.preventDefault();this.querySelector("output").textContent="Thanks for your note. The team will be in touch.";this.reset()};`
  },
  {
    title: "Creative web project",
    category: "CREATIVE",
    description: "Filter a design studio portfolio and send a tailored project brief.",
    symbol: "✦",
    bannerImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    color: "#eee6d7",
    accent: "#a9874e",
    html: `
      <header class="creative-head"><a class="brand" href="#">STILL / FORM <small>INDEPENDENT CREATIVE STUDIO</small></a><nav><a href="#creative-work">Selected work</a><a href="#creative-about">Approach</a><a href="#creative-contact">Start a project</a></nav><a class="creative-hello" href="#creative-contact">Say hello ↗</a></header>
      <section class="creative-hero"><small>IDENTITY · DIGITAL · DIRECTION</small><h1>Make the good<br><i>impossible to ignore.</i></h1><p>Independent creative partnership for people shaping what comes next.</p><a class="primary" href="#creative-work">Explore selected work ↓</a><span class="creative-orbit">STILL<br>CURIOUS</span></section>
      <section id="creative-about" class="creative-about"><small>SMALL TEAM. OPEN MINDS.</small><h2>Good work starts with<br>the right question.</h2><p>We partner with purpose-led teams to find the signal, tell a clear story, and make a digital presence that feels unmistakably theirs.</p></section>
      <section id="creative-work" class="creative-work"><div class="shop-title"><div><small>A FEW RECENT DIRECTIONS</small><h2>Selected projects</h2></div><div class="creative-filters"><button class="active" data-creative-filter="all">All</button><button data-creative-filter="identity">Identity</button><button data-creative-filter="digital">Digital</button></div></div><div class="creative-cases"><article data-creative-kind="identity"><div class="case-art case-a">A / 01</div><small>IDENTITY · 2025</small><h3>Good Kind — a better daily ritual</h3></article><article data-creative-kind="digital"><div class="case-art case-b">B / 02</div><small>DIGITAL · 2025</small><h3>Open Field — growing with intention</h3></article><article data-creative-kind="identity"><div class="case-art case-c">C / 03</div><small>IDENTITY · 2024</small><h3>New Form — objects for living</h3></article></div></section>
      <section id="creative-contact" class="creative-contact"><div><small>HAVE A GOOD ONE IN MIND?</small><h2>Let's make it matter.</h2><p>Share a little context and we'll shape a thoughtful next step.</p></div><form id="creative-form"><input required placeholder="Your name"><input required type="email" placeholder="Email address"><select required><option value="">Project focus</option><option>Brand identity</option><option>Website & digital</option><option>Creative direction</option></select><textarea required minlength="10" placeholder="A few details about your idea"></textarea><button class="primary">Send a project brief →</button><output></output></form></section>`,
    logic: `
      document.querySelectorAll("[data-creative-filter]").forEach(function(b){b.onclick=function(){document.querySelectorAll("[data-creative-filter]").forEach(function(x){x.classList.remove("active")});b.classList.add("active");document.querySelectorAll(".creative-cases article").forEach(function(c){c.hidden=b.dataset.creativeFilter!=="all"&&c.dataset.creativeKind!==b.dataset.creativeFilter})}});document.getElementById("creative-form").onsubmit=function(e){e.preventDefault();this.querySelector("output").textContent="Your project brief is ready. Thank you for reaching out.";this.reset()};`
  }
];

const demoOrder = [
  "Hotel website",
  "School website",
  "E-commerce website",
  "TV station website",
  "Restaurant website",
  "Real estate website",
  "Facilities management website",
  "Corporate website",
  "Creative web project"
];
demos.sort((first, second) => demoOrder.indexOf(first.title) - demoOrder.indexOf(second.title));

const projectFeatureMap = {
  "School website": ["Admissions flow", "Course showcase", "Responsive UI"],
  "E-commerce website": ["Product filters", "Live cart", "Checkout flow"],
  "Hotel website": ["Booking form", "Availability check", "Luxury layout"],
  "TV station website": ["Live programing", "Schedule view", "Video-first browsing"],
  "Restaurant website": ["Reservation system", "Menu discovery", "Event highlights"],
  "Real estate website": ["Property filters", "Listing cards", "Visit scheduling"],
  "Facilities management website": ["Service requests", "Facility listing", "Operations dashboard"],
  "Corporate website": ["Company story", "Leadership profile", "Lead generation"],
  "Creative web project": ["Brand storytelling", "Case studies", "Creative direction"]
};

const demoContactMap = {
  "School website": { email: "admissions@horizon-school.example.org", updates: "Admissions updates", message: "Get term dates, open-day invitations, and admissions news." },
  "E-commerce website": { email: "hello@forme-shop.example.org", updates: "The Forme edit", message: "Get new arrivals, thoughtful finds, and studio stories." },
  "Hotel website": { email: "stay@horizon-house.example.org", updates: "Stay offers", message: "Receive seasonal escapes and occasional room offers." },
  "TV station website": { email: "studio@northstar-tv.example.org", updates: "Weekly schedule", message: "Get the week's highlights and upcoming programmes." },
  "Restaurant website": { email: "hello@juniper-table.example.org", updates: "Menu & events", message: "Hear about seasonal menus, events, and reservations." },
  "Real estate website": { email: "homes@oakandstone.example.org", updates: "Property alerts", message: "Get new listing highlights and neighborhood notes." },
  "Facilities management website": { email: "service@everwell-facilities.example.org", updates: "Facilities insights", message: "Receive service updates and practical facilities guidance." },
  "Corporate website": { email: "hello@northstar-group.example.org", updates: "Company updates", message: "Get occasional company news and industry perspectives." },
  "Creative web project": { email: "hello@stillform-studio.example.org", updates: "Studio notes", message: "Get selected work, creative ideas, and studio news." }
};

demos.forEach((demo) => {
  demo.features = demo.features || projectFeatureMap[demo.title] || ["Responsive UI", "Interactive flow", "Premium design"];
  demo.contact = demoContactMap[demo.title];
});

const projectGrid = document.getElementById("project-grid");
const modal = document.getElementById("demo-modal");
const demoFrame = document.getElementById("demo-frame");
const modalTitle = document.getElementById("demo-title");
let previousFocus = null;

projectGrid.innerHTML = demos.map((demo, index) => {
  const featureList = demo.features.slice(0, 3).map((feature) => `<span class="project-feature-tag">${feature}</span>`).join("");

  return `
    <article class="project-card" style="--tile-bg:${demo.color};--tile-accent:${demo.accent}">
      <div class="project-topline"><span>${demo.category}</span><span>${String(index + 1).padStart(2, "0")} / ${String(demos.length).padStart(2, "0")}</span></div>
      <div class="project-banner" aria-hidden="true">
        <span class="project-banner-pill">${demo.category}</span>
        <span class="project-banner-mark">${demo.symbol}</span>
      </div>
      <div class="project-card-body">
        <div>
          <h3>${demo.title}</h3>
          <p>${demo.description}</p>
        </div>
        <div class="project-feature-list" aria-label="Project features">${featureList}</div>
      </div>
      <button class="demo-trigger" type="button" data-demo="${index}" aria-label="View my project: ${demo.title}">View My Project <span aria-hidden="true">↗</span></button>
    </article>
  `;
}).join("");

const demoPremiumStyles = `
  [hidden]{display:none!important}
  body.demo-premium{min-height:100vh;background:#0b0b0a;color:#f1ecdf;font-family:Arial,sans-serif}
  body.demo-premium p{color:#bbb4a8}
  body.demo-premium h2,body.demo-premium h3{color:#f0e9da}
  body.demo-premium small{color:#dfbd73}
  body.demo-premium header,body.demo-premium .school-head{position:relative;background:#10100e;color:#f0eadc;border-bottom:1px solid rgba(209,171,91,.3)}
  body.demo-premium header .brand,body.demo-premium .school-head .brand{color:#f1e8d8}
  body.demo-premium header nav a,body.demo-premium .school-head nav a{color:#e0d7c5}
  body.demo-premium header nav a:hover,body.demo-premium .school-head nav a:hover{color:#f0d48d}
  body.demo-premium header nav button,body.demo-premium .school-head>button{color:#e8cc8b}
  body.demo-premium .primary{background:linear-gradient(120deg,#ddbd76,#a67b38);color:#15120b;font-weight:700;transition:transform .2s,box-shadow .2s}
  body.demo-premium .primary:hover{transform:translateY(-2px);box-shadow:0 6px 25px rgba(211,174,97,.3)}
  body.demo-premium section:not(.school-hero):not(.shop-hero):not(.hotel-hero):not(.tv-hero):not(.rest-hero):not(.estate-hero):not(.facility-hero):not(.corp-hero):not(.creative-hero),
  body.demo-premium .school-info,body.demo-premium .programs,body.demo-premium .hotel-rooms,body.demo-premium .products,body.demo-premium .menu-items,body.demo-premium .schedule,body.demo-premium .tv-shows,body.demo-premium .listings,body.demo-premium .facility-services,body.demo-premium .creative-cases{background:#10100e;color:#eee7da}
  body.demo-premium .programs article,body.demo-premium .show-cards article,body.demo-premium .product,body.demo-premium .listing,body.demo-premium .facility-services article,body.demo-premium .creative-cases article{border:1px solid rgba(203,167,91,.2);background:linear-gradient(145deg,#191814,#11110f)}
  body.demo-premium .school-form,body.demo-premium .booking,body.demo-premium .facility-request,body.demo-premium .corp-contact,body.demo-premium .reservation{background:#15130f}
  body.demo-premium .school-form h2,body.demo-premium .booking h2,body.demo-premium .facility-request h2,body.demo-premium .corp-contact h2,body.demo-premium .reservation h2{color:#f1e8d8}
  body.demo-premium .shop-title h2,body.demo-premium .school-info h2,body.demo-premium .facility-services h2,body.demo-premium .creative-about h2,body.demo-premium .corp-thinking h2{color:#f0e9da}
  body.demo-premium input,body.demo-premium select,body.demo-premium textarea{border-color:rgba(203,167,91,.3);background:#0b0b0a;color:#f1ecdf}
  body.demo-premium input::placeholder,body.demo-premium textarea::placeholder{color:#898174}
  body.demo-premium output{color:#e2c57e}
  body.demo-premium .school-hero,body.demo-premium .shop-hero,body.demo-premium .hotel-hero,body.demo-premium .tv-hero,body.demo-premium .rest-hero,body.demo-premium .estate-hero,body.demo-premium .facility-hero,body.demo-premium .corp-hero,body.demo-premium .creative-hero{
    position:relative;isolation:isolate;overflow:hidden;color:#fff;background-color:#16130d;
    background-image:linear-gradient(90deg,rgba(8,8,7,.88),rgba(10,9,8,.54) 55%,rgba(10,9,8,.2)),var(--demo-banner);
    background-size:cover;background-position:center 48%;animation:demo-hero-in .7s ease both
  }
  body.demo-premium .school-hero h1,body.demo-premium .tv-copy h1{color:#fff}
  body.demo-premium .school-hero p,body.demo-premium .shop-hero p,body.demo-premium .hotel-hero p,body.demo-premium .tv-copy p,body.demo-premium .rest-hero p,body.demo-premium .estate-hero p,body.demo-premium .facility-hero p,body.demo-premium .corp-hero p,body.demo-premium .creative-hero p{color:#eee6d8}
  body.demo-premium .school-art{background:linear-gradient(145deg,rgba(24,21,15,.74),rgba(10,10,9,.64));color:#e1bf76}
  body.demo-premium .screen{border:1px solid rgba(217,183,109,.4);box-shadow:0 10px 35px rgba(0,0,0,.35)}
  body.demo-premium .room-art,body.demo-premium .product-art,body.demo-premium .listing-art,body.demo-premium .case-art{background:linear-gradient(145deg,#262116,#15130f)!important;color:#dfbd73;border:1px solid rgba(203,167,91,.2)}
  body.demo-premium .art1,body.demo-premium .art2,body.demo-premium .art3,body.demo-premium .room1,body.demo-premium .room2,body.demo-premium .listing1,body.demo-premium .listing2,body.demo-premium .listing3{background:linear-gradient(145deg,#262116,#15130f)}
  body.demo-premium .shop-cart{border-left:1px solid rgba(203,167,91,.4);background:#11100e;color:#f1ecdf}
  body.demo-premium .cart-close,body.demo-premium .add,body.demo-premium .dish-add,body.demo-premium .save,body.demo-premium .inquire{color:#e5c577;border-color:rgba(203,167,91,.4);background:#15130f}
  body.demo-premium .menu-filters button,body.demo-premium .channel-buttons button,body.demo-premium .creative-filters button,body.demo-premium .service-tabs button{border-color:rgba(203,167,91,.38);color:#e7ddc8}
  body.demo-premium .menu-filters button.active,body.demo-premium .channel-buttons .selected,body.demo-premium .creative-filters button.active,body.demo-premium .service-tabs .active{background:#b68b48;color:#17130c}
  body.demo-premium .service-detail,body.demo-premium .ticket-tracker,body.demo-premium .student-dashboard{border:1px solid rgba(203,167,91,.25);background:#191713;color:#eee7da}
  body.demo-premium .ticket-tracker label{color:#e8d8b7}
  body.demo-premium .saved-count{color:#e1c47e}
  body.demo-premium .demo-nav-toggle{display:none;border:1px solid rgba(203,167,91,.42);background:transparent;color:#e8cc8b;padding:7px 10px;font-size:10px}
  body.demo-premium .demo-nav-toggle{display:block}
  body.demo-premium .demo-menu-open nav{position:absolute;z-index:12;top:100%;right:0;left:0;display:flex!important;flex-direction:column;align-items:stretch;gap:12px;padding:16px;background:#11100e;border:1px solid rgba(203,167,91,.35)}
  body.demo-premium .demo-menu-open nav a{padding:6px}
  body.demo-premium .demo-menu-open nav button{align-self:flex-start}
  body.demo-premium .programs article,body.demo-premium .product,body.demo-premium .listing,body.demo-premium .creative-cases article{transition:transform .25s,border-color .25s,box-shadow .25s}
  body.demo-premium .programs article:hover,body.demo-premium .product:hover,body.demo-premium .listing:hover,body.demo-premium .creative-cases article:hover{transform:translateY(-4px);border-color:rgba(229,197,119,.55);box-shadow:0 12px 34px rgba(0,0,0,.3)}
  body.demo-premium section{animation:demo-section-in .45s ease both}
  @keyframes demo-hero-in{from{opacity:.35;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  @keyframes demo-section-in{from{opacity:.7}to{opacity:1}}
  @media(max-width:650px){
    body.demo-premium .demo-nav-toggle{display:block}
    body.demo-premium header nav,body.demo-premium .school-head nav{display:none}
    body.demo-premium .demo-menu-open nav{display:flex!important}
    body.demo-premium .shop-head nav{position:absolute}
  }
  @media(prefers-reduced-motion:reduce){body.demo-premium *,body.demo-premium *::before,body.demo-premium *::after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
`;

const demoContactStyles = `
  .demo-contact{display:grid;grid-template-columns:1fr 1fr;gap:35px;padding:38px 7%;border-top:1px solid rgba(203,167,91,.2);background:radial-gradient(ellipse at 10% 100%,rgba(182,139,72,.12),transparent 45%),#10100e;color:#f1ecdf}
  .demo-contact h2{margin:8px 0;color:#f0e9da;font:400 27px/1.2 Georgia,serif}
  .demo-contact p{max-width:360px;color:#aaa49a}
  .demo-contact small{color:#dfbd73}
  .demo-contact a{color:#e4c984}
  .demo-contact a:hover{text-decoration:underline}
  .demo-newsletter{align-self:center}
  .demo-newsletter label{display:block;margin-bottom:7px;color:#e8d8b7;font-size:10px}
  .demo-newsletter-row{display:flex;gap:8px}
  .demo-newsletter input{min-width:0;flex:1}
  .demo-newsletter button{border:0;background:linear-gradient(120deg,#ddbd76,#a67b38);color:#15120b;padding:0 14px;font-size:10px;font-weight:700}
  .demo-newsletter output{min-height:18px;margin-top:8px;color:#e2c57e}
  .demo-contact-note{font-size:9px!important}
  @media(max-width:650px){.demo-contact{grid-template-columns:1fr;gap:16px;padding:30px 7%}.demo-newsletter-row{flex-direction:column}.demo-newsletter button{min-height:40px}}
`;

function makeDemoContactMarkup(demo) {
  const contact = demo.contact;
  return `
    <footer class="demo-contact">
      <div>
        <small>KEEP IN TOUCH · ${contact.updates.toUpperCase()}</small>
        <h2>Good things, occasionally.</h2>
        <p>${contact.message}</p>
        <p class="demo-contact-note">Sample contact: <a href="mailto:${contact.email}">${contact.email}</a><br>Fictional address for this interactive demo.</p>
      </div>
      <form class="demo-newsletter">
        <label for="demo-newsletter-email">${contact.updates}</label>
        <div class="demo-newsletter-row">
          <input id="demo-newsletter-email" type="email" name="email" placeholder="you@example.com" autocomplete="email" required>
          <button type="submit">Sign me up</button>
        </div>
        <output role="status" aria-live="polite"></output>
      </form>
    </footer>`;
}

function makeDemoEnhancements() {
  return `
    document.querySelectorAll("header nav, .school-head nav").forEach(function(nav){
      var toggle=document.createElement("button");toggle.type="button";toggle.className="demo-nav-toggle";toggle.setAttribute("aria-expanded","false");toggle.textContent="Menu";
      nav.parentElement.insertBefore(toggle,nav);
      toggle.onclick=function(){var open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.textContent=open?"Menu":"Close";nav.parentElement.classList.toggle("demo-menu-open",!open)};
      nav.addEventListener("click",function(e){if(e.target.closest("a")){nav.parentElement.classList.remove("demo-menu-open");toggle.setAttribute("aria-expanded","false");toggle.textContent="Menu"}});
    });
    var newsletter=document.querySelector(".demo-newsletter");
    newsletter.onsubmit=function(e){e.preventDefault();newsletter.querySelector("output").textContent="Thanks for subscribing! This demo does not store or send your email.";newsletter.reset()};
    document.querySelectorAll("section").forEach(function(section,index){section.style.animationDelay=Math.min(index*.045,.25)+"s"});
  `;
}

function makeDemoDocument(demo) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fbfaf7;color:#282720;font:14px/1.6 Arial,sans-serif}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit}button{cursor:pointer}h1,h2,h3{font-family:Georgia,serif;font-weight:400;line-height:1.12}h1{font-size:clamp(40px,6vw,69px);letter-spacing:-2px;margin:12px 0}h1 i,h2 i{color:#a9874e;font-weight:400}h2{font-size:34px;margin:10px 0}h3{font-size:20px;margin:8px 0}p{color:#77756d;font-size:12px}small{font-size:8px;letter-spacing:1.5px;color:#987841;font-weight:bold}.brand{font-family:Georgia,serif;font-size:15px;letter-spacing:2px}.brand small{display:block;font:700 7px Arial;letter-spacing:2px;color:#a9874e}.primary{display:inline-block;border:0;background:#292820;color:#fff;padding:12px 17px;font-size:10px;text-decoration:none}.primary:hover{background:#987841}header{min-height:65px;padding:12px 5%;display:flex;align-items:center;justify-content:space-between;background:#fff;border-bottom:1px solid #e9e5dc}header nav{display:flex;gap:22px;font-size:10px}section{padding:45px 7%}form{display:grid;gap:10px}input,select,textarea{min-height:39px;padding:9px;border:1px solid #dedbd3;background:#fff;font-size:11px}textarea{min-height:72px}output{display:block;color:#58704e;font-size:11px}.school-head nav,.hotel-head nav,.rest-head nav,.estate-head nav,.facility-head nav,.corp-head nav,.shop-head nav,.tv-head nav{align-items:center}.school-hero,.shop-hero,.hotel-hero,.rest-hero,.estate-hero,.facility-hero,.corp-hero{min-height:310px;padding:55px 8%;background:#e9eef0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.school-hero{display:grid;grid-template-columns:1fr .7fr;gap:25px;background:#e7edf0}.school-hero h1{color:#334a58}.school-art{height:190px;display:grid;place-items:center;background:linear-gradient(140deg,#cbd9df,#e4e9e8);color:#49697a}.school-art span{font:100px Georgia}.school-art b{font-size:8px;letter-spacing:3px}.school-info{display:flex;align-items:center;justify-content:space-between;gap:20px}.school-info p{max-width:300px}.programs,.products,.hotel-rooms,.show-cards,.listings{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.programs article,.show-cards article{padding:18px;background:#f0f1ed}.programs article>b{color:#9b8155}.school-form,.booking,.facility-request,.corp-contact,.reservation{display:grid;grid-template-columns:1fr 1fr;gap:35px;background:#f0eee8}.school-form form,.booking form,.facility-request form,.corp-contact form,.reservation form{align-self:center}.booking label{display:grid;gap:5px;font-size:10px}.shop-head{position:sticky;top:0}.shop-head nav button,.order-count,.estate-head button,.corp-cta,.nav-apply,.on-air{border:0;background:transparent;font-size:10px}.shop-hero{min-height:310px;background:#f1e9df}.shop-list,.menu-section,.listing-section{background:#fff}.shop-title{display:flex;justify-content:space-between;align-items:end;margin-bottom:23px}.shop-title select,.estate-filters select{min-width:110px}.products{grid-template-columns:repeat(3,1fr)}.product{padding:12px;border:1px solid #eeeae3}.product-art,.room-art,.listing-art{height:120px;display:grid;place-items:center;font:36px Georgia;color:#8c704b}.art1{background:#e9e0d2}.art2{background:#e6e8df}.art3{background:#e2e5e6}.product>small,.listing>small{display:block;margin-top:11px;font-size:7px}.product>div:last-child{display:flex;justify-content:space-between;align-items:center}.product b,.listing>b{font-size:11px}.add{border:1px solid #d7c7a6;background:transparent;padding:7px;font-size:9px}.shop-cart{position:fixed;z-index:5;right:0;top:0;bottom:0;width:min(340px,90vw);padding:25px;background:white;box-shadow:-10px 0 35px #0002;transform:translateX(105%);transition:transform .25s}.shop-cart.show{transform:translateX(0)}.cart-close{float:right;border:0;background:none}.cart-items{min-height:80px;color:#777;font-size:12px}.cart-items div{padding:8px 0;border-bottom:1px solid #eee}.hotel-hero{background:#e8e9df}.hotel-intro,.rest-story,.estate-approach{text-align:center}.hotel-intro p,.rest-story p,.estate-approach p{max-width:430px;margin:12px auto}.hotel-rooms{grid-template-columns:repeat(2,1fr)}.room1{background:#e5e4d6}.room2{background:#e8ded0}.hotel-rooms article>small{display:block;margin-top:10px}.booking{background:#efeee8}.tv-head{background:#21212a;color:#fff}.tv-head .brand small{color:#d0ae72}.tv-head nav a{color:#dedce0}.on-air i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#d55854}.tv-hero{display:grid;grid-template-columns:1fr 1fr;gap:35px;align-items:center;background:#e9e7ee}.screen{min-height:210px;padding:20px;background:linear-gradient(135deg,#292738,#474052);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.screen-label{font-size:8px;letter-spacing:2px}.screen-mark{font:70px Georgia}.screen-mark span{color:#d0ae72;font-size:25px}.screen p{color:#ddd}.play-button{border:1px solid #ddd8;background:transparent;color:white;padding:8px 12px;font-size:9px}.tv-copy h1{color:#34313d}.channel-buttons,.menu-filters,.estate-filters{display:flex;gap:6px;flex-wrap:wrap}.channel-buttons button,.menu-filters button{padding:7px 9px;border:1px solid #ddd8cf;background:transparent;font-size:9px}.channel-buttons .selected,.menu-filters .active{background:#37333f;color:white}.schedule-row{display:grid;grid-template-columns:80px 1fr auto;gap:14px;align-items:center;padding:13px 0;border-bottom:1px solid #e7e3dc;font-size:11px}.schedule-row time,.schedule-row b{color:#93764a;font-size:9px}.tv-shows{background:#f0eef2}.show-cards article{min-height:90px;background:#e3e0e8;font:12px Georgia;display:flex;flex-direction:column;justify-content:space-between}.show-cards article small{font:700 7px Arial}.rest-hero{background:#f0e5dd}.rest-story{background:#fff}.menu-section{padding-top:20px}.menu-items article{display:flex;justify-content:space-between;align-items:center;padding:13px 0;border-bottom:1px solid #e8e5df}.menu-items article h3{font-size:17px}.menu-items article p{margin:4px 0}.dish-add{margin-left:9px;width:25px;height:25px;border:1px solid #cfbea0;border-radius:50%;background:white}.reservation{background:#f2ede7}.estate-hero{background:#e6eae3}.listing-section{padding-top:24px}.listings{grid-template-columns:repeat(3,1fr)}.listing{padding:10px;border:1px solid #eeece5}.listing-art{height:115px;position:relative}.listing1{background:#e1e4d7}.listing2{background:#e2e4e5}.listing3{background:#e9e1d5}.listing-art>span{font:38px Georgia;opacity:.65}.save{position:absolute;top:7px;right:7px;border:0;background:white;border-radius:50%;width:28px;height:28px}.save.saved{color:#b3534c}.listing h3{font-size:17px}.listing>p{margin:4px 0}.listing> b{display:block}.inquire{margin-top:10px;border:0;border-top:1px solid #eee;background:none;padding:8px 0;font-size:9px;text-align:left}.saved-count{font-size:10px}.estate-approach{background:#eff0eb}.facility-hero{background:#e7ecee}.facility-services>div{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px}.facility-services article{padding:15px;background:#f0f1ef}.facility-services article>b{color:#587184}.facility-request{background:#edf0f1}.ticket-tracker{margin-top:22px;padding:14px;background:#fff}.ticket-tracker label{font-size:9px;font-weight:bold}.ticket-tracker>div{display:flex;margin-top:8px}.ticket-tracker input{flex:1}.ticket-tracker button{border:0;background:#343b3e;color:white;padding:0 12px;font-size:10px}.service-badge{font-size:8px;letter-spacing:1px;color:#587184}.corp-head{background:#262923;color:#fff}.corp-head .brand small{color:#d0ae72}.corp-head nav a{color:#e3e1da}.corp-cta{color:#dfc998}.corp-hero{position:relative;background:#e9e8df}.corp-index{position:absolute;right:7%;bottom:32px;color:#8a826f;font-size:7px;letter-spacing:1.2px}.corp-thinking{background:#fff;text-align:center}.corp-thinking p{max-width:410px;margin:15px auto}.corp-services{background:#f1f0ea}.service-tabs{display:flex;gap:8px;margin:20px 0 0}.service-tabs button{padding:9px 14px;border:1px solid #d9d4c9;background:transparent;font-size:10px}.service-tabs .active{background:#292820;color:white}.service-detail{padding:20px;background:#fff}.service-detail span{color:#a38451;font-size:9px}.service-detail p{max-width:440px}.corp-contact{background:#eae9e2}
    .creative-head{background:#24231f;color:#fff}.creative-head .brand small{color:#d0ae72}.creative-head nav a{color:#e3e1da}.creative-hello{color:#dfc998;font-size:10px}.creative-hero{position:relative;min-height:340px;background:#e8e4d9}.creative-orbit{position:absolute;right:9%;top:22%;width:85px;height:85px;display:grid;place-items:center;border:1px solid #ad8a52;border-radius:50%;color:#887044;font-size:8px;letter-spacing:2px;text-align:center;transform:rotate(8deg)}.creative-about{text-align:center;background:#fff}.creative-about p{max-width:440px;margin:14px auto}.creative-work{background:#f1efe9}.creative-filters{display:flex;gap:6px}.creative-filters button{padding:7px 10px;border:1px solid #ded8ce;background:transparent;font-size:9px}.creative-filters button.active{background:#282720;color:#fff}.creative-cases{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.creative-cases article{padding:10px;background:#fff}.case-art{height:130px;display:grid;place-items:center;font:28px Georgia}.case-a{background:#e6ded0;color:#91794f}.case-b{background:#dce4dc;color:#5c765b}.case-c{background:#e4dfe7;color:#776180}.creative-cases article>small{display:block;margin-top:10px;font-size:7px}.creative-cases article h3{font-size:16px}.creative-contact{display:grid;grid-template-columns:1fr 1fr;gap:32px;background:#efeee8}
    @media(max-width:650px){header nav{gap:10px;font-size:8px}.school-head nav,.hotel-head nav,.rest-head nav,.estate-head nav,.facility-head nav,.corp-head nav,.creative-head nav{display:none}.school-hero,.tv-hero,.school-form,.booking,.facility-request,.corp-contact,.reservation,.creative-contact{grid-template-columns:1fr}.school-art{height:130px}.programs,.products,.listings{grid-template-columns:1fr 1fr}.hotel-rooms{grid-template-columns:1fr}.shop-title{align-items:flex-start;gap:10px;flex-direction:column}.corp-index,.creative-orbit{display:none}.facility-services>div{grid-template-columns:1fr}.creative-cases{grid-template-columns:1fr}.project-card h3{font-size:17px}}
  </style><style>${demoPremiumStyles}</style><style>${demoContactStyles}</style></head><body class="demo-premium" style="--demo-banner:url('${demo.bannerImage}')">${demo.html}${makeDemoContactMarkup(demo)}<script>${demo.logic}\n${makeDemoEnhancements()}<\/script></body></html>`;
}

function openDemo(index) {
  const demo = demos[index];
  if (!demo) return;
  previousFocus = document.activeElement;
  modalTitle.textContent = demo.title;
  demoFrame.srcdoc = makeDemoDocument(demo);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeDemo() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  demoFrame.srcdoc = "";
  if (previousFocus) previousFocus.focus();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-demo]");
  if (button) openDemo(Number(button.dataset.demo));
});
document.querySelector(".modal-close").addEventListener("click", closeDemo);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeDemo();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeDemo();
});

const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.getElementById("main-menu");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  mainMenu.classList.toggle("open", !expanded);
});
mainMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const certificateLink = document.getElementById("certificate-link");
if (certificateLink) certificateLink.hidden = true;

function setImageWithFallback(selector, source, fallbackSelector, onLoad) {
  const image = document.querySelector(selector);
  const fallback = document.querySelector(fallbackSelector);

  if (!image || !fallback) {
    if (onLoad) onLoad();
    return;
  }

  image.src = source;
  image.addEventListener("load", () => {
    fallback.hidden = true;
    if (onLoad) onLoad();
  });
  image.addEventListener("error", () => {
    image.hidden = true;
    fallback.hidden = false;
  });
}
setImageWithFallback(".profile-image", config.portrait, ".portrait-fallback");
setImageWithFallback(".certificate-image", config.certificate, ".certificate-fallback", () => {
  if (certificateLink) certificateLink.hidden = false;
});
if (certificateLink) certificateLink.href = config.certificate;
document.getElementById("tiktok-link").href = config.tiktok;
document.getElementById("email-link").href = `mailto:${config.email}`;
document.getElementById("contact-email-text").href = `mailto:${config.email}`;
document.getElementById("contact-email-text").textContent = config.email;
document.getElementById("phone-link").href = `tel:${config.phone}`;
document.getElementById("contact-phone-text").href = `tel:${config.phone}`;
document.getElementById("contact-phone-text").textContent = config.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
document.getElementById("whatsapp-link").href = `https://wa.me/${config.whatsappNumber}`;
document.getElementById("contact-whatsapp-text").href = `https://wa.me/${config.whatsappNumber}`;
document.getElementById("contact-tiktok-text").href = config.tiktok;

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const contactFields = {
  name: document.getElementById("contact-name"),
  email: document.getElementById("contact-email-input"),
  project: document.getElementById("contact-project"),
  message: document.getElementById("contact-message")
};

function showFieldError(name, message) {
  const field = contactFields[name];
  const error = document.querySelector(`[data-error-for="${name}"]`);
  field.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

function clearFieldError(name) {
  const field = contactFields[name];
  const error = document.querySelector(`[data-error-for="${name}"]`);
  field.setAttribute("aria-invalid", "false");
  error.textContent = "";
}

Object.entries(contactFields).forEach(([name, field]) => {
  field.addEventListener("input", () => clearFieldError(name));
  field.addEventListener("change", () => clearFieldError(name));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  Object.keys(contactFields).forEach(clearFieldError);
  formStatus.textContent = "";
  const values = new FormData(contactForm);
  const name = String(values.get("name") || "").trim();
  const email = String(values.get("email") || "").trim();
  const project = String(values.get("project") || "").trim();
  const message = String(values.get("message") || "").trim();
  let firstInvalidField = null;

  const markInvalid = (field, error) => {
    showFieldError(field, error);
    firstInvalidField ||= contactFields[field];
  };

  if (name.length < 2) markInvalid("name", "Please enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) markInvalid("email", "Enter a valid email address.");
  if (!project) markInvalid("project", "Choose a project type.");
  if (message.length < 10) markInvalid("message", "Please add at least 10 characters about your project.");

  if (firstInvalidField) {
    formStatus.textContent = "Please check the highlighted fields and try again.";
    firstInvalidField.focus();
    return;
  }

  const subject = encodeURIComponent(`${project} inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${message}`);
  formStatus.textContent = `Opening your email app with your project message. If it does not open, email ${config.email}.`;
  window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const canvas = document.getElementById("gold-particles");
const context = canvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let particleFrame = 0;
let particles = [];
let canvasWidth = 0;
let canvasHeight = 0;

function resizeParticles() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = Math.round(canvasWidth * ratio);
  canvas.height = Math.round(canvasHeight * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const amount = Math.min(36, Math.max(15, Math.round(canvasWidth / 38)));
  particles = Array.from({ length: amount }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius: Math.random() * 1.5 + .35,
    speed: Math.random() * .2 + .08,
    phase: Math.random() * Math.PI * 2,
    alpha: Math.random() * .35 + .12
  }));
}

function animateParticles() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.phase += .01;
    if (particle.y < -3) {
      particle.y = canvasHeight + 3;
      particle.x = Math.random() * canvasWidth;
    }
    const shimmer = .55 + Math.sin(particle.phase) * .3;
    context.beginPath();
    context.fillStyle = `rgba(222, 186, 105, ${particle.alpha * shimmer})`;
    context.shadowColor = "rgba(222, 186, 105, .5)";
    context.shadowBlur = 8;
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fill();
  });
  particleFrame = window.requestAnimationFrame(animateParticles);
}

if (!reducedMotion.matches) {
  resizeParticles();
  animateParticles();
  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(particleFrame);
    resizeParticles();
    animateParticles();
  }, { passive: true });
}
