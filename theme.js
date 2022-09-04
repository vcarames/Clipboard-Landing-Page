var icon = document.getElementById("iconToggle");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "images/cloud-moon-fill.svg";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "images/cloud-sun-fill.svg";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/cloud-sun-fill.svg";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/cloud-moon-fill.svg";
    localStorage.setItem("theme", "light");
  }
};
