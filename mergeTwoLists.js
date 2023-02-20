class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  const l1 = list1.val <= list2.val ? list1 : list2;
  const l2 = list1.val <= list2.val ? list2 : list1;

  let current = l1;
  let index = l2;

  let next = current.next;
  let prev = null;

  while (current && index) {
    if (!next) {
      current.next = index;
      return l1;
    }

    if (index.val <= next.val) {
      current.next = index;
      prev = current;
      current = index;
      index = index.next;
    } else {
      current.next = next;
      prev = current;
      current = next;
      next = current.next;
    }
  }

  if (!index && next) {
    current.next = next;
    prev = current;
    current = next;
    next = current.next;
  }

  return l1;
};

const list1 = new Node(5);
// list1.next = new Node(2);
// list1.next.next = new Node(4);

const list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = new Node(4);

console.log(mergeTwoLists(list1, list2));
