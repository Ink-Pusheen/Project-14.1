//Work of Aiden Schagren

var loop // Variable that holds the loop interval

//Moves the image per the loop time in miliseconds
function moveImage(){
    var newlocation = Math.floor((Math.random() * 520)) //Image moves between 0-520
    document.getElementById("meme").style.marginLeft = newlocation + "px" //Sets the image location
}

//Button function to make the image start moving
function startMoving(){
    
        loop = setInterval(moveImage, 500) //Starts the loop
        //console.log("Running")

        document.getElementById("Start").disabled = true //Disables the start button
        document.getElementById("Stop").disabled = false //Enables the stop button
}

//Button function to make the image stop moving
function stopMoving(){
    clearTimeout(loop) //Stops the loop
    
    //console.log("Stopped")

    document.getElementById("Start").disabled = false //Enables the start button
    document.getElementById("Stop").disabled = true //Disables the stop button
}