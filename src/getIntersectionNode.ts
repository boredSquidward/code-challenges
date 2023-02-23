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

type ListNodeType = {
  next: ListNode | null;
  val: any;
};

class ListNode implements ListNodeType {
  next: ListNodeType | null;
  val: any;
  
  constructor(val: any) {
    this.next = null;
    this.val = val;
  }
}

interface IgetIntersectionNode {
  (headA: ListNode | null, headB: ListNode | null): ListNode | null;
}

const getIntersectionNode: IgetIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  let currA: ListNode | null = headA;
  let currB: ListNode | null = headB;

  let lengthA: number = 0;
  let lengthB: number = 0;
  let diff: number = 0;

  let shorterList: ListNode | null;
  let longerList: ListNode | null;

  const determineLengthDifference = (): void => {
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

  const resetMemories = (): void => {
    currA = headA;
    currB = headB;
  };

  const determineShorterAndLongerLists = (): void => {
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

  const equalizeLengths = (): void => {
    if (diff !== 0) {
      let prev = new ListNode(0);

      for (let i = 0; i < diff; i++) {
        prev.next = shorterList;
        shorterList = prev;
        prev = new ListNode(0);
      }
    }
  };

  const determineIntersectedNote = (): ListNode | null => {
    while (shorterList !== longerList) {
      if (shorterList) shorterList = shorterList.next;
      if (longerList) longerList = longerList.next;

      if (shorterList === longerList) {
        return longerList;
      }
    }

    return null;
  };

  determineLengthDifference();
  resetMemories();
  determineShorterAndLongerLists();
  equalizeLengths();

  return determineIntersectedNote();
};

const a1 = new ListNode("a1");
// const a2 = new ListNode("a2");

// const b1 = new ListNode("b1");
// const b2 = new ListNode("b2");
// const b3 = new ListNode("b3");

// const c1 = new ListNode("c1");
// const c2 = new ListNode("c2");

// a1.next = a2;
// a2.next = c1;

// b1.next = b2;
// b2.next = c1;
// b3.next = c1;

// c1.next = c2;

console.log(getIntersectionNode(a1, a1));
