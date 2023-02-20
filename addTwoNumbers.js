/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let result = { ...l1 };
  const arr1 = [];
  const arr2 = [];

  while (l1 && l2) {
    arr1.push(l1.value);
    arr2.push(l2.value);

    l1 = l1.next;
    l2 = l2.next;
  }

  let num1 = "";
  let num2 = "";

  for (let i = 0; i < arr1.length; i++) {
    num1 = num1 + `${arr1[i]}`;
  }

  for (let i = 0; i < arr2.length; i++) {
    num2 = num2 + `${arr2[i]}`;
  }

  num1 = Number.parseInt(num1);
  num2 = Number.parseInt(num2);

  let num3 = num1 + num2;
  num3 = num3.toString().split("").reverse();

  for (let i = 0; i < num3.length; i++) {
    result.value = Number.parseInt(num3[i]);
    result = result.next;
  }

  return result;
};

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);

const l2 = new ListNode(3);
l2.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));
