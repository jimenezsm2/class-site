function hello(name) {
   return "Hello"+( (typeof name === "undefined" ) ? " there" : ", "+name )+"! Welcome, " + name + ".";
  }

function go() {
    var name = document.getElementById("input").value;
    var out = hello(name);
    document.getElementById("output").innerHTML = out;
  }

// var name = document.getElementById("input").value;
//
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
//
// function press() {
//   greet(name);
// }


function toggle() {
    var theBox = document.getElementById("box");
    theBox.classList.toggle("active");
  }

$( function() {
    $( "#sortable" ).sortable();
  } );

$( function() {
      $( ".draggable" ).draggable();
    } );

// type="text/javascript">

// Define the function
// to screenshot the div
function takeshot() {
    let div =
        document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        })
}

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
// $('.marquee').marquee({
// 	//duration in milliseconds of the marquee
// 	duration: 15000,
// 	//gap in pixels between the tickers
// 	gap: 50,
// 	//time in milliseconds before the marquee will start animating
// 	delayBeforeStart: 0,
// 	//'left' or 'right'
// 	direction: 'left',
// 	//true or false - should the marquee be duplicated to show an effect of continues flow
// 	duplicated: true,
//   startVisible: true,
//   pauseOnHover: true
// });
