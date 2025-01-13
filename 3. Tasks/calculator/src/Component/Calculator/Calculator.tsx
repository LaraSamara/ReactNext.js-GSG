import { useState } from "react";
import Button from "../Button/Button.tsx";
import "./Calculator.css";
function Calculator() {
    const[expression, setExpression] = useState("");
    const handleExpresion = (value: string)=>{
        setExpression(expression+value);
    }
    const handelEqual = (value: string) => {
        const result: string = calculateExpresion(expression);
        setExpression(expression+value+result);
    }
    const calculateExpresion = (exp: string)=>{
        let ops:string [] = [];
        let nums:number [] = [];
        let operators = ['+', '-'];
        let currentNumber = '';
        for(let char of exp){
            if(operators.includes(char)){
                if(currentNumber == ''){
                    return "Error";
                }
                nums.push(parseInt(currentNumber));
                ops.push(char);
                currentNumber = '';
            }else if(!isNaN(Number(char))){
                currentNumber += char;
            }else{
                return "Error";
            }
        }
        if(currentNumber != ''){
            nums.push(parseInt(currentNumber));
        }
        if(nums.length - 1 != ops.length){
            return "Error";
        }
        let result = nums[0];
        for(let i = 0 ; i < ops.length ; ++i){
            if(ops[i] == '+'){
                result += nums[i+1];
            }else{
                result -= nums[i+1];
            }
        }
        return String(result);
    }
    const handelClear = () =>{
        setExpression('');
    }
    return (
    <div className='calc'>
        <div className='output'>{expression}</div>
        <div className="calculater">
            <div className="buttons">
                {['1', '2', '3'].map(number => 
                    <Button  key={number} value={number} handleExpresion ={handleExpresion}/>
                )}
            </div>
            <div className="buttons">
                {['4', '5', '6'].map(number => 
                    <Button  key={number} value={number} handleExpresion ={handleExpresion}/>
                )}
            </div>
            <div className="buttons">
                {['7', '8', '9'].map(number => 
                    <Button  key={number} value={number} handleExpresion ={handleExpresion}/>
                )}
            </div>
            <div className="buttons">
                {['0', '+', '-'].map(number => 
                    <Button  key={number} value={number} handleExpresion ={handleExpresion}/>
                )}
            </div>
            <div className="buttons">
                {['=', 'C'].map(number => 
                <Button key={number} value={number} handleExpresion ={(number == 'C')?handelClear: handelEqual}/>
                )}
            </div>
        </div>
    </div>
    )
}
export default Calculator;
