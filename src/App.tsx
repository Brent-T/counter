import Counter from './Counter/Counter';
import CounterControls from './Counter/Controls';
import { CounterProvider } from './Counter/CounterContext';

export default function App() {
  return (
    <div className="wrapper">
      <CounterProvider>
        <Counter />
        <CounterControls />
      </CounterProvider>
    </div>
  );
}
