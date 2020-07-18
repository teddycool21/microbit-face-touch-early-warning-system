basic.forever(function () {
    if (input.acceleration(Dimension.X) >= 1000) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
    } else {
        if (input.acceleration(Dimension.Y) >= 800) {
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
        } else {
            if (input.acceleration(Dimension.Z) >= 550) {
                basic.showIcon(IconNames.Sad)
                basic.pause(1000)
            } else {
                basic.clearScreen()
            }
            basic.clearScreen()
        }
    }
})
