def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

OLED.init(128, 64)
OLED.write_string_new_line("New Game Loaded")
ties = 0
player_b = 0
player_a = 0
rounds = 0