/* ============================================================
   FORM.JS — Contact form validation with toast popups

   Features:
   - Real-time email regex validation on input
   - Phone number validation (10 digits)
   - Shows success/error toast popups
   - Prevents submission if validation fails
   ============================================================ */

(function () {
  "use strict";

  // ---- Toast helper ----
  // Creates a small popup at the bottom of the screen.
  // type: "success" | "error" | "warning"
  function showToast(message, type) {
    // Remove any existing toast first
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger reflow so the transition fires
    void toast.offsetWidth;
    toast.classList.add("show");

    // Auto-hide after 3.5 seconds
    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () { toast.remove(); }, 400);
    }, 3500);
  }

  // ---- Email regex ----
  // Standard RFC-ish pattern: local@domain.tld
  var emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

  // ---- Phone regex ----
  // Exactly 10 digits
  var phoneRegex = /^[0-9]{10}$/;

  // ---- Grab the contact form ----
  var form = document.querySelector(".contact-form form");
  if (!form) return; // not on a page with the contact form

  var emailInput  = form.querySelector('input[name="email"]');
  var phoneInput  = form.querySelector('input[name="phone"]');
  var nameInput   = form.querySelector('input[name="name"]');
  var messageArea = form.querySelector('textarea[name="message"]');

  // ---- Real-time email feedback ----
  // As the user types, highlight the border green/red.
  if (emailInput) {
    emailInput.addEventListener("input", function () {
      var val = emailInput.value.trim();
      if (val.length === 0) {
        emailInput.style.borderColor = "#475569"; // default
      } else if (emailRegex.test(val)) {
        emailInput.style.borderColor = "#16a34a"; // green = valid
      } else {
        emailInput.style.borderColor = "#dc2626"; // red = invalid
      }
    });
  }

  // ---- Real-time phone feedback ----
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      var val = phoneInput.value.trim();
      if (val.length === 0) {
        phoneInput.style.borderColor = "#475569";
      } else if (phoneRegex.test(val)) {
        phoneInput.style.borderColor = "#16a34a";
      } else {
        phoneInput.style.borderColor = "#dc2626";
      }
    });
  }

  // ---- Form submission validation ----
  form.addEventListener("submit", function (e) {
    var name    = nameInput   ? nameInput.value.trim()   : "";
    var phone   = phoneInput  ? phoneInput.value.trim()  : "";
    var email   = emailInput  ? emailInput.value.trim()  : "";
    var message = messageArea ? messageArea.value.trim()  : "";

    // Check required fields
    if (!name) {
      e.preventDefault();
      showToast("Please enter your name.", "error");
      nameInput.focus();
      return;
    }

    // Validate phone
    if (!phoneRegex.test(phone)) {
      e.preventDefault();
      showToast("Please enter a valid 10-digit phone number.", "error");
      phoneInput.focus();
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      e.preventDefault();
      showToast("Please enter a valid email address (e.g. name@example.com).", "error");
      emailInput.focus();
      return;
    }

    // Validate message
    if (!message) {
      e.preventDefault();
      showToast("Please write a message before sending.", "error");
      messageArea.focus();
      return;
    }

    // All good — show success toast (form will submit normally)
    showToast("Sending your message...", "success");
  });

})();
