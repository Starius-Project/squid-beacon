basic.showString("SPECIMEN BEACON")
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendString("1")
    basic.showString("S")
    basic.pause(500)
})
