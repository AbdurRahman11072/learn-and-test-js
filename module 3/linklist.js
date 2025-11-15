// * create a structure for Node it will act like a piller in the linkList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkList {
  // !---start ---
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //* add node to the end of the linkList and add tail
  append(value) {
    const newNode = new Node(value); //* create a node

    //* if the head is empty
    if (this.head === null) {
      this.head = newNode; //* assign newNode to the head
      this.tail = newNode; //* assign newNode to the tail
    } else {
      this.tail.next = newNode; //* if the head already exist then connect the newNode to the previous Node
      this.tail = newNode; //* reassign newNode to the tail
    }
    this.length++;
  }

  //* add newNode to the Starting point of the Link list
  prepend(value) {
    const newNode = new Node(value); //* create a node

    //* if the head is empty
    if (this.head === null) {
      this.head = newNode; //* assign newNode to the head
      this.tail = newNode; //* assign newNode to the tail
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  //* add node to the start, middle or end of the linkList
  insertItem(index, value) {
    if (index < 0 && index > this.length) {
      console.error("Muri Kha");
      return undefined;
    }
    //* if the insert is start
    if (index === 0) {
      this.prepend(value);
    }
    //* if the insert is end
    if (index === this.length) {
      this.append(value);
    }
    const leadingNode = this._navigateToIndex(index);
    const holdingNode = leadingNode.next;
    console.log(holdingNode.value);
    const newNode = new Node(value);

    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }

  //* find a node using index
  _navigateToIndex(index) {
    let Count = 0;
    //* if the insert is middle
    let currentNode = this.head;
    while (Count !== index - 1) {
      currentNode = currentNode.next;
      Count++;
    }
    return currentNode;
  }

  //* delete node form linkList
  remove(index) {
    if (index - 1 === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return;
    }
    if (index - 1 === this.length) {
      const previousNode = this._navigateToIndex(index - 1);
      this.tail = previousNode;
      this.length--;
      return;
    }
    const previousNode = this._navigateToIndex(index - 1);
    const nextNode = this._navigateToIndex(index + 1);
    console.log(previousNode.value);
    previousNode.next = nextNode;
    this.length--;
  }
  //* Show the linkList
  print() {
    const arr = [];
    let currentNode = this.head; // Added 'let' keyword here
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Length: ", this.length);

    console.log(arr.join("->"), `-> null`);
  }

  //! ---end---
}

const LinkList = new linkList();

LinkList.append(1);
LinkList.append(2);
LinkList.append(3);
LinkList.append(4);
LinkList.prepend(5);
LinkList.insertItem(4, 50);
LinkList.remove(6);
LinkList.print();
