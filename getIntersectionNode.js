/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  let currA = headA;
  let currB = headB;

  let lengthA = 0;
  let lengthB = 0;
  let diff = 0;

  let shorterList = null;
  let longerList = null;

  const determineLengthDifference = () => {
    while (currA || currB) {
      if (currA) {
        currA = currA.next;
        lengthA++;
      }

      if (currB) {
        currB = currB.next;
        lengthB++;
      }
    }
  };

  const resetMemories = () => {
    currA = headA;
    currB = headB;
  };

  const determineShorterAndLongerLists = () => {
    diff = lengthA - lengthB;

    if (diff >= 0) {
      shorterList = currB;
      longerList = currA;
    } else {
      diff = -diff;
      shorterList = currA;
      longerList = currB;
    }
  };

  const equalizeLengths = () => {
    if (diff !== 0) {
      let prev = new Node(0);

      for (let i = 0; i < diff; i++) {
        prev.next = shorterList;
        shorterList = prev;
        prev = new Node(0);
      }
    }
  };

  const determineIntersectedNote = () => {
    while (shorterList !== longerList) {
      if (shorterList) shorterList = shorterList.next;
      if (longerList) longerList = longerList.next;

      if (shorterList === longerList) {
        return longerList;
      }
    }
  };

  determineLengthDifference();
  resetMemories();
  determineShorterAndLongerLists();
  equalizeLengths();

  return determineIntersectedNote();
};

const a1 = new Node("a1");
// const a2 = new Node("a2");

// const b1 = new Node("b1");
// const b2 = new Node("b2");
// const b3 = new Node("b3");

// const c1 = new Node("c1");
// const c2 = new Node("c2");

// a1.next = a2;
// a2.next = c1;

// b1.next = b2;
// b2.next = c1;
// b3.next = c1;

// c1.next = c2;

console.log(getIntersectionNode(a1, a1));
