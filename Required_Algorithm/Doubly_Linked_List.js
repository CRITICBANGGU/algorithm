class LinkNode {
  constructor(data) {
    this.pre = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //head에 삽입
  insertHead(data) {
    if (this.size === 0) {
      this.head = new LinkNode(data);
      this.tail = this.head;
      this.size++;
      return;
    }
    const newNode = new LinkNode(data);
    newNode.next = this.head;
    this.head.pre = newNode;
    this.head = newNode;
    if (this.size === 1) {
      this.tail = newNode.next;
    }
    this.size++;
  }

  //tail에 삽입
  insertTail(data) {
    if (this.size === 0) {
      this.insertHead(data);
      return;
    }

    const newNode = new LinkNode(data);
    newNode.pre = this.tail;
    this.tail = newNode;
    this.size++;
  }

  //중간에 node 삽입하기
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("삽입 불가");
      return;
    }
    //index가 맨 0이면 맨 앞에 삽입
    if (index === 0) {
      this.insertHead(data);
    }
    //index가 해당 list의 길이와 같다면 맨 뒤에 삽입
    else if (index === this.size) {
      this.insertTail(data);
    }

    //중간에 삽입
    else {
      let current, previous;
      let count = 0;
      current = this.head;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      const newNode = new LinkNode(data);
      previous.next = newNode;
      newNode.pre = previous;
      current.pre = newNode;
      newNode.next = current;
      this.size++;
    }
  }

  //맨 앞에 있는 노드 삭제
  removeHead() {
    //비어있는 리스트일 경우
    if (this.size === 0) {
      console.log("reset List");
      return;
    }
    //리스트 안에 노드 1개 있을 경우
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      console.log("reset List");
      return;
    }
    //리스트 안에 노드 2개 이상 있을 경우
    this.head = this.head.next;
    this.head.pre.next = null;
    this.head.pre = null;
    this.size--;
    return;
  }
  //맨 뒤에 있는 노드 삭제

  //중간에 있는 노드 삭제

  //특정 노드에 있는 값 변경

  //index의 node값 불러오기 head에서 부터
  getNodeFromHeadAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    //맨 앞에 있는 값 가져오기
    if (this.size == 0) {
      console.log(this.head.data);
    }
    //맨 뒤에 있는 값 가져오기
    else if (this.size === index) {
      console.log(this.tail.data);
    }
    //중간에 있는 값 가져오기
    else {
      let current, previous;
      let count = 0;
      current = this.head;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      console.log(current.data);
    }
  }

  //index의 node값 불러오기 tail에서 부터
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insertHead(3);
doublyLinkedList.insertHead(2);
doublyLinkedList.insertHead(1);
doublyLinkedList.insertTail(0);
doublyLinkedList.getNodeFromHeadAt(4);
doublyLinkedList.insertAt(2.5, 2);
doublyLinkedList.getNodeFromHeadAt(3);
console.log(doublyLinkedList);
