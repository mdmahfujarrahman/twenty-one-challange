import {
    decrementLike,
    incrementLike,
} from "./redux/feature/Counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/reduxHooks";

function App() {
    const value = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(incrementLike())}>Increment</button>
            <p>{value}</p>
            <button
                disabled={value === 0}
                onClick={() => dispatch(decrementLike())}
            >
                Decrement
            </button>
        </div>
    );
}

export default App;
