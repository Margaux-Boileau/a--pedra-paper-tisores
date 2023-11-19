input.onButtonPressed(Button.A, function () {
    printFigure(1)
})
input.onButtonPressed(Button.AB, function () {
    printFigure(3)
})
input.onButtonPressed(Button.B, function () {
    printFigure(2)
})
input.onGesture(Gesture.Shake, function () {
    printFigure(randint(1, 3))
})
function printFigure (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . . . . #
            . # . # .
            # . # . .
            . # . # .
            . . . . #
            `)
    }
    basic.clearScreen()
}
