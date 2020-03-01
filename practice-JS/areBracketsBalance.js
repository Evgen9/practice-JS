const areBracketsBalance = (str) => {
    let open=0,close=0;
    const count = str.length;
    for (let i=0; i<count;i++) {
       if (str[i]==="(") open++;
       if (str[i]===")") close++;
       if (close>open) return false;
    }

    if (open === close) return true;
    else return false;
    
}

console.log (areBracketsBalance (" "));
console.log (areBracketsBalance("(((()))))("));
