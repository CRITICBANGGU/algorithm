class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueObject {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  isEmpty() {
    return this.front === null && this.rear === null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
  }

  remove() {
    //비어있는지
    if (this.isEmpty()) {
      console.log("empty");
      return;
    }

    this.front = this.front.next;
  }

  peekFront() {
    if (this.isEmpty()) {
      console.log("empty!");
      return;
    }
    console.log("front : " + this.front.data);
  }

  display() {
    //비어있을때
    if (this.isEmpty()) {
      console.log("empty!");
      return;
    }
    //비어있지 않을 떄
    let current;
    current = this.front;
    console.log("[front]");
    while (current !== this.rear) {
      console.log(current.data + "->");
      current = current.next;
    }
    console.log(current.data + "\n[rear]");
    return;
  }
}

const queueObject = new QueueObject();

queueObject.display();
queueObject.insert(1);
queueObject.peekFront();
queueObject.insert(2);
queueObject.remove();
queueObject.insert(3);
queueObject.insert(4);
queueObject.display();
