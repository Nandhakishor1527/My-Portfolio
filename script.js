var typed = new Typed(".text", {
    strings: ["Student", "Learner", "Developer"],
    typeSpeed: 100,         // Speed of typing (in milliseconds)
    backSpeed: 100,         // Speed of backspacing (in milliseconds)
    backDelay: 1000,        // Delay before starting to backspace (in milliseconds)
    loop: true,             // Makes the animation loop infinitely
    showCursor: true,       // Show blinking cursor
    cursorChar: "|",        // Custom cursor character
});
document.getElementById("linkedin").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/nandhakishor-madha-32439331b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  });
  document.getElementById("instagram").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/nandhakishor_madha_1527?igsh=MTJoMGZkdnl4ZzhxaA==";
  });
  document.getElementById("whatsap").addEventListener("click", function() {
    window.location.href = "https://wa.me/qr/7UV26UBWWR2XN1";
  });