//LIFO (Last In First Out)

class Heap {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  //내보내기
  pop() {
    console.log(this.arr[this.index]);
    this.arr[this.index] = null;
    this.index--;
    return;
  }
  //넣기
  push(data) {
    this.index++;
    this.arr[this.index] = data;
    console.log(this.arr[this.index]);
    return;
  }

  allPop() {
    if (this.index === 0) {
      console.log("empty!");
      return;
    }
    while (this.index) {
      this.pop();
    }
  }
}

const heap = new Heap();
heap.push(0);
heap.push(1);
heap.push(2);
heap.allPop();
