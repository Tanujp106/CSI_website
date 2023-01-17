// // Remove the transition class
// const square = document.querySelector('.square');
// square.classList.remove('square-transition');

// // Create the observer, same as before:
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       square.classList.add('square-transition');
//       return;
//     }
//     square.classList.remove('square-transition');
//   });
// });

// observer.observe(document.querySelector('.square-wrapper'));
$(function() {
    $(".preload").fadeOut(3050, function() {
        $(".main-content").fadeIn(1000);        
    });
});

const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effects when mouse stopped
  function mouseStopped(){
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 8000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
