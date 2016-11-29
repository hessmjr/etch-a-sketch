$(document).ready(function() {
    // main local variables
    var draw = false;
    var drawType = 1;
    var squareNum = 32;

    buildCanvas(squareNum);
    // main mouse function used to draw on canvas
    $(".minisquare").hover( function() {
        if (draw && drawType == 1) {
            // test to make sure user has said we can draw first
            $(this).css("background-color", "black");
            var opac = parseFloat($(this).css("opacity"));
            if (opac < 0.9) {
                $(this).css("opacity", String(opac + .1));
            }
        } else if (draw && drawType == 2) {
            // if user said we can draw and the selected random color option
            $(this).css("opacity", "1");
            $(this).css("background-color", getRandomColor());
        }
    });

    // determie whether drawing should be permitted or not
    $("#draw").click(function() {
        if  (!draw) {
            draw = true;
            $(this).text("Stop Drawing");
        } else {
            draw = false;
            $(this).text("Draw");
        }
    });

    // resets canvas back to default state
    $("#reset").click(function() {
        $(".minisquare").css("opacity", ".1");
        $(".minisquare").css("background-color", "black");
    });

    // resets canvas and selects the random color option
    $("#magic").click(function() {
        $(".minisquare").css("opacity", ".1");
        $(".minisquare").css("background-color", "black");
        if (drawType == 1) {
            drawType = 2;
            $(this).text("Random Color Stop");
        } else {
            drawType = 1;
            $(this).text("Random Color");
        }
    });
})

// build pixels on canvas
function buildCanvas(squareNum) {
    for (var row = 0; row < squareNum; row++) {
        $(".etch-pad").append('<div class="etch-row"></div>');
        for (var col = 0; col < squareNum; col++) {
            $(".etch-row:last").append('<div class="minisquare"></div>');
        }
    }
}

// random color generator used in 2nd drawing option
function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}
