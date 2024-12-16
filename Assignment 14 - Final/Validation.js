function checkValidation(){
    //Sets the constants to the currently inputted strings
    const firstName = document.getElementById("Firstname").value
    const lastName = document.getElementById("Lastname").value
    const zipCode = document.getElementById("Zipcode").value

    //Creates a string using the first and last name input
    let fullName = firstName + " " + lastName

    // if(firstName == "" || lastName == "" || zipCode == ""){
    //     console.log("error, missing field")
    //     return
    // }

    //Gets the lengths of each submitted text field
    var fNlength = firstName.length
    var lNlength = lastName.length
    var zClength = zipCode.length


        //Checks if there are any spaces in the first name field, will reset if there are any
        for(i = 0; i < fNlength; i++){
            if(firstName[i] == " "){
                alert("Error, spaces in name are not allowed")
                return
            }
        }

        //Checks if there are any spaces in the last name field, will reset if there are any
        for(i = 0; i < lNlength; i++){
            if(lastName[i] == " "){
                alert("Error, spaces in name are not allowed")
                return
            }
        }
        
        //Checks if the total character count between the first and last name are greater or less than 20, will reset if over 20 or either first or last equals 0
        if(fNlength + lNlength > 20){
         alert("Error, name is too long or no name is inserted, please shorten to abbreviate or insert a name")
         return
        }
        else if(fNlength == 0 || lNlength == 0){
            alert("No first or last name entered")
            return
        }
        else{
         //console.log("Valid Name")
         alert("Valid Name")
         //console.log(fNlength, lNlength)
        }
        
        //Checks if the zipcode length is 5, will reset if its over or under
        if(zClength == 5){
            //console.log("Valid zipcode")
            alert("Valid zipcode")
        }
        else{
            alert("Invalid Zipcode")
            return
        }

        //Secret
        alert("Welcome " + fullName)
        alert("Congrats on logging in with valid credentials, here is a secret for you~")
        alert("The secret is...")
        alert("That your zipcode is " + zipCode + "!")
        alert("Alright alright, fine, a real secret")
        alert("I am working on a passion project for an older teacher, a trip down memory lane.")
        alert("Look up the name Ink on discord, and catch my random streams at Inpusheen on Twitch.")
        alert("Was this a shameless plug?")
        alert("Yes, yes it was.")
}

function checkPalindrome(){
    const input = document.getElementById("Palindrome").value.toLowerCase() //Gets the input in the text box on the html
    const inputLength = input.length //Grabs the length of the input to check for spaces

    for(i = 0; i < inputLength; i++){ //Loop to check if there are any spaces within the input
        if(input[i] == " "){
            alert("No spaces allowed") //Will break the loop if there is a space in the program
            return
        }
    }

    let inputSplit = input.split("") //Splits the input into separate leters within ""
    var reverseInput = inputSplit.reverse() //Reverses the order of the separated letters above
    //let joinedReverse = reverseInput.join("")

    console.log(reverseInput.reverse().join("")) //Displays the joined reverse in the console

    if(input == reverseInput.reverse().join("").toLowerCase()){ //Checks if the input and the joined reverse are the same
        //console.log("Palindrome") //Displays in console if it is a palindrome
        alert("Palindrome") //Issues an alert that the input is a palindrome
    }
    else{
        //console.log("Not a Palindrome") //Displays in console if it isn't a palindrome
        alert("Not a Palindrome") //Issues an alert that the input is not a palindrome
    }
    
    //console.log(joinedReverse)
    //alert(joinedReverse)

}