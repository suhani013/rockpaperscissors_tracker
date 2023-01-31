def on_button_pressed_a():
    global player_a, rounds
    basic.show_string("A")
    basic.clear_screen()
    player_a += 1
    rounds += 1
    update_scoreboard()
input.on_button_pressed(Button.A, on_button_pressed_a)

def update_scoreboard():
    OLED.clear()
    OLED.write_string_new_line("player A: " + str(player_a))
    OLED.new_line()
    OLED.write_string_new_line("player B: " + str(player_b))
    OLED.new_line()
    OLED.write_string_new_line("ties: " + str(ties))
    OLED.new_line()
    OLED.write_string_new_line("rounds " + str(rounds))

def on_button_pressed_ab():
    global rounds
    basic.show_string("T")
    basic.clear_screen()
    rounds += 1
    update_scoreboard()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global player_b, rounds
    basic.show_string("B")
    basic.clear_screen()
    player_b += 1
    rounds += 1
    update_scoreboard()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    reset()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def reset():
    global ties, player_b, player_a, rounds
    OLED.init(128, 64)
    OLED.write_string_new_line("New Game Loaded")
    ties = 0
    player_b = 0
    player_a = 0
    rounds = 0
    basic.pause(2000)
    update_scoreboard()
ties = 0
player_b = 0
rounds = 0
player_a = 0
reset()