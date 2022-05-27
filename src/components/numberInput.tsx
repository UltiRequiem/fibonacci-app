export interface NumberInputProps {
  value: number;
  onChange: JSX.GenericEventHandler<HTMLInputElement>;
}

export function NumberInput({ onChange, value }: NumberInputProps) {
  // https://github.com/preactjs/preact/issues/263

  return (
    <label className="bg-gray-500 rounded rounded-r-none p-2 m-15">
      Number 👉🏼
      <input
        type="number"
        onChange={onChange}
        value={value}
        className="rounded rounded-l-none focus:outline-none p-1"
      />
    </label>
  );
}
