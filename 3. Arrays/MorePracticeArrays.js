class Array{
    constructor(){
      this.length=0;
      this.data={};
    }

    //Adds element at the end of the array
    push(item){
      this.data[this.length]=item;
      this.length++;
      return this;
    }

    //Removes the last element
    pop(){
      delete this.data[this.length-1];
      this.length--;
      return this;
    }

    //Returns element at a particular index
    get(index){
      return this.data[index];
    }

    //Self-Explanatory
    deleteAtIndex(index){
      this.shiftArray(index);
      this.length--;
      return this;
    }

    //Used to deleteAtIndex
    shiftArray(index){
      for(let i=index; i<this.length; i++){
        this.data[i]=this.data[i+1];
      }
      delete this.data[this.length-1];
    }

    //Remove the first element
    shift(){
      this.shiftArray(0);
      this.length--;
      return this;
    }

    //Adds element at the front
    unshift(item){
      let arr=[];
      arr[0]=item;
      for(let i=0;i<this.length;i++){
        arr.push(this.data[i]);
      }
      this.length++;
      for(let i=0;i<this.length;i++){
        this.data[i]=arr[i];
      }
      return this;
    }

    //Return the items between two indices(Item at 2nd index not included)
    slice(index1, index2){
      let arr=[];
      for(let i=index1; i<index2; i++){
        arr.push(this.data[i]);
      }
      return arr;
    }
  }
  const myArray=new Array();
  myArray.push(10);
  myArray.push(9);
  myArray.push(8);
  myArray.push(7);
  myArray.push(6);
  myArray.deleteAtIndex(2);
  myArray.shift();
  myArray.unshift('HI');
  myArray.slice(1,3);