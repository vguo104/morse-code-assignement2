input.onButtonPressed(Button.A, function () {
    SendLetter = "" + SendLetter + "."
    basic.showString(SendLetter)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(SendLetter)
    SendLetter = ""
})
input.onButtonPressed(Button.B, function () {
    SendLetter = "" + SendLetter + "-"
    basic.showString(SendLetter)
})
radio.onReceivedStringDeprecated(function (receivedString) {
    basic.showString("" + (receivedString))
    SendLetter = ""
})
let SendLetter = ""
radio.setGroup(1)
SendLetter = ""
let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "----..", "-----"]
let alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "u", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
