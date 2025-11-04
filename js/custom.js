/*
Template: Recrutix - Human Resources & Recruiting HTML Template
Author: peacefulqode.co.in
Version: 1.0
Design and Developed by: Peacefulqode

*/

/*================================================
[  Table of contents  ]
================================================
==> Page Loader
==> Sticky Header
==> Sidebar Toggle
==> Scroll back to top
==> counter
==> img-marquee 
==> Owl Carousel
==> popup-moving button
==> moving testimonial
==> hover active
==> accordion
==> progress bar
==> isotope
==> magnific-popup
==> wow

======================================
[ End table content ]
======================================*/
(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {



/*------------------------
        Page Loader
--------------------------*/
jQuery("#pq-loading").fadeOut();
jQuery("#pq-loading").delay(0).fadeOut("slow");


/*------------------------
     Sticky Header
 --------------------------*/

var view_width = jQuery(window).width();
if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023) {

}

if (jQuery('header').hasClass('pq-has-sticky')) {
  jQuery(window).scroll(function () {
    var scrollTop = jQuery(window).scrollTop();
    if (scrollTop > 300) {
      jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
    } else {
      jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
    }
  });
}
/*==================================================
       Sidebar Toggle
==================================================*/

jQuery(document).on('click', "#pq-toggle-button", function () {
  jQuery('#pq-sidebar-menu-contain').toggleClass("active");
});
jQuery(document).on('click', '.pq-toggle-button', function () {
  jQuery('body').addClass('pq-siderbar-open');
});
jQuery(document).on('click', '.pq-close', function () {
  jQuery('body').removeClass('pq-siderbar-open');
});


/* ============================= */
// Scroll back to top
/* ============================ */

var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();

progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

var updateProgress = function () {
  var scroll = jQuery(window).scrollTop();
  var height = jQuery(document).height() - jQuery(window).height();
  var progress = pathLength - (scroll * pathLength / height);
  progressPath.style.strokeDashoffset = progress;
};
updateProgress();

jQuery(window).on('scroll', updateProgress);

var offset = 50;
var duration = 550;

jQuery(document).on('scroll', function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.progress-wrap').addClass('active-progress');
  } else {
    jQuery('.progress-wrap').removeClass('active-progress');
  }
});

jQuery(document).on('click', '.progress-wrap', function (event) {
  event.preventDefault();
  jQuery('html, body').animate({ scrollTop: 0 }, duration);
  return false;
});

/*==================================================
    [ counter ]
==================================================*/

jQuery(window).on('scroll', function () {
  jQuery('.pq-counter').each(function () {
    var $this = jQuery(this);
    var elementTop = $this.offset().top;
    var windowBottom = jQuery(window).scrollTop() + jQuery(window).height();
    // Check if the counter element is in the viewport
    if (windowBottom > elementTop) {
      if (!$this.hasClass('counted')) { // Check if the animation has already run
        $this.addClass('counted'); // Mark this counter as processed

        // Animate the counter
        $this.find('.pq-count').each(function () {
          var $count = jQuery(this),
            countTo = $count.attr('data-count');
          var Toduration = Number($count.attr('data-pq-duration')); // Parse duration

          function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }

          jQuery({ countNum: 0 }).animate({
            countNum: countTo
          }, {
            duration: Toduration,
            easing: 'swing',
            step: function () {
              $count.text(numberWithCommas(Math.floor(this.countNum))); // Update number with commas
            },
            complete: function () {
              $count.text(numberWithCommas(this.countNum)); // Set the final value with commas
            }
          });
        });
      }
    }
  });
});
/*==================================================
    [ img-marquee ]
==================================================*/
window.addEventListener('scroll', function () {
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;
  var processSteps = document.querySelectorAll('.pq-scroll-marquee');
  processSteps.forEach(function (step) {
    var rect = step.getBoundingClientRect();
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      // Element is in viewport
      var marquee = step.querySelector('.pq-img-marquee');
      if (marquee) {
        var screenBottom = 190;
        var translateSpeed = 70; // Adjust base speed
        var lazyFactor = 1; // Adjust this value for the lazy motion effect
        if (step.classList.contains('odd')) {
          var scrollAmount = Math.min(0, rect.bottom - windowHeight - screenBottom) / translateSpeed * lazyFactor;
          marquee.style.transform = 'translateX(' + scrollAmount + '%)';
        } else {
          var scrollAmount = Math.min(100, -rect.bottom - windowHeight - screenBottom) / translateSpeed * lazyFactor;
          marquee.style.transform = 'translateX(' + scrollAmount + '%)';
        }
      }
    }
  });
});

