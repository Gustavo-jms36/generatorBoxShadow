let elem = document.getElementById("square");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
    let hShadow = document.getElementById("h-shadow").value;
    let vshadow = document.getElementById("v-shadow").value;
    let blurRadius = document.getElementById("blur-radius").value;
    let spreadRadius = document.getElementById("spread-radius").value;
    let shadowColor = document.getElementById("shadow-color").value;
    let colorOpacity = document.getElementById("shadow-color-opacity").value;
    let shadowInset = document.getElementById("shadow-inset").checked;

    let boxShadow = shadowInset ? `inset ${hShadow}px ${vshadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, colorOpacity)}` : `${hShadow}px ${vshadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, colorOpacity)}`

    elem.style.boxShadow = boxShadow;
    code.textContent = `box-shadow: ${boxShadow};`;
}

function hexToRgba(shadowColor, colorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${colorOpacity})`;
}

window.onload = generateShadow();