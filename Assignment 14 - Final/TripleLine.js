

//#region Create User

let userExits = false; //Bool to see if the user exists
let users = 0; //For firt time entries
let allusers = [] //Array to all users
let allowcreation = true; //If this is false, the user won't be made

function CreateUser(){
    allowcreation = true
    checkAvailability()
}

function checkAvailability(){
    //console.log("Running")
    let user = document.getElementById("Name").value //Grabs the currently inputted Username
    let upw = document.getElementById("UPassword").value //Grabs the currently inputted password

//First time creation in first section then multi[le accounts in section 2
if(users == 0){
    userExits = false; //Sets this to false automatically for first time creation

    checkInputs() //Ensures no spaces exist and that something has been inputted

    if(allowcreation == false) return //Will stop the code here if this condition is false

    let newuser = new User(user, upw) //Constructs the new user
    allusers.push(newuser) //Adds the new user to the array 

        // for(i = 0; i < allusers.length; i++){
        //     console.log(allusers[i].user)
        // }
    // Adds one to the users to make sure this piece of code doesn't rerun
    users++;
    
}
else{
    //Checks if the user already exists
    for(i = 0; i < allusers.length; i++){
        if(user == allusers[i].user){
            alert("User already exists")
            allowcreation = false;
        }
    }
        //Checks if creation is allowed, won't proceed if it is false
        if(allowcreation == false){
            
        }
        else{
        //create user
        //First check for spaces
        
        //Ensures no spaces exist and that something has been inputted
        checkInputs()
        
        //Constructs the user and adds them to the array
        let newuser = new User(user, upw)
        allusers.push(newuser)

        // for(i = 0; i < allusers.length; i++){
        //     console.log(allusers[i].user)
        // }
        }
    
        
    }
    
}

function checkInputs(){

    //Grabs the information for checks
    let user = document.getElementById("Name").value
    let upw = document.getElementById("UPassword").value

    //Sets the lengths of the user and pw to variables for checks
    let userlength = user.length
    let pwlength = upw.length

        //Checks if the lengths of either is 0 and will stop the program if triggered
        if(userlength == 0 || pwlength == 0){
            alert("Nothing inputted in username or password")
            allowcreation = false;
            return
        }

        //Checks if user has any spaces and will stop if it detects if there any
        for(i = 0; i < userlength; i++){
            if(user[i] == " "){
                alert("No spaces in user")
                allowcreation = false;
                return
            }
        }

        //Checks if password has any spaces and will stop if it detects if there any
        for(i = 0; i < pwlength; i++){
            if(upw[i] == " "){
                alert("No spaces in password")
                allowcreation = false
                return
            }
        }
}

//Class of User
class User{
    constructor(user, pw){
        this.user = user
        this.pw = pw
    }
}

//#endregion


//#region Tarot Cards

let objects = [] //Array of all created cards
let cancreate = true; //Boolean to decide if the card will be created

//Constructor of the Cards
class TarotCard{
    constructor(object, rarity){
        this.object = object,
        this.rarity = rarity
    }
}

function CreateCard(){
    let cardname = document.getElementById("CardName").value //Grabs the inputted card name
    let cardrarity = document.getElementById("CardRarity").value //Grabs the inputted card rarity
    cancreate = true; //Set automatically to be created if criteria is met

    for(i = 0; i < objects.length; i++){
        if(cardname == objects[i].object){
            cancreate = false //Will result false if the card has already been created
        }
    }

    if(cardname.length == 0 || cardrarity.length == 0){
        cancreate = false //Will result in false if either of the inputs have no input
    }

    checkSpaces(cardname, cardrarity) //Checks the inputs for any spaces

    if(cancreate == false){
        alert("Nothing inputted or space detected in name or rarity")
        return //stops the code if the condition is false
    }

    let card = new TarotCard(cardname, cardrarity) //Creates the new card class object

    objects.push(card) //Adds the card to the array

    let allcards = "" //Initially sets the card list to empty

    for(i = 0; i < objects.length; i++){
        //Adds to the string using the card array, breaking between each entry
        allcards = allcards + objects[i].object + ", " + objects[i].rarity + "<br/>"
    }

    document.getElementById("Cards").innerHTML = allcards //Sets the given text section with the cards
}

function checkSpaces(name, rarity){
    //Checks the name for spaces
    for(i = 0; i < name.length; i++){
        if(name[i] == " "){
            cancreate = false;
        }
    }

    //Checks the rarity of spaces
    for(i = 0; i < rarity.length; i++){
        if(rarity[i] == " "){
            cancreate = false
        }
    }
}

//#endregion

