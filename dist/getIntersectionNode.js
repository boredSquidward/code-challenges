"use strict";
class ListNode {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}
const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB)
        return null;
    if (headA === headB)
        return headA;
    let currA = headA;
    let currB = headB;
    let lengthA = 0;
    let lengthB = 0;
    let diff = 0;
    let shorterList;
    let longerList;
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
        }
        else {
            diff = -diff;
            shorterList = currA;
            longerList = currB;
        }
    };
    const equalizeLengths = () => {
        if (diff !== 0) {
            let prev = new ListNode(0);
            for (let i = 0; i < diff; i++) {
                prev.next = shorterList;
                shorterList = prev;
                prev = new ListNode(0);
            }
        }
    };
    const determineIntersectedNote = () => {
        while (shorterList !== longerList) {
            if (shorterList)
                shorterList = shorterList.next;
            if (longerList)
                longerList = longerList.next;
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
console.log(getIntersectionNode(a1, a1));
