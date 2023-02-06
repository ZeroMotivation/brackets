module.exports = function check(str, bracketsConfig) {
    let brackets = str.split('');
    let stack = [];
    let flag = true;
    brackets.forEach((b) => {
      let config = bracketsConfig.find((el) => el.includes(b));
      if(b === config[1] && stack[stack.length - 1] === config[0]) {
        stack.pop();
      }
      else if(b === config[0]){
        stack.push(b);
      }
      else {
        flag = false;
      }
    });
  return stack.length === 0 && flag;
}
