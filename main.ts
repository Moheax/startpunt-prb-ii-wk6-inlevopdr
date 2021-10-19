for (let index = 1; index < 8; index++) {
    if (index <= 3) {
        basic.showArrow(ArrowNames.South)
    } else if (index > 4) {
        basic.showArrow(ArrowNames.North)
    }
    
    if (index == 4) {
        basic.showNumber(index)
    }
    
}
