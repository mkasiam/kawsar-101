// Load external HTML components (navbar and footer)
function includeHTML() {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((res) => res.text())
      .then((data) => (el.innerHTML = data))
      .catch((err) => console.log("Include Error:", err));
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
