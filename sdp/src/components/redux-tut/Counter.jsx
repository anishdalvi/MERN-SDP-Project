import React from 'react'
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from '../../redux/actions/index'

export default function Counter() {
  const counterState = useSelector((state) => state.changeNumber)
  console.log(counterState);
  const dispatch = useDispatch()
  return (
    <>
        <div className='counter'>
            <h1>Increment Decrement Counter</h1>
            <div>
                <span id='decrementCount'> <button id='dbutton' onClick={() => dispatch(decNumber())}> - </button> </span>
                <span> <input type="text" value={counterState} onChange={(e) => console.log(changed)} id='inputDisplay' disabled/> </span>
                <span id='incrementCount'> <button id='ibutton' onClick={() => dispatch(incNumber())}> + </button> </span>
            </div>
        </div>
    </>
  )
}
