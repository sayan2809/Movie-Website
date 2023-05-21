function flashTitle(pageTitle, newTitle) {
  if (document.title == pageTitle) {
    document.title = newTitle;
  } else {
    document.title = pageTitle;
  }
}

setInterval("flashTitle('Welcome To Cineaste', 'Follow For More!')", 1500);
function theme() {
  if (document.getElementById("theme-logo").classList.contains("fa-sun")) {
    document.getElementById("theme-logo").classList.remove("fa-sun");
    document.getElementById("theme-logo").classList.add("fa-moon");
  } else {
    document.getElementById("theme-logo").classList.remove("fa-moon");
    document.getElementById("theme-logo").classList.add("fa-sun");
  }

  if (document.getElementById("body").classList.contains("light")) {
    document.getElementById("body").classList.remove("light");
    document.getElementById("body").classList.add("dark");
  } else {
    document.getElementById("body").classList.remove("dark");
    document.getElementById("body").classList.add("light");
  }

  const button = document.querySelectorAll(".button");

  button.forEach((el) => {
    if (el.classList.contains("btn-light")) {
      el.classList.remove("btn-light");
      el.classList.add("btn-dark");
    } else {
      el.classList.remove("btn-dark");
      el.classList.add("btn-light");
    }
  });

  const scr = document.querySelectorAll(".search-label");

  scr.forEach((el) => {
    if (el.classList.contains("search-light")) {
      el.classList.remove("search-light");
      el.classList.add("search-dark");
    } else {
      el.classList.remove("search-dark");
      el.classList.add("search-light");
    }
  });
}
