import React from 'react'

export default function Calculation() {
    const Add = (a,b)=> {
        return a + b ;
    };
    const Subtract = (a,b)=> {
        return a-b;
    };
    const Multiply = (a,b)=> {
        return a*b;
    };
    const Divide = (a,b)=> {
        return a/b;
    };
    const A = 10;
    const B = 10;

  return (
    <>
    <h3>Danh sách kết quả</h3>
    <ul>
        <li> {A} + {B}  = {Add(A,B)}</li>
        <li> {A} - {B}  = {Subtract(A,B)}</li>
        <li> {A} * {B}  = {Multiply(A,B)}</li>
        <li> {A} / {B}  = {Divide(A,B)}</li>
    </ul>
   </>
  )
}
