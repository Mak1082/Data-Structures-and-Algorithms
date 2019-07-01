class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
  }
  push(value){
    const newNode=new Node(value);
    if(this.length==0)
    {
      this.top=newNode;
      this.bottom=newNode;
    }
    else
    {
      const holdPointer=this.top;
      this.top=newNode;
      this.top.next=holdPointer;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.top){
      return null;
    }
    if(this.top==this.bottom){
      this.bottom=null;
    }
    //const holdPointer=this.top;
    //the above line is written to keep track of the stack.
    this.top=this.top.next;
    this.length--;
    return this;
  }

  printStack(){
    let values=[]
    let currentNode=this.top;
    while(currentNode){
      values.push(currentNode.value);
      currentNode=currentNode.next;
    }
    console.log(values);
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Youtube');
myStack.push('Udemy');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();