/*==================================================
   Owl Carousel
==================================================*/

//New Owl Carousel
jQuery('.center-owl-carousel .owl-carousel').each(function () {
  var app_slider = jQuery(this);
  var rtl = false;
  var prev = 'pt-flaticon-right';
  var next = 'pt-flaticon-right';
  var prev_text = 'Prev';
  var next_text = 'Next';

  if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
    prev_text = app_slider.data('prev_text');
  }
  if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
    next_text = app_slider.data('next_text');
  }
  app_slider.owlCarousel({
    //center: true,
    items: app_slider.data("desk_num"),
    loop: app_slider.data("loop"),
    nav: app_slider.data("nav"),
    dots: app_slider.data("dots"),
    margin: app_slider.data("margin"),
    autoplay: app_slider.data("autoplay"),
    center: app_slider.data("center"),
    autoplayHoverPause: true,
    autoplayTimeout: app_slider.data("autoplay-timeout"),
    navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
    responsiveClass: true,
    responsive: {

      0: {
        items: app_slider.data("mob_sm"),
        // nav: true,
        dots: true
        // dots: false
      },
      // breakpoint from 480 up
      480: {
        items: app_slider.data("mob_num"),
        // nav: true,
        dots: true
        // dots: false
      },
      // breakpoint from 786 up
      786: {
        items: app_slider.data("tab_num"),
        dots: true
      },
      // breakpoint from 1023 up
      1023: {
        // center: true,
        items: app_slider.data("lap_num")
      },
      1199: {
        // center: true,
        items: app_slider.data("desk_num")
      }
    }
  });
});



jQuery('.owl-carousel').each(function () {
  var app_slider = jQuery(this);
  var rtl = false;
  var prev = 'pt-flaticon-right';
  var next = 'pt-flaticon-right';
  var prev_text = 'Prev';
  var next_text = 'Next';
  if (jQuery('body').hasClass('pq-is-rtl')) {
    rtl = true;
    prev = 'flaticon-next';
    next = 'flaticon-back';
  }
  if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
    prev_text = app_slider.data('prev_text');
  }
  if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
    next_text = app_slider.data('next_text');
  }
  app_slider.owlCarousel({
    rtl: rtl,
    items: app_slider.data("desk_num"),
    loop: app_slider.data("loop"),
    margin: app_slider.data("margin"),
    nav: app_slider.data("nav"),
    dots: app_slider.data("dots"),
    autoWidth: app_slider.data("autowidth"), // Auto Width
    autoplay: app_slider.data("autoplay"),
    autoplayHoverPause: true,
    autoplayTimeout: app_slider.data("autoplay-timeout"),
    navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: app_slider.data("mob_sm"),
        nav: true,
        dots: true
      },
      // breakpoint from 480 up
      480: {
        items: app_slider.data("mob_num"),
        nav: true,
        dots: true
      },
      // breakpoint from 786 up
      786: {
        items: app_slider.data("tab_num"),
        dots: true,
        nav: true,
      },
      // breakpoint from 1023 up
      1023: {
        items: app_slider.data("lap_num")
      },
      1199: {
        items: app_slider.data("desk_num")
      }
    }
  });
});

jQuery('.pq-click-active .pq-click-item:first-child').addClass("pq-active");
jQuery('.pq-click-item').on({
  'click': function () {
    jQuery('.pq-click-item').removeClass('pq-active');
    jQuery(this).addClass('pq-active');
  },
});

/*==================================================
    popup-moving button
==================================================*/
var strength = (jQuery('.pq-video-popup').height() - 10);
// console.log(strength);
var magnets = document.querySelectorAll('.pq-moving-button');
magnets.forEach((magnet) => {
  magnet.addEventListener('mousemove', moveMagnet);
  magnet.addEventListener('mouseout', function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
  });
});
function moveMagnet(event) {
  var magnetButton = event.currentTarget;
  var bounding = magnetButton.getBoundingClientRect();
  TweenMax.to(magnetButton, 1, {
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  });
}


/*==================================================
  moving testimonial
==================================================*/


