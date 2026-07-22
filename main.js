/* ===========================================
   ATEC - Main JavaScript
=========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 900);

});
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});
/* ===========================================
   Scroll Progress Bar
=========================================== */
const progressBar = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
    const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const progress =
        (window.scrollY / windowHeight) * 100;
    progressBar.style.width = progress + "%";
});
/* ===========================================
   Scroll To Top Button
=========================================== */
const scrollBtn = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    if(window.scrollY > 450){

        scrollBtn.classList.add("show");

    }

    else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ===========================================
   Mobile Menu
=========================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    // Prevent background scroll when mobile menu is open
    document.body.classList.toggle('menu-open');

    const icon = menuBtn.querySelector("i");

    if(navLinks.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }

    else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ===========================================
   Close Menu After Click
=========================================== */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        // Ensure body scroll is restored when closing the menu
        document.body.classList.remove('menu-open');

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ===========================================
   Fade Up Animation
=========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(

    ".about-box,.service-card,.surgery-card,.clinic-card,.contact-card,.info-card,.small-card"

).forEach(element=>{

    element.classList.add("fade-up");

    observer.observe(element);

});


/* ===========================================
   Smooth Navigation
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ===========================================
   Active Navigation
=========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
/* ===========================================
   Hero Floating Animation
=========================================== */

const circles = document.querySelectorAll(".circle");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle,index)=>{

        const speed = (index + 1) * 15;

        circle.style.transform =
        `translate(${x * speed}px, ${y * speed}px)`;

    });

});


/* ===========================================
   Card Hover Animation
=========================================== */

