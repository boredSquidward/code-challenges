export class Node {
  val: number | null;
  next: Node | null;

  constructor(val: number | null) {
    this.next = null;
    this.val = val;
  }
}
