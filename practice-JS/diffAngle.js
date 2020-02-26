const diff = (x,y) => {
    if (Math.abs(x-y) <=180) return Math.abs(x-y);
    else  return 360 - Math.abs(x-y);
}

console.log (diff (360,200));
console.log (diff (0,45));
console.log (diff (70,120));
console.log (diff (0,190));