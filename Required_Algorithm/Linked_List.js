class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //맨 앞에 노드 삽입
  insertFirst(data) {
    if (this.head == null) {
      this.head = new ListNode(data);
    } else {
      const node = new ListNode(data);
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //맨 뒤에 노드 삽입
  insertLast(data) {
    let node = new ListNode(data);
    let current;
    //만약 list가 비어있다면?
    if (!this.head) {
      this.head = node;
      this.size++;
    }
    //list가 비어있지 않다면?
    else {
      //가장 첫 node를 할당하고
      current = this.head;

      //첫 node부터 탐색한다. 마지막 node가 가르키는 node가 없을 때 까지
      while (current.next) {
        current = current.next;
      }
      //마지막 노드가 새로 들어오는 node를 가르키도록 할당
      current.next = node;
      this.size++;
    }
  }

  //중간에 노드 삽입
  insertAt(data, index) {
    //삽입하고자 하는 Index 범위 확인, 0미만, list size 초과면 아무것도 리턴하지 않음
    if (index < 0 || index > this.size) {
      console.log(
        "[index 값 오류] 현재 list의 크기는 다음과 같습니다 : " + this.size
      );
      return;
    }

    //맨앞에 삽입할 경우
    if (index == 0) {
      this.insertFirst(data);
    }
    //맨뒤에 삽입할 경우
    else if (index == this.size) {
      this.insertLast(data);
    }
    //중간에 삽입할 경우
    else {
      const node = new ListNode(data);
      let current, previous;

      current = this.head;
      let count = 0;

      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }

      node.next = current;
      previous.next = node;

      this.size++;
    }
  }

  //index에 있는 데이터 가져오기
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
        //사실 여기서 return current.data 해야하는게 맞음
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //index에 있는 노드 지우기
  removeAt(index) {
    if (index < 0 || index > this.size) {
      console.log(
        "[index 값 오류] 현재 list의 크기는 다음과 같습니다 : " + this.size
      );
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  //list 초기화 하기
  clearList() {
    this.head = null;
    this.size = 0;
  }
  //list data 출력하기
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 1);

linkedList.removeAt(2);

linkedList.getAt(2);

linkedList.printListData();
