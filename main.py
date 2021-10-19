for index in range(1,8):
    if index <= 3:
        basic.show_arrow(ArrowNames.SOUTH)
    elif index > 4:
        basic.show_arrow(ArrowNames.NORTH)
    if index == 4:
        basic.show_number(index)