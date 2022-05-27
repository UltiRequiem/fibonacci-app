import {fibonacci, fibonacciSequence} from '@ultirequiem/fibonacci';

export interface FibonacciItemProps {
	number: number;
}

export function Fibonacci({number}: FibonacciItemProps) {
	return (
		<section className='bg-blue-300 py-3'>
      The <b>{number}</b> Fibonacci number is <b>{fibonacci(number - 1)}</b>.
		</section>
	);
}

export function FibonacciList({number}: FibonacciItemProps) {
	return (
		<section className='bg-blue-200 p-10 m-5'>
			<ul className='grid lg:grid-cols-4 gap-4'>
				{[...fibonacciSequence(number - 1)].map((value, index) => (
					<li
						key={index}
						className='overflow-x-scroll text-purple-800 bg-blue-400 p-3 rounded'
					>
						{index + 1}) <span className='text-sky-800'>{value}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
