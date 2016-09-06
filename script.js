function change01(){
    document.getElementById("big").src="images/train_bridge.jpg";
    document.getElementById("content").innerHTML = "These trails are made on old rail beds. Bridges are quite common.";
}
function change02(){
    document.getElementById("big").src="images/neil_in_camp.jpg";
    document.getElementById("content").innerHTML = "Camping is a new challenge when you have to carry all your gear. ";
}
function change03(){
    document.getElementById("big").src="images/Jodey_bike.jpg";
    document.getElementById("content").innerHTML = "The bikes we took were aluminium frame road bikes with panniers. ";
}
function change04(){
    document.getElementById("big").src="images/rain.gjp.jpg";
    document.getElementById("content").innerHTML = "On all of our trips it is guarantied to rain.";
}
function change05() {
    document.getElementById("big").src="images/train_bridge.jpg";
    document.getElementById("content").innerHTML = "These trails are made on old rail beds. Bridges are quite common.";
}
function isKeyPressed(event) {
    var x = document.getElementById("shift");
    if (event.shiftKey) {
        x.innerHTML = "You couldn't help it could you!";
    } else {
        x.innerHTML = "The SHIFT key was NOT pressed!";
    }
}
function myFunction() {
    alert("You pressed a key inside the input field");
}