const cards = document.querySelectorAll(

".service-card,.surgery-card,.clinic-card,.contact-card,.about-box"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/* ===========================================
   Simple Counter Animation
=========================================== */

document.querySelectorAll(".small-card h2").forEach(item=>{

    const text = item.innerText;

    if(!isNaN(text)){

        let count = 0;

        const target = parseInt(text);

        const timer = setInterval(()=>{

            count++;

            item.innerText = count;

            if(count >= target){

                clearInterval(timer);

            }

        },80);

    }

});


/* ===========================================
   Current Year
=========================================== */

const footerYear = document.querySelector(".footer-bottom p");

if(footerYear){

    footerYear.innerHTML =
    `© ${new Date().getFullYear()} ATEC - Abdelghaffar Taha Eye Clinic. All Rights Reserved.`;

}


/* ===========================================
   Console Message
=========================================== */

console.log("%cATEC","color:#0B4F8C;font-size:30px;font-weight:bold;");
console.log("%cAbdelghaffar Taha Eye Clinic","color:#1FBF9F;font-size:16px;");
console.log("%cDesigned with ❤️","color:#555;");

/* ===========================================
   Language / i18n support
=========================================== */

const translations = {
  ar: {
    title: "ATEC | عيادة عبدالغفار طه للعيون",
    description: "ATEC - عيادة عبدالغفار طه للعيون | رعاية وعمليات عيون متقدمة",
    topbar: ["عيادة شربين","عيادة دمياط"],
    nav: ["الرئيسية","من نحن","الخدمات","العمليات","العيادات","اتصل بنا"],
    appointment: "حجز موعد",
    logoTitle: "ATEC",
    logoSubtitle: "عيادة عبدالغفار طه للعيون",
    badge: "مركز رعاية العيون الموثوق",
    heroTitle: "رؤيتك...<br>أولويتنا.",
    heroH3: "ATEC",
    heroP: "عيادة عبدالغفار طه للعيون تقدم رعاية عيون حديثة، تشخيص متقدم، حلول جراحية محترفة، وعناية متمحورة حول المريض.",
    primaryBtn: "حجز موعد",
    secondaryBtn: "استكشف الخدمات",
    smallCards: [
      {h2: "2", p: "عيادتان"},
      {h2: "عيون", p: "مركز رعاية العيون"},
      {h2: "ATEC", p: "رعاية موثوقة"}
    ],
    about: {
      span: "عن ATEC",
      h2: "تميّز في رعاية العيون",
      p: "تلتزم ATEC بتقديم رعاية عيون شاملة بتقنيات حديثة، تشخيص دقيق، وخطط علاج شخصية لكل مريض."
    },
    aboutBoxes: {
      modern: {h3: "رعاية عيون حديثة", p: "نجمع الخبرة الطبية مع تقنيات تشخيص متقدمة لضمان أعلى جودة رعاية."},
      grid: ["فريق ذو خبرة","معدات حديثة","المريض أولاً","علاج موثوق"]
    },
    infoCards: {
      mission: {h3: "مهمتنا", p: "تقديم رعاية عيون استثنائية باستخدام تقنيات حديثة وخدمة رحيمة."},
      vision: {h3: "رؤيتنا", p: "أن نكون من أبرز مراكز رعاية العيون بتجارب مرضى ممتازة وامتياز طبي دائم."},
      why: {h3: "لماذا ATEC؟", items:["فحص عيون متقدم","تقنيات جراحية حديثة","فريق طبي ودود","خطط علاج مخصصة"]}
    },
    services: {
      span: "خدماتنا",
      h2: "خدمات شاملة لرعاية العيون",
      p: "نقدّم مجموعة واسعة من خدمات طب العيون لحماية وتحسين واستعادة رؤيتك.",
      cards: [
        {h3: "فحص شامل للعين", p: "فحوص دقيقة باستخدام أجهزة تشخيص حديثة لجميع الأعمار."},
        {h3: "تقييم الرؤية", p: "اختبارات رؤية احترافية وتقييم وصفة النظارات والعدسات."},
        {h3: "عيون الأطفال", p: "رعاية متخصصة للأطفال والرضع."},
        {h3: "علاج جفاف العين", p: "تشخيص وخطط علاج لمتلازمة جفاف العين بتقنيات حديثة."},
        {h3: "إجراءات الليزر", p: "تقنيات ليزر متقدمة لحالات مختلفة وتصحيح الرؤية."},
        {h3: "رعاية مرضى السكري", p: "فحص شبكية دوري ومتابعة لحفظ الرؤية لدى مرضى السكري."}
      ]
    },
    surgeries: {
      span: "المركز الجراحي",
      h2: "جراحات عيون متقدمة",
      p: "نقدّم جراحات عيون متقدمة بأحدث التقنيات لتحقيق أفضل نتائج.",
      cards: [
        {h3: "جراحة المياه البيضاء", p: "إزالة المياه البيضاء وزراعة عدسات متقدمة."},
        {h3: "تصحيح البصر بالليزر", p: "إجراءات ليزر متطورة لتقليل الاعتماد على النظارات."},
        {h3: "إجراءات الشبكية", p: "تشخيص وعلاج أمراض الشبكية بتقنيات جراحية حديثة."},
        {h3: "جراحة الجلوكوما", p: "إدارة جراحي فعّال لحماية العصب البصري."},
        {h3: "إجراءات القرنية", p: "علاجات قرنية حديثة لتحسين جودة الرؤية."},
        {h3: "جراحة الجفون", p: "عمليات وظيفية وتجميلية بدقة واهتمام."}
      ],
      learnMore: "المزيد"
    },
    clinics: {
      span: "عياداتنا",
      h2: "زر ATEC",
      p: "نخدم مرضانا عبر عيادتين حديثتين.",
      cards: [
        {h3: "عيادة شربين", p: "عيادة عيون حديثة مجهزة للفحوص والمتابعات.", items:["سيُضاف العنوان لاحقاً.","ساعات العمل ستُضاف لاحقاً.","سيُضاف رقم الهاتف لاحقاً."], buttons:["خرائط جوجل","حجز زيارة"]},
        {h3: "عيادة دمياط", p: "نقدّم رعاية عالية الجودة بمعدات حديثة.", items:["سيُضاف العنوان لاحقاً.","ساعات العمل ستُضاف لاحقاً.","سيُضاف رقم الهاتف لاحقاً."], buttons:["خرائط جوجل","حجز زيارة"]}
      ]
    },
    contact: {
      span: "اتصل بنا",
      h2: "نحن هنا للمساعدة",
      p: "سواء لحجز موعد أو استشارة أو استفسار، فريقنا جاهز لخدمتك.",
      cards: [
        {h3: "الهاتف", p: "رقم الهاتف الخاص بك", a: "اتصل الآن"},
        {h3: "واتساب", p: "تواصل سريع", a: "أرسل رسالة"},
        {h3: "فيسبوك", p: "تابع آخر أخبارنا", a: "زيارة الصفحة"},
        {h3: "البريد الإلكتروني", p: "عنوان بريدك الإلكتروني", a: "أرسل بريدًا"}
      ]
    },
    footer: {
      logoP: "عيادة عبدالغفار طه للعيون",
      links: ["الرئيسية","من نحن","الخدمات","العمليات","العيادات","اتصل بنا"],
      copyright: (year)=> `© ${year} ATEC - عيادة عبدالغفار طه للعيون. جميع الحقوق محفوظة.`
    }
  },
  en: {
    title: "ATEC | Abdelghaffar Taha Eye Clinic",
    description: "ATEC - Abdelghaffar Taha Eye Clinic | Professional Eye Care & Eye Surgery Center",
    topbar: ["Sherebeen Clinic","Damietta Clinic"],
    nav: ["Home","About","Services","Surgeries","Clinics","Contact"],
    appointment: "Book Appointment",
    logoTitle: "ATEC",
    logoSubtitle: "Abdelghaffar Taha Eye Clinic",
    badge: "Trusted Eye Care Center",
    heroTitle: "Your Vision...<br>Our Priority.",
    heroH3: "ATEC",
    heroP: "Abdelghaffar Taha Eye Clinic provides modern eye care, advanced diagnosis, professional surgical solutions, and compassionate patient-centered treatment.",
    primaryBtn: "Book Appointment",
    secondaryBtn: "Explore Services",
    smallCards: [
      {h2: "2", p: "Clinics"},
      {h2: "Eye", p: "Care Center"},
      {h2: "ATEC", p: "Trusted Care"}
    ],
    about: {
      span: "ABOUT ATEC",
      h2: "Excellence in Eye Care",
      p: "ATEC is dedicated to providing comprehensive eye care with advanced technology, accurate diagnosis, and personalized treatment plans for every patient."
    },
    aboutBoxes: {
      modern: {h3: "Modern Eye Care", p: "We combine medical expertise with advanced diagnostic technologies to ensure the highest quality of care."},
      grid: ["Experienced Care","Modern Equipment","Patient First","Trusted Treatment"]
    },
    infoCards: {
      mission: {h3: "Our Mission", p: "Deliver exceptional eye care using modern techniques, innovative treatments, and compassionate service."},
      vision: {h3: "Our Vision", p: "To become one of the leading eye care centers by providing outstanding patient experiences and continuous medical excellence."},
      why: {h3: "Why Choose ATEC?", items:["Advanced Eye Examination","Modern Surgical Techniques","Friendly Medical Team","Personalized Treatment Plans"]}
    },
    services: {
      span: "OUR SERVICES",
      h2: "Comprehensive Eye Care Services",
      p: "We provide a wide range of ophthalmology services designed to protect, improve, and restore your vision.",
      cards: [
        {h3: "Comprehensive Eye Examination", p: "Accurate eye examinations using modern diagnostic equipment for all age groups."},
        {h3: "Vision Assessment", p: "Professional vision testing and prescription evaluation for glasses and contact lenses."},
        {h3: "Pediatric Ophthalmology", p: "Specialized eye care services designed specifically for infants and children."},
        {h3: "Dry Eye Treatment", p: "Diagnosis and treatment plans for dry eye syndrome using modern therapeutic techniques."},
        {h3: "Laser Procedures", p: "Advanced laser technologies for various ophthalmic conditions and vision correction."},
        {h3: "Diabetic Eye Care", p: "Regular retinal screening and follow-up for diabetic patients to preserve healthy vision."}
      ]
    },
    surgeries: {
      span: "SURGICAL CENTER",
      h2: "Advanced Eye Surgery",
      p: "ATEC provides advanced ophthalmic surgeries using modern techniques to achieve the best possible visual outcomes.",
      cards: [
        {h3: "Cataract Surgery", p: "Modern cataract removal with premium intraocular lens implantation."},
        {h3: "LASIK Vision Correction", p: "Advanced laser procedures to reduce dependence on glasses."},
        {h3: "Retina Procedures", p: "Diagnosis and treatment of retinal diseases using modern surgical techniques."},
        {h3: "Glaucoma Surgery", p: "Effective surgical management to protect the optic nerve and preserve vision."},
        {h3: "Corneal Procedures", p: "Modern corneal treatments for improved vision quality and eye health."},
        {h3: "Eyelid Surgery", p: "Functional and cosmetic eyelid procedures performed with precision and care."}
      ],
      learnMore: "Learn More"
    },
    clinics: {
      span: "OUR CLINICS",
      h2: "Visit ATEC",
      p: "We proudly serve our patients through two modern clinics, providing convenient access to high-quality eye care.",
      cards: [
        {h3: "Sherebeen Clinic", p: "Modern eye clinic equipped for comprehensive examinations, follow-up visits, and advanced consultations.", items:["Address will be added later.","Working hours will be added later.","Phone number will be added later."], buttons:["Google Maps","Book Visit"]},
        {h3: "Damietta Clinic", p: "Providing high-quality eye care with modern equipment and patient-centered medical services.", items:["Address will be added later.","Working hours will be added later.","Phone number will be added later."], buttons:["Google Maps","Book Visit"]}
      ]
    },
    contact: {
      span: "CONTACT US",
      h2: "We're Here To Help",
      p: "Whether you need an appointment, consultation, or have any questions, our team is ready to assist you.",
      cards: [
        {h3: "Phone", p: "Your phone number", a: "Call Now"},
        {h3: "WhatsApp", p: "Quick communication", a: "Send Message"},
        {h3: "Facebook", p: "Follow our latest updates", a: "Visit Page"},
        {h3: "Email", p: "Your email address", a: "Send Email"}
      ]
    },
    footer: {
      logoP: "Abdelghaffar Taha Eye Clinic",
      links: ["Home","About","Services","Surgeries","Clinics","Contact"],
      copyright: (year)=> `© ${year} ATEC - Abdelghaffar Taha Eye Clinic. All Rights Reserved.`
    }
  }
};

function applyTranslations(lang){
  try{
    document.title = translations[lang].title || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc) metaDesc.content = translations[lang].description || metaDesc.content;

    // Top bar locations
    const topSpans = document.querySelectorAll('.top-bar .left span');
    if(topSpans[0]) topSpans[0].innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + translations[lang].topbar[0];
    if(topSpans[1]) topSpans[1].innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + translations[lang].topbar[1];

    // Nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    translations[lang].nav.forEach((t,i)=>{ if(navLinks[i]) navLinks[i].textContent = t; });

    // Appointment button
    const appt = document.querySelector('.appointment-btn');
    if(appt) appt.textContent = translations[lang].appointment;

    // Logo texts
    const logoH2 = document.querySelector('.logo-text h2');
    const logoP = document.querySelector('.logo-text p');
    if(logoH2) logoH2.textContent = translations[lang].logoTitle;
    if(logoP) logoP.textContent = translations[lang].logoSubtitle;

    // Badge
    const badge = document.querySelector('.badge');
    if(badge) badge.innerHTML = '<i class="fa-solid fa-eye"></i> ' + translations[lang].badge;

    // Hero
    const heroH1 = document.querySelector('.hero-left h1');
    const heroH3 = document.querySelector('.hero-left h3');
    const heroP = document.querySelector('.hero-left p');
    if(heroH1) heroH1.innerHTML = translations[lang].heroTitle;
    if(heroH3) heroH3.textContent = translations[lang].heroH3;
    if(heroP) heroP.textContent = translations[lang].heroP;

    const primaryBtn = document.querySelector('.primary-btn');
    const secondaryBtn = document.querySelector('.secondary-btn');
    if(primaryBtn) primaryBtn.textContent = translations[lang].primaryBtn;
    if(secondaryBtn) secondaryBtn.textContent = translations[lang].secondaryBtn;

    // Small cards
    const smallCards = document.querySelectorAll('.small-card');
    translations[lang].smallCards.forEach((data,i)=>{
      const card = smallCards[i];
      if(card){
        const h2 = card.querySelector('h2');
        const p = card.querySelector('p');
        if(h2) h2.textContent = data.h2;
        if(p) p.textContent = data.p;
      }
    });

    // About section
    const aboutSpan = document.querySelector('#about .section-title span');
    const aboutH2 = document.querySelector('#about .section-title h2');
    const aboutP = document.querySelector('#about .section-title p');
    if(aboutSpan) aboutSpan.textContent = translations[lang].about.span;
    if(aboutH2) aboutH2.textContent = translations[lang].about.h2;
    if(aboutP) aboutP.textContent = translations[lang].about.p;

    // About boxes
    const modernBox = document.querySelector('.about-box.large');
    if(modernBox){
      const iTag = modernBox.querySelector('i') ? modernBox.querySelector('i').outerHTML + ' ' : '';
      modernBox.innerHTML = iTag + '<h3>' + translations[lang].aboutBoxes.modern.h3 + '</h3><p>' + translations[lang].aboutBoxes.modern.p + '</p>';
    }
    const aboutGridTitles = document.querySelectorAll('.about-grid .about-box h4');
    translations[lang].aboutBoxes.grid.forEach((t,i)=>{ if(aboutGridTitles[i]) aboutGridTitles[i].textContent = t; });

    // Info cards
    const infoCards = document.querySelectorAll('.about-right .info-card');
    if(infoCards[0]){ infoCards[0].querySelector('h3').textContent = translations[lang].infoCards.mission.h3; infoCards[0].querySelector('p').textContent = translations[lang].infoCards.mission.p; }
    if(infoCards[1]){ infoCards[1].querySelector('h3').textContent = translations[lang].infoCards.vision.h3; infoCards[1].querySelector('p').textContent = translations[lang].infoCards.vision.p; }
    if(infoCards[2]){
      infoCards[2].querySelector('h3').textContent = translations[lang].infoCards.why.h3;
      const lis = infoCards[2].querySelectorAll('li');
      translations[lang].infoCards.why.items.forEach((txt,i)=>{ if(lis[i]) lis[i].querySelector('span') ? lis[i].querySelector('span').textContent = txt : lis[i].childNodes.length && (lis[i].childNodes[2].textContent = txt); });
      // If previous structure lacks span, just set textContent preserving icon
      const liElems = infoCards[2].querySelectorAll('li');
      translations[lang].infoCards.why.items.forEach((txt,i)=>{ if(liElems[i]) liElems[i].innerHTML = '<i class="fa-solid fa-check"></i> ' + txt; });
    }

    // Services
    const servicesSpan = document.querySelector('#services .section-title span');
    const servicesH2 = document.querySelector('#services .section-title h2');
    const servicesP = document.querySelector('#services .section-title p');
    if(servicesSpan) servicesSpan.textContent = translations[lang].services.span;
    if(servicesH2) servicesH2.textContent = translations[lang].services.h2;
    if(servicesP) servicesP.textContent = translations[lang].services.p;

    const serviceCards = document.querySelectorAll('.services .service-card');
    translations[lang].services.cards.forEach((c,i)=>{ if(serviceCards[i]){ serviceCards[i].querySelector('h3').textContent = c.h3; serviceCards[i].querySelector('p').textContent = c.p; }});

    // Surgeries
    const surgSpan = document.querySelector('#surgeries .section-title span');
    const surgH2 = document.querySelector('#surgeries .section-title h2');
    const surgP = document.querySelector('#surgeries .section-title p');
    if(surgSpan) surgSpan.textContent = translations[lang].surgeries.span;
    if(surgH2) surgH2.textContent = translations[lang].surgeries.h2;
    if(surgP) surgP.textContent = translations[lang].surgeries.p;
    const surgeryCards = document.querySelectorAll('.surgeries .surgery-card');
    translations[lang].surgeries.cards.forEach((c,i)=>{ if(surgeryCards[i]){ surgeryCards[i].querySelector('h3').textContent = c.h3; surgeryCards[i].querySelector('p').textContent = c.p; const a = surgeryCards[i].querySelector('a'); if(a) a.textContent = translations[lang].surgeries.learnMore; }});

    // Clinics
    const clinicsSpan = document.querySelector('#clinics .section-title span');
    const clinicsH2 = document.querySelector('#clinics .section-title h2');
    const clinicsP = document.querySelector('#clinics .section-title p');
    if(clinicsSpan) clinicsSpan.textContent = translations[lang].clinics.span;
    if(clinicsH2) clinicsH2.textContent = translations[lang].clinics.h2;
    if(clinicsP) clinicsP.textContent = translations[lang].clinics.p;
    const clinicCards = document.querySelectorAll('.clinics .clinic-card');
    translations[lang].clinics.cards.forEach((c,i)=>{
      const card = clinicCards[i];
      if(card){
        card.querySelector('h3').textContent = c.h3;
        card.querySelector('p').textContent = c.p;
        const lis = card.querySelectorAll('ul li');
        c.items.forEach((txt,j)=>{ if(lis[j]) lis[j].innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + txt.replace(/^/, ''); });
        const btns = card.querySelectorAll('.clinic-buttons a');
        if(btns[0]) btns[0].textContent = c.buttons[0];
        if(btns[1]) btns[1].textContent = c.buttons[1];
      }
    });

    // Contact
    const contactSpan = document.querySelector('#contact .section-title span');
    const contactH2 = document.querySelector('#contact .section-title h2');
    const contactP = document.querySelector('#contact .section-title p');
    if(contactSpan) contactSpan.textContent = translations[lang].contact.span;
    if(contactH2) contactH2.textContent = translations[lang].contact.h2;
    if(contactP) contactP.textContent = translations[lang].contact.p;
    const contactCards = document.querySelectorAll('.contact-card');
    translations[lang].contact.cards.forEach((c,i)=>{ if(contactCards[i]){ contactCards[i].querySelector('h3').textContent = c.h3; contactCards[i].querySelector('p').textContent = c.p; const a = contactCards[i].querySelector('a'); if(a) a.textContent = c.a; }});

    // Footer
    const footerLogoP = document.querySelector('.footer-logo p');
    if(footerLogoP) footerLogoP.textContent = translations[lang].footer.logoP;
    const footerLinks = document.querySelectorAll('.footer-links a');
    translations[lang].footer.links.forEach((t,i)=>{ if(footerLinks[i]) footerLinks[i].textContent = t; });
    const footerBottom = document.querySelector('.footer-bottom p');
    if(footerBottom) footerBottom.innerHTML = translations[lang].footer.copyright(new Date().getFullYear());

  }catch(e){
    console.error('Translation error:', e);
  }
}

function setLang(lang, opts = {reload:false}){
  // Save preference first so a reload will initialize with the chosen language
  localStorage.setItem('siteLang', lang);
  // set dir and lang attributes
  document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  // toggle a simple body class for any RTL styling if needed
  if(lang === 'ar') document.body.classList.add('rtl'); else document.body.classList.remove('rtl');
  applyTranslations(lang);
  const btn = document.getElementById('langToggle');
  if(btn) btn.textContent = (lang === 'ar') ? 'EN' : 'AR';

  // If caller requested a reload (used when user toggles language), reload to ensure
  // static HTML is reloaded and scripts run cleanly with the new language.
  if(opts && opts.reload){
    // small timeout to allow DOM updates/save to complete
    setTimeout(()=> location.reload(), 50);
  }
}

// Initialize from saved or default to Arabic
document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('siteLang') || 'ar';
  // No reload on initial load
  setLang(saved, {reload:false});
});

// Wire toggle button
const langBtn = document.getElementById('langToggle');
if(langBtn){
  langBtn.addEventListener('click', ()=>{
    const current = localStorage.getItem('siteLang') || 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    // Request a reload so the page content resets from static HTML and becomes fully English
    setLang(next, {reload:true});
  });
}
