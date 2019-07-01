class Stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.stack=[];
        this.length=0;
    }

    peek(){
        if(this.length>0)
        console.log(this.top);
        else
        console.log("Stack is Empty");
        return this;
    }

    push(value){
        this.stack.unshift(value);
        this.top=this.stack[0];
        this.bottom=this.stack[this.length];
        this.length++;
        return this;
    }

    pop(){
      this.stack.shift();
      this.length--;
      this.top=this.stack[0];
      this.bottom=this.stack[this.length-1];
      return this;
    }

}

const myStack=new Stack();
myStack.push('Google');
myStack.push('Youtube');
myStack.push('Udemy');
myStack.pop();
myStack.peek();