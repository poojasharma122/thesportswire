function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}


//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
//  header sticky js end

// AOS JS Start
AOS.init({
    duration: 1200,
});
// AOS JS End

// Newsletter form validation (all pages)
$(document).ready(function() {
    function isValidEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return re.test(String(email).toLowerCase());
    }
  
    function setNewsletterInvalid($input, isInvalid) {
      if (isInvalid) {
        $input.addClass("is-invalid");
      } else {
        $input.removeClass("is-invalid");
      }
    }
  
    // Handle newsletter form submission
    $(document).on("submit", ".newsletter-form", function(e) {
      var $form = $(this);
      var $emailInput = $form.find(".newsletter-email");
      var $feedback = $form.find(".newsletter-feedback");
      var email = $emailInput.val().trim();
      var hasError = false;
  
      // Validate email
      if (!isValidEmail(email)) {
        setNewsletterInvalid($emailInput, true);
        $feedback.show();
        hasError = true;
      } else {
        setNewsletterInvalid($emailInput, false);
        $feedback.hide();
      }
  
      if (hasError) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  
    // Clear validation on input
    $(document).on("input blur", ".newsletter-email", function() {
      var $input = $(this);
      var $form = $input.closest(".newsletter-form");
      var $feedback = $form.find(".newsletter-feedback");
      var email = $input.val().trim();
      
      if (isValidEmail(email)) {
        setNewsletterInvalid($input, false);
        $feedback.hide();
      } else {
        setNewsletterInvalid($input, true);
        $feedback.show();
      }
    });
  });