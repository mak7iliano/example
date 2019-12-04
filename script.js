let startDigit = 0;
let endDigit = 100;
let ourVariant;

while (!ourVariant) {
    let middleDigit = Math.round((startDigit + endDigit) / 2);
    const less = confirm(`Ваше число меньше ${middleDigit}?`);
    if (less) {
        endDigit = middleDigit;
    } else {
        const more = confirm(`Ваше число больше ${middleDigit}?`);
        if (more) {
            startDigit = middleDigit
        } else {
            alert(`Ваще число ${middleDigit}!`)
            ourVariant = true;
        }        
    }
}