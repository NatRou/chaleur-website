/* Obfuscated contact link — "JavaScript Conversion" method
   (Spencer Mortensen, "Email obfuscation", 2026: a recommended best, 100% effective + accessible).
   The page source carries only an encoded token; the real address is reconstructed in the browser
   and assigned to the link's href, so it never appears in the static HTML. Reversible transform:
   ROT13 then reverse. Decode = reverse then ROT13 (ROT13 is its own inverse). */
(function () {
  "use strict";
  var TOKEN = "ccn.ehrynup@fcvuferagenc";

  function rot13(s) {
    return s.replace(/[a-z]/g, function (c) {
      return String.fromCharCode((c.charCodeAt(0) - 97 + 13) % 26 + 97);
    });
  }

  function decode(token) {
    return rot13(token.split("").reverse().join(""));
  }

  function wire() {
    var link = document.getElementById("contact-link");
    if (!link) return;
    var address = decode(TOKEN);
    link.setAttribute("href", "mailto:" + address);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
