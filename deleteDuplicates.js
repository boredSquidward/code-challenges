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

var deleteDuplicates = function (head) {
  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return currentNode;
};

const head = new ListNode(1);

head.next = new ListNode(1);

head.next.next = new ListNode(2);

head.next.next.next = new ListNode(3);

head.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(head));
