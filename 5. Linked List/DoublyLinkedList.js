//Doubly Linked List 

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
    this.previous=null;
  }
}

class DoublyLinkedList{
  constructor(value){
    this.head={ value:value, next:null, previous:null };
    this.length=1;
    this.tail=this.head;
  }

  append(value){
    const newNode=new Node(value);
    newNode.previous=this.tail;
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode=new Node(value);
    newNode.next=this.head;
    this.head.previous=newNode;
    this.head=newNode;
    this.length++;
    return this;
  }

  remove(index){
    let currentNode=this.head,i=0;
    while(i!=(index-1))
    {
      currentNode=currentNode.next;
      i++;
    }
    let temp=currentNode.next;
    if(i!=(this.length-2)){
    
    currentNode.next=temp.next;
    temp.next.previous=currentNode;
    temp.previous=null; temp.next=null;
    }
    else{
      temp.previous=null;
      currentNode.next=null;
      this.tail=currentNode;
      return this; 
    }
    this.length--;
    }

    insert(value, index){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode =new Node(value);
    const leader=this.head;
    let i=0
    while(i!=(index-1)){
      leader=leader.next;
      i++;
    }
    const follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    this.length++;
  }

  printList(){
    let currentNode=this.head;
    let listValues=[];
    while(currentNode!=null)
    {
      listValues.push(currentNode.value);
      currentNode=currentNode.next;
    }
    console.log(listValues);
  }
}


let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(7);
myLinkedList.append(50);
myLinkedList.prepend(99);
myLinkedList.remove(2);
myLinkedList.insert(100,1);
myLinkedList.printList();