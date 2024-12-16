var totalcookies = 0;
var clickpower = 1;
var costToupgrade = 50;

var gamewon = false;

//AutoMatic
var autOn = false;
var AutoPower = 0;
var AutoUpgradeCost = 10

//Checks if the players cookies satisfies the win condition per click and auto click
function CheckWinCondition(){

    if(totalcookies >= 5000 && gamewon == false){
        gamewon = true
        alert("Congradulations, you made 5 Thousand Cookies, you win!")
    }

}

//Upgrades the players click power by 1-5 and subtracts the players cookies by the upgrade cost and then raises the cost
function UpgradeClick(){
    if(totalcookies >= costToupgrade){
        totalcookies = totalcookies - costToupgrade
        var upgrade =  (Math.floor((Math.random() * 5) + 1))
        clickpower = clickpower + upgrade;
        console.log(upgrade)
        costToupgrade = costToupgrade + (Math.round(costToupgrade * 0.25))

        document.getElementById("TotalCookie").innerHTML = totalcookies
        document.getElementById("CosttoUpgrade").innerHTML = "Cost to Upgrade Click: " + costToupgrade
        document.getElementById("CurPower").innerHTML = "Current Baking Power: " + clickpower
    }
}

//Button for the player to click that gives them set cookies based on their click power
function Click(){
    totalcookies = totalcookies + clickpower

    document.getElementById("TotalCookie").innerHTML = totalcookies

    CheckWinCondition()
}

//Automatically gives x amount of cookies based on auto power every 2 seconds once activated
function AutoCookie(){
    
    totalcookies = totalcookies + AutoPower

    document.getElementById("TotalCookie").innerHTML = totalcookies

    CheckWinCondition()

    setTimeout(AutoCookie, 2000)
    
    //AutoCookie()

}


//Upgrades the auto cookie power
function UpgradeAutoCookie(){

    if(totalcookies >= AutoUpgradeCost){
        totalcookies = totalcookies - AutoUpgradeCost
        AutoPower = AutoPower + 2
        AutoUpgradeCost = AutoUpgradeCost + (Math.round(AutoUpgradeCost * 0.25))

        document.getElementById("TotalCookie").innerHTML = totalcookies
        document.getElementById("AutoText").innerHTML = "Current Auto Power: " + AutoPower + " Cost to Upgrade: " + AutoUpgradeCost
    }

    if(autOn == true) return;
    autOn = true;
    AutoCookie()
}