import { fibonacciSequence } from "@ultirequiem/fibonacci";
import { FormEventHandler, useState } from "react";

import { Footer } from "./Footer";

export function App() {
  const [fibonacciSequenceNumber, setFibonacciSequence] = useState(16);

  const onNumericInput: FormEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => {
    const parsed = Number.parseInt(value, 10);

    // my friends will be playing with this and will not even care if it shows infinity, sooo

    // if (parsed > 1477) {
    //   return alert("The maximum number is 1477.");
    // }

    setFibonacciSequence(parsed);
  };

  return (
    <main className="bg-slate-600 flex flex-col p-5 gap-4 text-2xl text-center min-h-screen">
      <h1 className="capitalize text-3xl underline">Fibonacci Sequence</h1>

      <label className="bg-gray-500 rounded rounded-r-none p-2 m-15">
        Number 👉🏼
        <input
          type="number"
          onInput={onNumericInput}
          value={fibonacciSequenceNumber}
          className="rounded rounded-l-none focus:outline-none p-1"
        />
      </label>

      <section className="bg-blue-200 p-10 m-10">
        <ul className="grid lg:grid-cols-4 gap-4">
          {[...fibonacciSequence(fibonacciSequenceNumber - 1)].map(
            (value, index) => {
              return (
                <li
                  key={index}
                  className="text-purple-800 bg-blue-400 p-3 rounded"
                >
                  {index + 1}) <span className="text-sky-800">{value}</span>
                </li>
              );
            },
          )}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
