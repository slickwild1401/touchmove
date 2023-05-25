var last_x, last_y;
var current_x, current_y

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;
var new_width = screen.width - 100;
var new_height = screen.height - 400;

if (width <= 992) {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }


    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e) {
        //Addictonal Activity start
       // color = document.getElementById("color").value;
       // width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;


    }



    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e) {

        current_x = e.touches[0].clientX - canvas.offsetLeft;
        current_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();


        last_position_of_x = current_x;
        last_position_of_y = current_y;

    }