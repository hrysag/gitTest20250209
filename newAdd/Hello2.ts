console.log('hello2');

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

function createList(input: number[]): ListNode | null {
    if (!input.length) return null;
    let head: ListNode = new ListNode(input[0]);
    let current: ListNode = head;
    for (let i: number = 1; i < input.length; i++) {
        current.next = new ListNode(input[i]);
        current = current.next;
    }
    console.log('List created', head);
    return head;
}

function swapList(head: ListNode | null): ListNode | null {
    const length = getListLength(head); 

    if (length < 2) { 
        return head;
    }

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const firstNode = curr;
        const secondNode = curr.next;
        //console.log('before swap:__','\n'+'firstNode_val:'+ firstNode.val'\n'+'secondNode_val:' secondNode.val+'\n'+'firstNode.next_val:'+firstNode.next.val+'\n'+'secondNode.next_val:'+secondNode.next.val);
       
        console.log(`\n--- 第 ${i + 1} 次交換 ---`);
        console.log(`交換前：`);
        console.log(`prev.next.val: ${prev.next?.val}`);
        console.log(`curr.val: ${curr.val}`); // 顯示 curr.val
        console.log(`firstNode.val: ${firstNode.val}`);
        console.log(`secondNode.val: ${secondNode.val}`);
        console.log(`firstNode.next?.val: ${firstNode.next?.val}`);
        console.log(`secondNode.next?.val: ${secondNode.next?.val}`);
        
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        prev = firstNode;
        curr = firstNode.next;

        console.log(`交換後：`);
        console.log(`prev.next.val: ${prev.next?.val}`);
        console.log(`curr.val: ${curr.val}`); // 顯示 curr.val
        console.log(`firstNode.val: ${firstNode.val}`);
        console.log(`secondNode.val: ${secondNode.val}`);
        console.log(`firstNode.next?.val: ${firstNode.next?.val}`);
        console.log(`secondNode.next?.val: ${secondNode.next?.val}`);
    }

    return dummy.next;
}

function checkLinkList(head: ListNode | null): number {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        console.log('checkLinkList_val', current.val, 'next_val', current.next?.val); // 使用 optional chaining
        current = current.next;
    }
    return length;
}



function getListLength(head: ListNode | null): number {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    return length;
}

function printList(head: ListNode | null): void {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

let head: ListNode | null = createList([1, 2, 3, 4, 5]);
checkLinkList(head);
head = swapList(head);