import { useEffect, useState } from "preact/hooks";

import { FibonacciList, Footer, NTHFibonacci, NumberInput } from "./components";

export function App() {
  const [fibonacciSequenceNumber, setFibonacciSequence] = useState(16);

  useEffect(() => {
    // https://github.com/preactjs/preact/issues/263
    fibonacciSequenceNumber <= 0 && setFibonacciSequence(1);
  });

  const onNumberInput: JSX.GenericEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => {
    const parsed = Number.parseInt(value, 10);

    if (parsed <= 0) {
      return "";
    }

    if (parsed > 1477) {
      return alert(
        "The last safe Fibonacci number to calculate in a browser is 1477.",
      );
    }

    setFibonacciSequence(parsed);
  };

  return (
    <main className="bg-slate-600 flex flex-col p-5 gap-4 text-2xl text-center min-h-screen">
      <h1 className="capitalize text-3xl underline">Fibonacci Sequence</h1>

      <NumberInput onChange={onNumberInput} value={fibonacciSequenceNumber} />

      <NTHFibonacci number={fibonacciSequenceNumber} />

      <FibonacciList number={fibonacciSequenceNumber} />

      <Footer />
    </main>
  );
}
