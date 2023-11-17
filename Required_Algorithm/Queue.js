class QueueArray {
  constructor() {
    this.items = [];
  }
  //넣기
  enqueue(item) {
    this.items.push(item);
  }

  //빼기
  dequeue() {
    return this.items.shift();
  }

  //맨 앞에 있는 값 표시
  peek() {
    console.log("this array first item : " + this.items[0]);
  }

  //배열 크기 표시
  getSize() {
    return this.items.length;
  }

  //비어있는 배열인지 확인
  isEmpty() {
    return this.items.length === 0;
  }
}

const queueArray = new QueueArray();

queueArray.enqueue(1);
queueArray.enqueue(2);
queueArray.enqueue(3);

queueArray.getSize();
queueArray.isEmpty();
queueArray.peek();
console.log("getSize :" + queueArray.getSize());
console.log(queueArray.dequeue());
console.log("getSize :" + queueArray.getSize());
console.log(queueArray.dequeue());
console.log(queueArray.dequeue());
console.log("getSize :" + queueArray.getSize());
console.log(queueArray.isEmpty());
