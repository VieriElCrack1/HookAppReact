import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1 className='text-3xl pb-3'>Counter With Hook: { counter }</h1>

            <hr />

            <button onClick={ () => increment(2) }
            className='bg-black text-white p-[10px] rounded-2xl m-4 w-[60px] cursor-pointer'>
                +2
            </button>
            <button onClick={ reset }
            className='bg-black text-white p-[10px] rounded-2xl m-4 w-[80px] cursor-pointer'>
                Reset
            </button>
            <button onClick={ () => decrement(2) }
            className='bg-black text-white p-[10px] rounded-2xl m-4 w-[60px] cursor-pointer'>
                -2
            </button>
        </>
    )
}
