class Node {

    constructor (data){
        this.data = data ;
        this.next = null ;

    }
}

class Linklist {
    constructor(){
        this.head = null ; 
    }
    

    //insert at the end 
    append(data){
        const newNode = new Node(data);
          if(this.head == null ){
            this.head = newNode ; 
          }else{
            let current = this.head ;
            while (current.next !== null ){
                current = current.next ;
            }
            current.next = newNode ; 
          }

    }

    //insert at the beginning 
    prepend(data){
          const newNode = new Node(data);
          if(this.head == null ){
            this.head = newNode ; 
          }else{
            let current = this.head ; 
            this.head = newNode ; 
            newNode.next = current ; 
          }
    }

    deleteFromStart(){
        
        if( this.head ){
        let current = this.head ; 
        this.head = current.next ; 
        }else{
            console.log("Nothing to delete");
        }
    }
    deleteFromEnd(){
        if(this.head){
           let current = this.head ; 
            while( current.next !== null ){
               
                if (current.next.next == null ){
                    current.next = null ; 
                    return ; 
                }
                 current = current.next ; 
            }
            
        }
    }
    
   exist(data){
            if(this.head){
          let  current = this.head ; 
            while(current.next !== null ){
                if(current.data ===  data){
                    return console.log(true) ;
                }
                current = current.next ; 
            }
            return console.log(false);  ; 
        }
   }

    print(){
        let elements = [];
        if(!this.head){
            console.log("The list is empty");

        }else{
            let current = this.head ; 
            while(current !== null ){
               elements.push(current.data)
              current = current.next  ;


            }
            let res = elements.join(" -> ")
            console.log (`link list elements are : `,  res ) ; 
        }
    }


}


const myLinklist = new Linklist();

myLinklist.append(10);
myLinklist.append(15);
myLinklist.append(20);
myLinklist.prepend(5);
myLinklist.append(25);
myLinklist.append(30);

myLinklist.print() ; 

myLinklist.exist(20);

myLinklist.deleteFromEnd(); 

myLinklist.exist(30);

myLinklist.print(); 
 




