/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let head = new ListNode(1);

head.next = new ListNode(2);

console.log(head.next);

// var deleteDuplicates = function (head) {
//   return [1, 2, 3];
// };
