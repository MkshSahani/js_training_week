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

    get_node(node_index) {
        var counter = 0, current_pointer = this.head;
        while(current_pointer != null && counter != node_index) {
            current_pointer = current_pointer.next; 
            counter++; 
        } 

        if(current_pointer != null) {
            return current_pointer; 
        } else {
            return null; 
        }
    
    }

    remove_node(element) {
        var current_node = this.head, previous_node = this.head;
        while(current_node != null && current_node.get_data() != element) {
            previous_node = current_node; 
            current_node = current_node.next; 
        } 
        if(current_node != null) {
            if(current_node == this.head) {
                this.head = this.head.next; 
            } else {
                previous_node.next = current_node.next; 
            }
        }
    }
}


// ----------------------------------------------- 
var linked_list = new LinkedList()
for(var i = 0; i < 10; i++) {
    linked_list.add_element(parseInt(Math.random() * 10000)); 
}
linked_list.print_list(); // print linked list. 