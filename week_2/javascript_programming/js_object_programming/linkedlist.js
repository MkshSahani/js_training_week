// listnode 

class ListNode {

    constructor() {
        this.data = null; 
        this.next = null; 
    }

    set_data(data) {
        this.data = data; 
    }

    get_data() {
        return this.data; 
    }

}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    add_element(element) {
        let current_pointer = null; 
        if(this.head == null) {
            this.head = new ListNode(); 
            this.head.set_data(element); 
        } else {
            current_pointer = this.head; 
            while(current_pointer.next != null) {
                current_pointer = current_pointer.next; 
            }
            current_pointer.next = new ListNode(); 
            current_pointer.next.set_data(element); 
        }
    }

    print_list() {
        var current_point = this.head; 
        while(current_point != null) {
            console.log(current_point.data); 
            current_point = current_point.next; 
        }
    }

    remove_node(element) {
        var current_node = null; 
    }
}


// ----------------------------------------------- 
var linked_list = new LinkedList()
for(var i = 0; i < 10; i++) {
    linked_list.add_element(parseInt(Math.random() * 10000)); 
}
linked_list.print_list(); // print linked list. 