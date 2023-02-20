/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class Node {
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next)
    current.val == current.next.val
      ? (current.next = current.next.next)
      : (current = current.next);

  return head;
};

const a = new Node(1);
const b = new Node(1);
const c = new Node(2);
const d = new Node(2);
const e = new Node(3);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(deleteDuplicates(a));
