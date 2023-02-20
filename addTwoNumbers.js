/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node {
  constructor(val, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let result = new Node();

  let curr1 = l1;
  let curr2 = l2;

  let dummy = result;
  let carry = 0;
  let sum = 0;

  while (curr1 || curr2 || carry) {
    sum = (curr1 ? curr1.val : 0) + (curr2 ? curr2.val : 0) + carry;

    if (sum < 10) {
      dummy.val = sum;
      carry = 0;
    } else {
      dummy.val = sum - 10;
      carry = 1;
    }

    if (curr1) curr1 = curr1.next;
    if (curr2) curr2 = curr2.next;

    if (carry && !curr1 && !curr2) {
      dummy.next = new Node();
      dummy.next.val = carry;
      carry = 0;
      return result;
    } else if (!carry && !curr1 && !curr2) {
      return result;
    }

    dummy.next = new Node();
    dummy = dummy.next;
  }

  return result;
};

const l1 = new Node(9);
l1.next = new Node(9);
l1.next.next = new Node(9);
l1.next.next.next = new Node(9);
l1.next.next.next.next = new Node(9);
l1.next.next.next.next.next = new Node(9);
l1.next.next.next.next.next.next = new Node(9);

const l2 = new Node(9);
l2.next = new Node(9);
l2.next.next = new Node(9);
l2.next.next.next = new Node(9);

const l3 = new Node(2);
l3.next = new Node(4);
l3.next.next = new Node(3);

const l4 = new Node(5);
l4.next = new Node(6);
l4.next.next = new Node(4);

console.log(addTwoNumbers(l1, l2));
