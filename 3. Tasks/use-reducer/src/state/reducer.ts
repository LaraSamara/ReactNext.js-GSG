import { IStudent } from "../types.ts";

interface IAction{
    type: string,
    payload: any
}
interface IState{
    studentsList: IStudent[],
    totalAbsents: number
}
const reducer = (state: IState, action: IAction) :IState => {
    switch(action.type){
        case 'INITIAL' :{
            const stdList: IStudent[] = action.payload || [];
            const totalAbs = stdList.reduce((prev, cur) => { return prev + cur.absents }, 0);
            return{
                studentsList: stdList,
                totalAbsents: totalAbs
            }
        }
        case 'REMOVE_FIRST':{
            const newList = [...state.studentsList];
            newList.shift();  
            return {studentsList: newList, totalAbsents: state.totalAbsents};
        }
        case 'CHANGE_ABSENT':{
            return{
                studentsList: state.studentsList.map(std => std.id === action.payload.id? { ...std, absents: std.absents + action.payload.change }: std), 
                totalAbsents: state.totalAbsents + action.payload.change
            }
        }
        case 'ADD_STUDENT':{
            return{
                studentsList: [action.payload, ...state.studentsList],
                totalAbsents: state.totalAbsents
            }
        }
    }
    return state;
}
export default reducer;