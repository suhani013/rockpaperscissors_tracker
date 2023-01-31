input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.clearScreen()
    player_a += 1
    rounds += 1
    update_scoreboard()
})
function declare_winner () {
    if (rounds == 20) {
        if (player_a < player_b) {
            OLED.clear()
            OLED.writeStringNewLine("Player B Wins")
        }
        if (player_b < player_a) {
            OLED.clear()
            OLED.writeStringNewLine("Player A Wins")
        }
        if (player_b == player_a) {
            OLED.clear()
            OLED.writeStringNewLine("Tie")
        }
        basic.pause(5000)
        reset()
    }
}
function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A: " + player_a)
    OLED.newLine()
    OLED.writeStringNewLine("player B: " + player_b)
    OLED.newLine()
    OLED.writeStringNewLine("ties: " + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds " + rounds)
    declare_winner()
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.clearScreen()
    rounds += 1
    ties += 1
    update_scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.clearScreen()
    player_b += 1
    rounds += 1
    update_scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("New Game Loaded")
    ties = 0
    player_b = 0
    player_a = 0
    rounds = 0
    basic.pause(2000)
    update_scoreboard()
}
let ties = 0
let player_b = 0
let rounds = 0
let player_a = 0
reset()
