// object in java script. 

var binary_tree_node = {
    "data" : 12, 
    "next" : null, 
    print_data : show_data
}

function show_data() {
    console.log(this.data); 
}

console.log(binary_tree_node.data, binary_tree_node.next);

binary_tree_node.print_data();