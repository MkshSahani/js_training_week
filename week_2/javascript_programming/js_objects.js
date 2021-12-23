// object in java script. 

var binary_tree_node = {
    data : 12, 
    left : null, 
    right : null,  
    print_data : show_data
}

function show_data() {
    console.log(this.data); 
}

console.log(binary_tree_node.data, binary_tree_node.left, binary_tree_node.right);
binary_tree_node.print_data();

// object creater 
function binary_tree_node_object(data, left_child, right_child) {
    this.data = data; 
    this.left_child = left_child; 
    this.right_child = right_child; 
    this.show = () => {
        console.log(this.data, this.left_child, this.right_child); 
        return true;
    }
}
// binary_tree_node_object 
binary_tree_node = new binary_tree_node_object(12, null, null)
var data = binary_tree_node.show();
console.log(data); 
