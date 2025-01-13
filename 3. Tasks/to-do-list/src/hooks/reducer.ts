import { IItem } from "../assets/Type.tsx";
interface IAction{
    type: string, 
    payload: any
}
interface IState{
    todos: IItem[],
    name: string
}
const reducer = (state: IState, action: IAction): IState => {
    switch(action.type){
        case 'ADD_TASK': {
            return {...state, todos:[...state.todos, action.payload]};
        }
        case 'REMOVE-TASK':
        return {...state, todos:state.todos.filter((todo) =>  todo.Id != action.payload)};
        case 'COMPLETE_TASK':
        return {...state, todos:state.todos.map((todo) =>  todo.Id != action.payload? todo:{...todo, IsComplete: !todo.IsComplete})};
    }
    return state;
}
export default reducer;