import { fibonacciSequence } from "@ultirequiem/fibonacci";
import { FormEventHandler, useState } from "react";

import { Footer } from "./Footer";

function fiboString(number: string): string {
  return [...fibonacciSequence(Number.parseInt(number, 10))].join(", ") + ".";
}

export function App() {
  const [fibonacciSequenceNumber, setFibonacciSequence] = useState(
    fiboString("1"),
  );

  const onNumericInput: FormEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => {
    setFibonacciSequence(fiboString(value));
  };

  return (
    <main className="bg-slate-600 flex flex-col p-5 gap-4 text-2xl text-center min-h-screen">
      <h1 className="capitalize">Fibonacci Sequence</h1>

      <section>
        <label className="bg-gray-500 rounded rounded-r-none p-2">
          Number 👉🏼
          <input
            type="number"
            onInput={onNumericInput}
            className="rounded rounded-l-none focus:outline-none p-1"
          />
        </label>
      </section>

      <section className="bg-blue-200 p-10 m-10">
        <p>{fibonacciSequenceNumber}</p>
      </section>

      <Footer />
    </main>
  );
}