gsap.defaults({ overwrite: "auto" });
gsap.registerPlugin(ScrollTrigger, Flip);
gsap.config({ nullTargetWarn: false });
ScrollTrigger.matchMedia({
  // >= 768px
  "(min-width: 768px)": function () {
    gsap.utils.toArray('.pq-moving-scroll').forEach((section, index) => {
      const galleryList = section.querySelector('.pq-moving-scroll-list');
      const items = galleryList.children;
      let totalWidth = 0;
      for (let i = 0; i < items.length; i++) {
        totalWidth += items[i].offsetWidth;
      }
      galleryList.style.width = `${totalWidth}px`;

      const distance = section.offsetWidth - galleryList.scrollWidth;
      const [x, xEnd] = (index % 2) ? [0, distance] : [0, distance];



      gsap.fromTo(galleryList, { x }, {
        x: xEnd,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: () => `+=${galleryList.scrollWidth - section.offsetWidth}`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    });
  },

  // < 768px: disable animation (optional)
  "(max-width: 767px)": function () {
    // If you want to reset styles, do it here
    gsap.utils.toArray('.pq-moving-scroll-list').forEach((el) => {
      gsap.set(el, { clearProps: "all" });
    });
  }
});

/*==================================================
  hover active
==================================================*/

jQuery('.pq-hover-active').each(function () {
  var $container = jQuery(this);

  // Activate the second child initially
  $container.find('.pq-hover-item:nth-child(2)').addClass("pq-active");

  // Handle hover events for items within this container
  $container.find('.pq-hover-item').on({
    mouseenter: function () {
      $container.find('.pq-hover-item').removeClass('pq-active');
      jQuery(this).addClass('pq-active');
    },
  });
});

/*==================================================
  accordion
==================================================*/

jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
  if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
    jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
    jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
  }
});



/*==================================================
    [ progress bar ]
==================================================*/

jQuery(document).ready(function () {
  // Animate progress bars
  jQuery(".pq-progressbar-content .show-progress").each(function () {
    let $this = jQuery(this);
    let targetWidth = $this.data("width") + "%";

    $this.css("width", "0"); // Reset width
    $this.animate({ width: targetWidth }, 2000); // Animate to target width
  });
});


/*==================================================
    [ isotope ]
==================================================*/

