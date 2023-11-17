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
  removeTail() {
    if (this.size === 0) {
      console.log("reset List");
      return;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      console.log("reset List");
      return;
    }
    this.tail = this.tail.pre;
    this.tail.next = null;
    this.size--;
  }

  //중간에 있는 노드 삭제
  removeNodeAt(index) {
    let current, previous;
    let count = 0;
    current = this.head;
    if (index === 0) {
      this.removeHead();
      return;
    }
    if (index === this.size - 1) {
      this.removeTail();
      return;
    }
    if (index >= this.size) {
      return;
    }
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    previous.next = current.next;
    current.next.pre = previous;
    this.size--;
  }

  //특정 노드에 있는 값 변경
  changeData(data, index) {
    let previous, current;
    let count = 0;
    current = this.head;

    if (index < 0) {
      return;
    }

    if (index === 0) {
      console.log("before data :" + current.data);
      current.data = data;
      console.log("after data :" + current.data);
      return;
    }

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    console.log("before data :" + current.data);
    current.data = data;
    console.log("after data :" + current.data);
    return;
  }

  //index의 node값 불러오기 head에서 부터
  getNodeFromHeadAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    //맨 앞에 있는 값 가져오기
    if (this.size == 0) {
      return this.head.data;
    }
    //맨 뒤에 있는 값 가져오기
    else if (this.size - 1 === index) {
      return this.tail.data;
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
      return current.data;
    }
  }

  //index의 node값 불러오기 tail에서 부터
  getNodeFromTailAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    //맨 앞에 있는 값 가져오기
    if (this.size == 0) {
      return this.head.data;
    }
    //맨 뒤에 있는 값 가져오기
    if (this.size - 1 === index) {
      return this.head.data;
    } else {
      let current, previous;
      let count = 0;

      current = this.tail;
      while (count < index) {
        previous = current.pre;
        count++;
        current = current.pre;
      }
      return current.data;
    }
  }

  //list 안에 있는 모든 node 데이터 출력하기
  getAllNodeDataFromHead() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      console.log("all nodes data from head");
      console.log(this.head.data);
      return;
    } else {
      let count = 0;
      console.log("all nodes data from head");
      while (count < this.size) {
        console.log(this.getNodeFromHeadAt(count) + "->");
        count++;
      }
    }
  }
  getAllNodeDataFromTail() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      console.log("all nodes data from tail");
      console.log(this.head.data);
      return;
    } else {
      let count = 0;
      console.log("all nodes data from tail");
      while (count < this.size) {
        console.log(this.getNodeFromTailAt(count) + "->");
        count++;
      }
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insertHead(3);
//3->
doublyLinkedList.insertHead(2);
//2->3->
doublyLinkedList.insertHead(1);
//1->2->3->
doublyLinkedList.insertTail(4);
//1->2->3->4->
doublyLinkedList.insertAt(2.5, 2);
//1->2->2.5->3->4->
doublyLinkedList.getAllNodeDataFromHead();
//head->1->2->2.5->3->4->tail
doublyLinkedList.getAllNodeDataFromTail();
//tail->4->3->2.5->2->1->head
console.log(doublyLinkedList.getNodeFromHeadAt(3));
//3
doublyLinkedList.removeHead();
//head->2->2.5->3->4->tail
doublyLinkedList.removeTail();
//head->2->2.5->3->tail
doublyLinkedList.changeData(100, 1);
//head->2->100->3->tail
doublyLinkedList.removeNodeAt(2);
//head->2->100->tail
