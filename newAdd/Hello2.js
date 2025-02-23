console.log('hello2');
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
function createList(input) {
    if (!input.length)
        return null;
    var head = new ListNode(input[0]);
    var current = head;
    for (var i = 1; i < input.length; i++) {
        current.next = new ListNode(input[i]);
        current = current.next;
    }
    console.log('List created', head);
    return head;
}
function swapList(head) {
    var _a, _b, _c, _d, _e, _f;
    var length = getListLength(head);
    if (length < 2) {
        return head;
    }
    var dummy = new ListNode(0);
    dummy.next = head;
    var prev = dummy;
    var curr = head;
    for (var i = 0; i < Math.floor(length / 2); i++) {
        var firstNode = curr;
        var secondNode = curr.next;
        //console.log('before swap:__','\n'+'firstNode_val:'+ firstNode.val'\n'+'secondNode_val:' secondNode.val+'\n'+'firstNode.next_val:'+firstNode.next.val+'\n'+'secondNode.next_val:'+secondNode.next.val);
        console.log("\n--- \u7B2C ".concat(i + 1, " \u6B21\u4EA4\u63DB ---"));
        console.log("\u4EA4\u63DB\u524D\uFF1A");
        console.log("prev.next.val: ".concat((_a = prev.next) === null || _a === void 0 ? void 0 : _a.val));
        console.log("curr.val: ".concat(curr.val)); // 顯示 curr.val
        console.log("firstNode.val: ".concat(firstNode.val));
        console.log("secondNode.val: ".concat(secondNode.val));
        console.log("firstNode.next?.val: ".concat((_b = firstNode.next) === null || _b === void 0 ? void 0 : _b.val));
        console.log("secondNode.next?.val: ".concat((_c = secondNode.next) === null || _c === void 0 ? void 0 : _c.val));
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        prev = firstNode;
        curr = firstNode.next;
        console.log("\u4EA4\u63DB\u5F8C\uFF1A");
        console.log("prev.next.val: ".concat((_d = prev.next) === null || _d === void 0 ? void 0 : _d.val));
        console.log("curr.val: ".concat(curr.val)); // 顯示 curr.val
        console.log("firstNode.val: ".concat(firstNode.val));
        console.log("secondNode.val: ".concat(secondNode.val));
        console.log("firstNode.next?.val: ".concat((_e = firstNode.next) === null || _e === void 0 ? void 0 : _e.val));
        console.log("secondNode.next?.val: ".concat((_f = secondNode.next) === null || _f === void 0 ? void 0 : _f.val));
    }
    return dummy.next;
}
function checkLinkList(head) {
    var _a;
    var length = 0;
    var current = head;
    while (current) {
        length++;
        console.log('checkLinkList_val', current.val, 'next_val', (_a = current.next) === null || _a === void 0 ? void 0 : _a.val); // 使用 optional chaining
        current = current.next;
    }
    return length;
}
function getListLength(head) {
    var length = 0;
    var current = head;
    while (current) {
        length++;
        current = current.next;
    }
    return length;
}
function printList(head) {
    var current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}
var head = createList([1, 2, 3, 4, 5]);
checkLinkList(head);
head = swapList(head);
