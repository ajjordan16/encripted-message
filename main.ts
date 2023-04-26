input.onButtonPressed(Button.A, function () {
    Pos += 1
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Pos += -1
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (alphabet[Pos]))
})
let Pos = 0
let alphabet: string[] = []
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
"z",
"_"
]
radio.setGroup(1)
Pos = 0
basic.forever(function () {
    basic.showString("" + (alphabet[Pos]))
})
