

// _________________________________________________________________________________________________________________ //
// _________________________________________________________________________________________________________________ //
// MY CUSTUM CODE FOR POTFOLIO PAGE


// Main  Grid Layout__________________________
var msnry = $('.grid').masonry( {
  itemSelector: '.grid-item-content',
  columnWidth: '.grid-sizer',
  horizontalOrder: false,  
});

// layout Masonry after each image loads______
msnry.imagesLoaded().progress( function() {
 msnry.masonry('layout');
});

// Reset Layout After Filter___________________
var buttonGroup = document.getElementById('btnContainer');

$('#btnContainer').on( 'click', function() {
// layout remaining item elements
msnry.masonry('layout');
});

//__________________________________
// EKKO - LIGHTBOX__________________
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


// PROJECTS FILTER _______________________________________________________________________________

filterSelection("all")
function filterSelection(c) {

  var x, i;
  x = document.getElementsByClassName("filterCard");

  if (c == "all") c = "";
  
  
  // Add the "d-block" class (display:block) to the filtered elements, 
  // and remove the "d-none" class from the elements that are not selected.

  for (i = 0; i < x.length; i++) {

    removeClass(x[i], "d-block");
    
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "d-block");
  }
}


// Show filtered elements
function addClass(element, name) {

  var i, arr1, arr2;

  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {

  var i, arr1, arr2;

  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {

    while (arr1.indexOf(arr2[i]) > -1) {

      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)

var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


