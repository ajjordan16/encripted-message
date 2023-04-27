input.onButtonPressed(Button.A, function () {
    if (Pos == 25) {
        Pos = 0
    } else {
        Pos += 1
    }
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString("" + (alphabet[alphabet.indexOf(receivedString) - Key]))
})
input.onButtonPressed(Button.B, function () {
    if (Pos == 0) {
        Pos = 25
    } else {
        Pos += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Pos + Key > 25) {
        radio.sendString("" + (alphabet[0]))
    } else {
    	
    }
})
let alphabet: string[] = []
let Pos = 0
let Key = 0
let PosKey = 0
Key = 3
Pos = 0
radio.setGroup(1)
radio.sendNumber(0)
alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.forever(function () {
    basic.showString("" + (alphabet[Pos]))
    PosKey = Pos + Key
})
