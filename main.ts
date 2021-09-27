basic.showString("SPECIMEN BEACON")
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendString("1")
    basic.showString("S")
    basic.pause(500)
})
