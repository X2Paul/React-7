import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions'
import { CounterState } from '../redux/types.ts'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { TbHttpDelete } from "react-icons/tb";

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}><FaCirclePlus className="icon increment" /></button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}><FaCircleMinus className="icon decrement" /></button>
      <button onClick={() => dispatch(reset())}><TbHttpDelete  className="icon reset" /></button>
    </div>
  )
}

  export default Counter