import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { counter } = useCounter();

    return (
        <>
            <h1 className='text-3xl pb-3'>Counter With Hook: { counter }</h1>

            <hr />

            <button className='bg-black text-white p-[10px] rounded-2xl m-4 w-[60px] cursor-pointer'>
                +1
            </button>
            <button className='bg-black text-white p-[10px] rounded-2xl m-4 w-[80px] cursor-pointer'>
                Reset
            </button>
            <button className='bg-black text-white p-[10px] rounded-2xl m-4 w-[60px] cursor-pointer'>
                -1
            </button>
        </>
    )
}
