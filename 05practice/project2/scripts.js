const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBGColor = (selectedColor) => {
    return window.getComputedStyle(selectedColor).backgroundColor;
}

// const color = getBGColor(cyan);

// cyan.addEventListener('click', () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
            center.style.background = color;
           });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));

/*

    mekedi apita getComputedStyle kiyn function ekedi 

        css wala        computedStye
    background-color    backgroundColor
    font-family         fontFamily

    menna me widiyta tamai me deke wenasa wenne... computed style wala camelCase eka tamai use wenne css command ekama...

    me computed style ekedi css wala tyena okkoma styles tyenwa

    meken js wala deela tyena effects apita gnna puluwn...

*/