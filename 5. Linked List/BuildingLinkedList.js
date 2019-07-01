// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList(){
  let currentNode=this.head;
  let values=[];
  while(currentNode!=null){
    values.push(currentNode.value);
    currentNode=currentNode.next;
    }
  console.log(values);
  }


  append(value) {
    const newNode=new Node(value);
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
    return this.printList();
  }

  prepend(value){
    const newNode=new Node(value);
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
    return this.printList();
  }

  
insert(value,index){
  const newNode=new Node(value);
  if(index>=this.length)
  {
    return this.append(value);
  }
  let currentNode=this.head, i=0;
  while(i!=(index-1)){
    currentNode=currentNode.next;
    i++;
  }
  const holdPointer=currentNode.next;
  currentNode.next=newNode;
  newNode.next=holdPointer;
  this.length++;
  return this.printList();
}

remove(index){
  let i=0, currentNode=this.head,
  currentNode2=this.head;
  while(i!=(index-1)){
    currentNode=currentNode.next;
    i++;
  }
  currentNode2=currentNode.next.next;
  currentNode.next=currentNode2;
  this.length--;
  return this.printList();
}

reverse(){
  if(!this.head.next){
    return this.head;
  }
  let first=this.head;
  this.tail=this.head;
  let second=first.next;
  while(second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  
  this.head.next = null;
  this.head = first;
  return this.printList();
}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(25,2);
myLinkedList.insert(50,2);
myLinkedList.remove(2);
myLinkedList.reverse();