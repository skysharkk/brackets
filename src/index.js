module.exports = function check(str, bracketsConfig) {
    let strToArray = str.split('');
    let stack = [];
    let openBrackets = [];
    let closeBrackets = [];

    bracketsConfig.forEach(element => {
        if (element[0]) {
            openBrackets.push(element[0]);
        }
        if (element[1]) {
            closeBrackets.push(element[1]);
        }
    });

    for (let i = 0; i < strToArray.length; i++) {
        let infexOfOpen = openBrackets.indexOf(strToArray[i]);
        let infexOfClose = closeBrackets.indexOf(strToArray[i]);

        if (infexOfOpen === infexOfClose) {

            if (stack[stack.length - 1] === infexOfOpen & stack.length > 0) {
                stack.pop();
            } else {
                stack.push(infexOfOpen);
            }
        }

        if (infexOfOpen != -1) {
            stack.push(infexOfOpen);
        }

        if (infexOfClose != -1) {
            indexOfOpen = stack.pop();

            if (indexOfOpen != infexOfClose) {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}




