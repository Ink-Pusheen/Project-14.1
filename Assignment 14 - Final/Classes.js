//#region Hatkid
class HatKid{
    constructor(pons, life, hats){
        this.pons = pons;
        this.life = life;
        this.hats = hats;
    }
    grabPon(){
        this.pons = this.pons + (Math.floor((Math.random() * 20) + 1))
        //console.log(Math.floor((Math.random() * 20) + 1))
        //this.pons++
        console.log("I now have " + this.pons + " pons")
    }
    loseLife(){
        this.life--;
        if(this.life <= 0){
            console.log("Game Over")
            this.life = 3;
        }
        else{
            console.log(this.life + " lives left")
        }
    }
    getHat(){
        if(this.hats < 6){
            this.hats++;
            console.log(this.hats + " Hats collected")
        }
        else{
            console.log("All Hats Unlocked")
        }
    }
}

var hatKid = new HatKid(0, 3, 1)

hatKid.grabPon()
hatKid.loseLife()
hatKid.getHat()
//#endregion

//#region Calico

class Cat{
    constructor(type, furcolors, eyecolor1, eyecolor2){
        this.type = type;
        this.furcolors = furcolors;
        this.eyecolor1 = eyecolor1;
        this.eyecolor2 = eyecolor2
    }
    displayEyeColors(){
        console.log("The left Eye is " + this.eyecolor1)
        console.log("The right Eye is " + this.eyecolor2)
    }
    whatCatAmI(){
        console.log("I am a " + this.type)
    }
    displayFurColors(){
        console.log("I have " + this.furcolors + " different fur colors")
    }
}

var Calico = new Cat("Calico", 3, "Blue", "Green")

Calico.displayEyeColors()
Calico.whatCatAmI()
Calico.displayFurColors()

//#endregion