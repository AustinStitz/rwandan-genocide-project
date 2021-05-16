const fs = require('fs');

const template = (number) => {
  let offset = (number - 3) * 50;
  return `
  .slant-top:nth-child(${number}), .slant-bot:nth-child(${number}) {
    top: calc(${(number - 1) * 50}% ${offset>0?'+':'-'} ${Math.abs(offset)}px);
  }`
};


let code = "/* Auto-generated position data */";
for(let i = 0; i < 12; i++) {
  const num = i + 2;
  code += template(num);
}

fs.writeFileSync("positions.css", code);
