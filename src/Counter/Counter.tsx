import { useCounter } from './CounterContext';

export default function Counter() {
  const { counter } = useCounter();

  return <div className="bigNumber">{counter}</div>;
}
