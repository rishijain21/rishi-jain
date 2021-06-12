
document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function () {
  // navigation click actions
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 750);
  });
  // scroll to top action
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // mobile nav toggle
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $("#main-nav").toggleClass("open");
  });
});
// scroll function
function scrollToID(id, speed) {
  var offSet = 0;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $("#main-nav");
  $("html,body").animate({ scrollTop: targetOffset }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
  console = {
    log: function () {},
  };
}

function dark_mode() {
  let mvr = document.getElementById("mover");
  let btn = document.getElementById("button");

  if (btn.className == "button day") {
    mvr.style.transform = "translateY(-42px)";
    btn.className = "button night";
    btn.style.boxShadow = "0px 0px 16px rgba(255, 255, 255, 0.25)";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    mvr.style.transform = "translateY(0)";
    btn.className = "button day";
    btn.style.boxShadow = "0px 0px 16px rgba(0, 0, 0, 0.25)";
    document.documentElement.setAttribute("data-theme", "light");
  }
}


// let toggleSwitch = document.querySelector('.darkmode');

// function switchTheme(dark) {
//   if(dark.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//   }
//    else {
//     document.documentElement.setAttribute('data-theme', 'light');
//   }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

