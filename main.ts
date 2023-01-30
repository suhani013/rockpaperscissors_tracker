input.onButtonPressed(Button.A, function () {
	
})
function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A: " + player_a)
    OLED.newLine()
    OLED.writeStringNewLine("player B: " + player_b)
    OLED.newLine()
    OLED.writeStringNewLine("ties: " + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds " + rounds)
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let rounds = 0
let player_a = 0
let player_b = 0
let ties = 0
OLED.init(128, 64)
OLED.writeStringNewLine("New Game Loaded")
ties = 0
player_b = 0
player_a = 0
rounds = 0
basic.pause(2000)
update_scoreboard()