jQuery(document).ready(function () {
  // Initialize Isotope for Masonry Layout
  jQuery('.pq-masonry').isotope({
    itemSelector: '.pq-masonry-item',
    masonry: {
      columnWidth: '.grid-sizer', // Set column width for masonry layout
    }
  });

  // Initialize Isotope for Grid Layout
  jQuery('.pq-grid, .pq-job-list, .pq-job-grid').isotope({
    itemSelector: '.pq-grid-item, .pq-job-item, .pq-job-grid-item', // Define grid items
  });

  // Filter Items on Button Click
  jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {
    var filterValue = jQuery(this).attr('data-filter'); // Get filter value from button
    jQuery('.pq-masonry').isotope({
      filter: filterValue
    }); // Apply filter to masonry layout
    jQuery('.pq-grid, .pq-job-list, .pq-job-grid').isotope({
      filter: filterValue
    }); // Apply filter to grid layout

    // Update active button state
    jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
    jQuery(this).addClass('active');

    // Check if .pq-end-message has the class 'visible' and remove it
    if (jQuery('.pq-end-message').hasClass('visible')) {
      jQuery('.pq-end-message').removeClass('visible');
    }

    updateFilterCounts(); // Update the item count
  });

  // Set Initial & Next Items Count
  var initial_items = 5; // Default initial items
  var next_items = 3; // Default number of items to load next

  // Retrieve item count settings from data attributes if available
  if (jQuery('.pq-masonry').length > 0) {
    initial_items = jQuery('.pq-masonry').data('initial_items') || initial_items;
    next_items = jQuery('.pq-masonry').data('next_items') || next_items;
  }

  if (jQuery('.pq-grid, .pq-job-list, .pq-job-grid').length > 0) {
    initial_items = jQuery('.pq-grid, .pq-job-list, .pq-job-grid').data('initial_items') || initial_items;
    next_items = jQuery('.pq-grid, .pq-job-list, .pq-job-grid').data('next_items') || next_items;
  }

  // Function to Show More Items
  function showNextItems(pagination) {
    var itemsMax = jQuery('.visible_item').length; // Get count of hidden items
    var itemsCount = 0;

    jQuery('.visible_item').each(function () {
      if (itemsCount < pagination) {
        jQuery(this).removeClass('visible_item'); // Show next batch of items
        itemsCount++;
      }
    });

    // Hide "Show More" button if all items are displayed
    if (itemsCount >= itemsMax) {
      jQuery('#showMore').hide();
      jQuery('.pq-end-meassge').addClass('visible'); // Show end message
    }

    jQuery('.pq-masonry, .pq-grid, .pq-job-list, .pq-job-grid').isotope('layout'); // Refresh Isotope layout
  }

  // Function to Hide Items on Load
  function hideItems(pagination) {
    var itemsMax = jQuery('.pq-filter-items').length; // Get total items count
    var itemsCount = 0;

    jQuery('.pq-filter-items').each(function () {
      if (itemsCount >= pagination) {
        jQuery(this).addClass('visible_item'); // Hide extra items
      }
      itemsCount++;
    });

    // Hide "Show More" button if all items are already displayed
    if (itemsCount < itemsMax || initial_items >= itemsMax) {
      jQuery('#showMore').hide();
    }

    jQuery('.pq-masonry, .pq-grid, .pq-job-list, .pq-job-grid').isotope('layout'); // Refresh Isotope layout
  }

  // Function to Update Filtered Items Count
  function updateFilterCounts() {
    var itemElems = [];

    // Get filtered items for Masonry layout
    if (jQuery('.pq-masonry').length > 0) {
      itemElems = jQuery('.pq-masonry').isotope('getFilteredItemElements');
    }

    // Get filtered items for Grid layout
    if (jQuery('.pq-grid, .pq-job-list, .pq-job-grid').length > 0) {
      itemElems = jQuery('.pq-grid, .pq-job-list, .pq-job-grid').isotope('getFilteredItemElements');
    }

    var count_items = jQuery(itemElems).length; // Count filtered items

    // Show or hide "Show More" button based on item count
    if (count_items > initial_items) {
      jQuery('#showMore').show();
    } else {
      jQuery('#showMore').hide();
    }

    jQuery('.pq-filter-items').removeClass('visible_item'); // Show all items initially

    var index = 0;
    jQuery(itemElems).each(function () {
      if (index >= initial_items) {
        jQuery(this).addClass('visible_item'); // Hide extra items
      }
      index++;
    });

    jQuery('.pq-masonry, .pq-grid, .pq-job-list, .pq-job-grid').isotope('layout'); // Refresh Isotope layout
  }

  // Check if click_to_load or scroll_to_load class exists
  if (jQuery('.click_to_load').length > 0) {
    // Click to Load More
    jQuery('#showMore').on('click', function (e) {
      e.preventDefault();

      var $loader = jQuery('#pq-loaderIcon'); // Get loader element
      $loader.show(); // Show loading icon

      setTimeout(function () {
        showNextItems(next_items); // Load more items
        $loader.hide(); // Hide loading icon
      }, 1500);
    });
  }

  // Scroll to Load More
  else if (jQuery('.scroll_to_load').length > 0) {
    var scrolling = false;
    jQuery(window).on('scroll', function () {
      if (!scrolling) {
        scrolling = true;
        var scrollPosition = jQuery(window).scrollTop() + jQuery(window).height();
        var seventyFivePercent = jQuery(document).height() * 0.75; // 75% of page height

        // Check if user has scrolled past 75% of the page
        if (scrollPosition >= seventyFivePercent) {
          var remainingItems = jQuery('.visible_item').length; // Get remaining hidden items

          if (remainingItems > 0) { // If there are items to load
            var $loader = jQuery('#pq-loaderIcon'); // Get loader
            $loader.show(); // Show loader

            setTimeout(function () {
              showNextItems(next_items); // Load more items
              $loader.hide(); // Hide loader

              // Show "No More Items" message if all items are loaded
              if (jQuery('.visible_item').length === 0) {
                jQuery('.end_message').show();
              }

              scrolling = false;
            }, 2000); // Delay of 2 seconds
          } else {
            jQuery('.end_message').show(); // Show "No More Items" message
            scrolling = false;
          }
        } else {
          scrolling = false;
        }
      }
    });
  }
  // Hide items initially
  hideItems(initial_items);
});


/*==================================================
   magnific-popup
==================================================*/

$('.gallery').magnificPopup({
  delegate: 'a', // Selects child `<a>` elements
  type: 'image',
  gallery: {
    enabled: true
  }
});

 jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
     });

/*==================================================
     wow
 ==================================================*/
new WOW().init();

});
})(jQuery);