

function validParenthesis(str) {

    let pMap = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    const pStack = [ ];   //store the opening parenthesis in stack for compare later .

    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {

            pStack.push(str[i]);

        } else {
            if (pMap[str[i]] !== pStack.pop()) {
             
                return false

            }

        }

    }


    if(pStack.length !== 0 ) return false ; 

    return true;
}



let res = validParenthesis("([])"); //true 

console.log(res);  