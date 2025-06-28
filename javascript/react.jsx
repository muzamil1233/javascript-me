import { useState } from "react"

export function ToggleButton(){

     const[isOn SetIson] = useState(false);
    return(
        <>
        <button onClick = {()=> SetIson(!isOn)}
            
            >
            {isOn ? "off" : "on"}
               

            </button>


        </>
    )
}



function Create-Todo(){


    const[todo , setTodo] =useState();
    const[text , setText] = useState("")


    function AddTodo(){
        if(text){
            setTodo([...todo, {text,  complete: false}]);
            setText("")
        }
    }

    function ToggleTodo(){
        const newTask = [...todo];
        newTask[index].complete =  !newTask[index].complete;
        setTodo(newTask)
    }

    function DeleteTodo(){
        const newTask = [...todo];
       newTask.splice(index , 1)
        setTodo(newTask)
    }
    return(
        <>
        <input type="text" />
      
        
        
        </>
    )
}