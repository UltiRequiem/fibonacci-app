import { FormEventHandler } from "react";

export interface NumberInputProps {
  value: number;
  onInput: FormEventHandler;
}

export function NumberInput({ onInput, value }: NumberInputProps) {
  return (
    <label className="bg-gray-500 rounded rounded-r-none p-2 m-15">
      Number 👉🏼
      <input
        type="number"
        onInput={onInput}
        value={value}
        className="rounded rounded-l-none focus:outline-none p-1"
      />
    </label>
  );
}
