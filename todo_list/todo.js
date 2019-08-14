window.setTimeout(function() {
    var input = prompt("What would you like to do?");

    var todos = ["Buy new turtles"];

    while (input != "quit") {
        if (input === "new") {
            addTodo();
        } else if (input === "list") {
            printList();
        } else if (input === "delete") {
            deleteTodo();
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("Okay, you quit the app.");

    function addTodo() {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log(newTodo + " added to list");
    }

    function printList() {
        console.log("**********");
        todos.forEach(function(todo, index){
            console.log(index + ": " + todo);
        });
        console.log("**********");
    }

    function deleteTodo() {
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Todo removed");
    }
}, 500);

