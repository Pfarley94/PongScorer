$(document).ready(function() {
    $("#nickWins").hide();
});
$(document).ready(function() {
    $("#patWins").hide();
});

var patsScore = 0;
var nicksScore = 0;
var gamePoint = 20;


// code for the basic click function of the app
$('#givePoint1').click(function () {
    if (patsScore < gamePoint) {
        document.getElementById('patsCurrentScore').textContent = patsScore += 1
    } else {
        (patsScore > gamePoint)
        $('#patWins').show(hideNick)
        function hideNick(){
            $('#givePoint2').hide(statePatsVictory)
            function statePatsVictory(){
                $('#patsScoreText').text('Pat Wins!')
            };
        }
        
    }
});

$('#givePoint2').click(function () {
    if (nicksScore < gamePoint) {
        document.getElementById('nicksCurrentScore').textContent = nicksScore += 1;
        
    } else {
        (nicksScore > gamePoint)
        $('#nickWins').show(hidePat)
        function hidePat(){
            $('#givePoint1').hide(stateNicksVictory)
            function stateNicksVictory(){
                $('#nicksScoreText').text('Nick Wins!')
            };
        }
        
    }
});



// // // code for removing an accidental point
// // $('#givePoint1').dblclick(function () {
// //         document.getElementById('patsCurrentScore').textContent = patsScore -= 1


// // code for reloading the page before victory

// var pressHoldDuration = 100;
// // The item (or items) to press and hold on
// var item = document.querySelector("#");

// var timerID;
// var counter = 0;

// var pressHoldEvent = new CustomEvent("pressHold");

// // Increase or decreae value to adjust how long
// // one should keep pressing down before the pressHold
// // event fires
// // Listening for the mouse and touch events    
// item.addEventListener("mousedown", pressingDown, false);
// item.addEventListener("mouseup", notPressingDown, false);
// item.addEventListener("mouseleave", notPressingDown, false);

// item.addEventListener("touchstart", pressingDown, false);
// item.addEventListener("touchend", notPressingDown, false);

// // Listening for our custom pressHold event
// item.addEventListener("pressHold", doSomething, false);

// function pressingDown(e) {
//     // Start the timer
//     requestAnimationFrame(timer);

//     e.preventDefault();

//     console.log("Pressing!");
// }

// function notPressingDown(e) {
//     // Stop the timer
//     cancelAnimationFrame(timerID);
//     counter = 0;

//     console.log("Not pressing!");
// }

// //
// // Runs at 60fps when you are pressing down
// //
// function timer() {
//     console.log("Timer tick!");

//     if (counter < pressHoldDuration) {
//         timerID = requestAnimationFrame(timer);
//         counter++;
//     } else {
//         console.log("Press threshold reached!");
//         item.dispatchEvent(pressHoldEvent);
//     }
// }

// function doSomething(e) {
//     window.location.reload()
//     console.log("pressHold event fired!");
// }