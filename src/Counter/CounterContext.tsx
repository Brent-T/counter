import * as React from 'react';

interface ICounterValue {
  counter: number;
  dispatch: (action: ICounterAction) => void;
}

type CounterContextValue = ICounterValue | undefined;
type CounterProviderProps = { children: React.ReactNode };

const CountContext = React.createContext<CounterContextValue>(undefined);

interface ICounterAction {
  type: CounterActionType;
}

enum CounterActionType {
  increment,
  decrement,
  reset,
}

function counterReducer(state: number, action: ICounterAction): number {
  switch (action.type) {
    case CounterActionType.increment:
      return state + 1;
    case CounterActionType.decrement:
      return state - 1;
    case CounterActionType.reset:
      return 0;
  }
}

function CounterProvider({ children }: CounterProviderProps) {
  const [counter, dispatch] = React.useReducer(counterReducer, 0);

  const value = {
    counter,
    dispatch,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

function useCounter() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error('Missing context provider');
  }
  return context;
}

export { CounterProvider, useCounter, CounterActionType };
