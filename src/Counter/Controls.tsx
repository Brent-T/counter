import { useCounter, CounterActionType } from './CounterContext';

export default function Controls() {
  const { dispatch } = useCounter();

  return (
    <div className="controls">
      <div className="buttons">
        <button onClick={() => dispatch({ type: CounterActionType.decrement })}>
          -
        </button>
        <button onClick={() => dispatch({ type: CounterActionType.increment })}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: CounterActionType.reset })}>
          Reset
        </button>
      </div>
    </div>
  );
}
