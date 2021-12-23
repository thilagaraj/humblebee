(function() {
  
  "use strict";  

      //===== Preloader

      // window.onload = function () {
      //   window.setTimeout(fadeout, 500);
      // }

      // function fadeout() {
      //   document.querySelector('#preloader').style.opacity = '0';
      //   document.querySelector('#preloader').style.display = 'none';
      // }


      /*=====================================
      Sticky
      ======================================= */
      window.onscroll = function () {
        var header_navbar = document.querySelector(".navigation");
        // show or hide the back-top-top button
        var backToTop = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      };

      // Get the navbar


      // for menu scroll 
      var pageLink = document.querySelectorAll('.page-scroll');

      pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
          e.preventDefault();
          document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
          });
        });
      });

      // section menu active
      function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
          var currLink = sections[i];
          var val = currLink.getAttribute('href');
          var refElement = document.querySelector(val);
          var scrollTopMinus = scrollPos + 73;
          if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
            document.querySelector('.page-scroll').classList.remove('active');
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
        }
      };

      window.document.addEventListener('scroll', onScroll);

     
      //===== close navbar-collapse when a  clicked
      let navbarToggler = document.querySelector(".navbar-toggler");
      var navbarCollapse = document.querySelector(".navbar-collapse");
      var headerBtn = document.querySelector(".header-btn");

      document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
          navbarToggler.classList.remove("active");
          navbarCollapse.classList.remove('show');
          headerBtn.classList.remove('show')
        })
      );
      navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
        navbarCollapse.classList.toggle('show');
        headerBtn.classList.toggle('show');
      })


    //======== tiny slider for testimonial
    new Glide('.glide',{
      autoplay: 3000,
    }).mount();

    
    

      //WOW Scroll Spy
      var wow = new WOW({
        //disabled for mobile
        mobile: false
      });
      wow.init();

})();