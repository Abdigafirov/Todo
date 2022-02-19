import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getTodos, saveTodos, editTodos, filter, onNext, onPrev, delet} from "../../Store/todo";
import TodoModal from "./component/TodoModal";

function Todo({todos, getTodos, saveTodos,editTodos,filter,page,onNext,onPrev,delet}) {
    const [Todotoggle, setTodotoggle] = useState(false)
    const [Todo, setTodo] = useState('')

    useEffect(() => {
        getTodos()
    }, [])
    useEffect(()=>{
         filter()
    },[page])

    function Toggle() {
        setTodo('')
        setTodotoggle(prev => !prev)
    }

    function submitTodo(event, errors, values) {
        if (Todo){
            editTodos({...values,id:Todo.id})
        }else {
            saveTodos(values)
        }
        Toggle()
    }

    function TodoEdt(item){
        setTodotoggle(true)
        setTodo(item)
    }
    return <div>
        <button className={'btn btn-success'} onClick={() => Toggle()}> + ADD</button>
        <table className={'table table-bordered mt-2'}>
            <thead>
            <tr>
                <th>№</th>
                <th>Title</th>
                <th>Checkbox</th>
                <th></th>
            </tr>
            </thead>
            <tbody>

            {
                todos.map((item,index) => <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><input type="checkbox"   checked={item.completed}/></td>
                    <td>
                        <button className="btn btn-dark " onClick={() => TodoEdt(item)}>edit</button>
                        <button className="btn btn-danger " onClick={()=> delet(index)}>delet</button>
                    </td>
                </tr>)
            }
            </tbody>
        </table>

        <div className="row">

            <div className="col-md-2">
                <button className={"btn btn-dark"} onClick={onPrev}> {'<<'} prev</button>
            </div>
            <div className="col-md-1">
                <h1>{page}</h1>
            </div>
            <div className="col-md-2">
                <button className={"btn btn-dark"} onClick={onNext}>next >> </button>
            </div>
        </div>

        <TodoModal isOpen={Todotoggle} toggle={Toggle} Todo={Todo} submitTodo={submitTodo}/>
    </div>
}

export default connect(({todo: {todos,page}}) => ({todos,page}), {getTodos, saveTodos,editTodos,filter,onNext,onPrev,delet})(Todo)