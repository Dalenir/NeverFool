import React from 'react'
import {decrement, increment} from '../counter/counterSlice'
import {useAppDispatch, useAppSelector} from '../../hooks'
import {Provider} from "react-redux";
import store from '../../store/store'

export default function NotCounter () {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}