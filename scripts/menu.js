var navbarItems = document.getElementsByClassName("navbar__item");

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", function(event) {
    var goTo = this.getElementsByTagName("a")[0].href.split("#");

    deleteActiveClass();
    this.classList.add("navbar__item--active");

    if (goTo.length === 2) {
      event.preventDefault();
      var sectionToGo = goTo[goTo.length - 1];
      var elementToGo = getElementToScroll(sectionToGo);
      scrollToElement(elementToGo);
    }
  });
}

function deleteActiveClass() {
  for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.remove("navbar__item--active");
  }
}

function getElementToScroll(id) {
  var elem;
  if (id === "") {
    elem = document.getElementsByClassName("header")[0];
  } else {
    elem = document.getElementById(id);
  }

  return elem;
}

function scrollToElement(element) {
  var jump = parseInt(element.getBoundingClientRect().top * 0.2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;

  if (!element.lastJump || element.lastJump > Math.abs(jump)) {
    element.lastJump = Math.abs(jump);
    setTimeout(function() {
      scrollToElement(element);
    }, 25);
  } else {
    element.lastJump = null;
  }
}
