let points = [[1,2],[2,4],[6,2],[9,9]];
//establishes the required initial points
(function drawInitial(arr) {
    for (let i=0; i<arr.length; i++) {
        drawPoint(arr[i][0], arr[i][1])
    }
})(points)

// Creates a new point
function drawPoint(x, y) {
    let svg = document.getElementById("scatter");
    h = svg.clientHeight;
    w = svg.clientWidth;

    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    let truex = x * 10 + "%"; //gotta adjust bc the svg dimensions are a bit odd
    let truey = (h - (y * h * 0.1)); //gotta adjust bc the svg dimensions are a bit odd
    circle.setAttribute('cx', truex);
    circle.setAttribute('cy', truey);
    circle.setAttribute('r', 5); //sets size of points
    circle.setAttribute('style', 'fill: grey;' ); //sets color of points
    circle.addEventListener('click', function () { //on click we're adding/removing borders
        border(circle);
    });
    circle.addEventListener('click', function () { //on click we're adding/removing text about the point's coordinates
        showText(x, y, circle);
    });
    circle.addEventListener('mouseover', function () { //when the mouse is on the point it's time to highlight
        highlight(circle);
    });
    circle.addEventListener('mouseout', function () { //when the mouse is not on the point go bye bye
        rmhighlight(circle);
    });
    svg.appendChild(circle);

}

//Adds a border to the given object if it does not have one, removes the border otherwise
function border(x) {
    if (x.style.stroke === "black") {
        x.style.stroke = "none";
    }
    else {
        x.style.stroke = "black"
    }
}

//Shows coordinate points if object not clicked, erases text if already present
function showText(x, y, circle){
    let text = document.getElementById("text");
    text.style.display = "block";
    text.innerHTML = "You just clicked point (" + x + "," + y + ").";
}

//Turns the given object red
function highlight(x) {
    x.style.fill = "red";
}

//Turns the given object grey
function rmhighlight(x) {
    x.style.fill = "grey";
}

//Gets the user submitted value when the button is clicked
function submitClick() {
    let x = document.getElementById("xvals").value;
    let y = document.getElementById("yvals").value;

    console.log(x,y)
    drawPoint(x, y);
}

document.getElementById("button").addEventListener('click', submitClick);