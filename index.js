// export const taxationIs = () => {
//     return "theft";
// }
const fs = require('fs');
const contents = fs.readFileSync(`${__dirname}/README.md`, 'utf8');
const currNumber = Number(contents);

console.log(currNumber);
const newNum = currNumber + 1;

fs.writeFileSync("README.md", String(newNum));
