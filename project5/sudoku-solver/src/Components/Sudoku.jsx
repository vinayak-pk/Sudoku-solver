import React from "react";

import styles from "./Sudoku.module.css"
import {InputBox} from "./Input"
var intarr = [];
for(let i=0;i<9;i++){
  intarr.push(new Array(9).fill(0))
}

var initI= `0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0 
    0 0 0 0 0 0 0 0 0`

let makeshiftarr = new Array(9).fill("") 
export function Sudoku(){
    let [inputs,setInput] = React.useState(initI);
    let [arr,setArr] = React.useState(intarr)
    let handleChange =(e)=>{
        setInput(e.target.value)
    }
    React.useEffect(()=>{
        inputs = inputs.trim().split('\n');
        let temp = [...arr];
        for(let i=0;i<9;i++){
            inputs[i]=inputs[i].trim().split(' ').map(Number)
            for(let j=0;j<9;j++){
    
                temp[i][j]=inputs[i][j]
            }
        }
        
        setArr(temp)
        
    },[inputs])
    
    function findSudoku(){
        if(Soduko_solver()){
        
        }else{
            console.log(-1)
        }   
    }

  function Soduko_solver(){
        let [flag,row,col] = search_blank(arr)
        if(!flag){
            return true
        }
       for(let i=1;i<=9;i++){           
           delay(5)
           if(check(arr,row,col,i)){
               let temp = [...arr]
               temp[row][col]=i;
                   setArr(temp)
               if(Soduko_solver()){
                   return true;
               }
               temp[row][col]=0 ;
                setArr(temp)
           }
        }
        return false;
    }
    return (
        <div style={{display: 'flex'}}>
            <div className={styles.sodukobody}> 
              {(makeshiftarr.map((el,i)=>{
                  return  arr[i].map((item)=>{
                      return <InputBox item={item}/>
                  })
              }))  
            }
            </div>
            <div className={styles.textarea}>
                <textarea style={{height:'150px'}} onChange={handleChange}/>
                <button onClick={findSudoku}>Submit</button>
            </div>
        </div>
    )
}


function check(arr,row,col,i){
    let flag1=true;
    for(let j=0;j<9;j++){
        if(arr[j][col]===i){
            flag1=false;
        }
    }
    let flag2=true;
    for(let j=0;j<9;j++){
        if(arr[row][j]===i){
            flag2=false;
        }
    }
    let flag3 = true;
    let rval = (row-(row%3));
    let cval = (col-(col%3))
    for(let j=0;j<3;j++){
        for(let k=0;k<3;k++){
            if(arr[j+rval][k+cval]===i){
                return false
            }
        }
    }

    if(flag1&&flag2&&flag3){
        return true
    }else{
        return false
    }
}

function search_blank(arr,row,col) {
    let flag = false
  for(row=0;row<9;row++){
      for(col=0;col<9;col++){
         if(arr[row][col]===0){
             flag=true
             return [flag,row,col]
         }
        }
    }
    flag=false
    return [flag=false,row,col]
}

function delay(n) {  
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
}