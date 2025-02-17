var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('hello world');
function add(a, b) {
    console.log(a + b);
}
function theotherfunction() {
    console.log('this is the other function---20250209');
}
function todayNewFunction() {
    console.log('this is the new function---20250209');
}
//add(1, 2);
function generateParenthesis(n) {
    var result = [];
    function backtrack(current, left, right) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (left < n) {
            backtrack(current + "(", left + 1, right);
        }
        if (right < left) {
            backtrack(current + ")", left, right + 1);
        }
    }
    backtrack("", 0, 0);
    return result;
}
//generateParenthesis(3); 
function generateParenthesis2(n) {
    var result = [];
    var stack = [{ str: "", left: 0, right: 0 }];
    while (stack.length > 0) {
        var _a = stack.pop(), str = _a.str, left = _a.left, right = _a.right;
        if (str.length === 2 * n) {
            result.push(str);
            console.log('str.length === 2 ', result);
        }
        else {
            if (left < n) {
                stack.push({ str: str + "(", left: left + 1, right: right });
                console.log('left < n', stack);
            }
            if (right < left) {
                stack.push({ str: str + ")", left: left, right: right + 1 });
                console.log('right < left', stack);
            }
        }
    }
    return result;
}
function generateParenthesis3(n) {
    var result = [];
    var stack = [{ chars: [], left: 0, right: 0 }];
    while (stack.length > 0) {
        var _a = stack.pop(), chars = _a.chars, left = _a.left, right = _a.right;
        if (chars.length === 2 * n) {
            result.push(chars.join(""));
        }
        else {
            if (left < n) {
                stack.push({ chars: __spreadArray(__spreadArray([], chars, true), ["("], false), left: left + 1, right: right });
            }
            if (right < left) {
                stack.push({ chars: __spreadArray(__spreadArray([], chars, true), [")"], false), left: left, right: right + 1 });
            }
        }
    }
    return result;
}
console.log('final_', generateParenthesis3(2));
