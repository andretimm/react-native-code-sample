export function StatusBarColor(color, percent) {
    const first = parseInt(color.slice(1), 16);
    const black = first & 0x0000FF;
    const green = first >> 8 & 0x00FF;
    const percentage = percent < 0 ? percent * -1 : percent;
    const red = first >> 16;
    const theme = percent < 0 ? 0 : 255;
    const finalColor = (0x1000000 + (Math.round((theme - red) * percentage) + red) * 0x10000 + (Math.round((theme - green) * percentage) + green) * 0x100 + (Math.round((theme - black) * percentage) + black)).toString(16).slice(1);
    return `#${finalColor}`;
}


const Colors = {
    primary: '#86b300',
    primaryDark: StatusBarColor('#86b300', -0.3),
    secondary: '#6627cc',
}

export default Colors;