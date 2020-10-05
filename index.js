const inputElement = document.getElementById('message-input')
const outputElement = document.getElementById('message-output')

inputElement.addEventListener("keyup", changeHandler)

let alfabetet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"]
let morsealfabetet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
"-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
let förbjudnaOrd = ["pillesnopp", "bajskorv", "dumstrut"]
let sensureradeUrd =["pille****", "ba**korv", "du**trut"]

function changeHandler (event) {
    const text = event.target.value

    outputElement.innerText = makeBiger(text)
}

function makeBig (str){
    return str.toUpperCase()
}
function makeBiger(str){
    let nyArray = str.split(" ")
    let newstr = ""

    for (let i = 0; i < nyArray.length; i++) {
        newstr = newstr + " " + nyArray[i] + "!" 
    }
    return newstr.toUpperCase()
    
}

function förskjut(str){
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        newstr = newstr + alfabetet[alfabetet.indexOf(str[i])+3]
        console.log( alfabetet.indexOf(str[i]))
        
    }
    return newstr
    
}
function morse(str){
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        newstr = newstr + " " + morsealfabetet[alfabetet.indexOf(str[i])]      
    }
    return newstr
    
}
function dubbelord(str){
    let nyArray = str.split(" ")
    let newstr = ""

    for (let i = 0; i < nyArray.length; i++) {
        newstr = newstr + " " + nyArray[i] + " " + nyArray[i]  
    }
    return newstr
   
}

function sensorera(str){
    let nyArray = str.split(" ")
    let newstr = ""

    for (let i = 0; i < nyArray.length; i++) {
        
        newstr = newstr + " " + ärSensoreraord(nyArray[i] )  
    }
    return newstr
   
}
function ärSensoreraord(str,ord){
    for (let i = 0; i < förbjudnaOrd.length; i++) {
          
        if (str == förbjudnaOrd[i]){
            return sensureradeUrd[i]
        }      
    }
    return st
}
