let points = [[1,2],[2,4],[6,2],[9,9]];

(function drawInitial(arr) {
    for (let i=0; i<arr.length; i++) {
        drawPoint(arr[i][0], arr[i][1])
    }

})(points)

// Creates a new point
function drawPoint(x, y) {
    let svg = document.getElementById("scatter");
    h = svg.clientHeight 
    w = svg.clientWidth

    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('cx', x * w * .1);
    circle.setAttribute('cy', y * h * .1);
    circle.setAttribute('r', 5);
    circle.setAttribute('style', 'fill: grey;' );
    circle.addEventListener('click', function () {
        border(circle);
    });
    circle.addEventListener('mouseover', function () {
        highlight(circle);
    });
    circle.addEventListener('mouseout', function () {
        rmhighlight(circle);
    });
    svg.appendChild(circle);

}

//Adds a border to the given object if it does not have one, removes the border otherwise
function border(x) {
    if (x.style.stroke == "black") {
        x.style.stroke = "none";
    }
    else {
        x.style.stroke = "black"
    }
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