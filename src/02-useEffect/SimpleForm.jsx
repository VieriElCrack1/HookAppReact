import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'vieri',
        email: 'vieri@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
        console.log('useEffect called!');
    }, []); //un arreglo vacio -> significa que solo se ejecute una vez.

    useEffect( () => {
        console.log('formState change!');
    }, [formState]);

    useEffect( () => {
        console.log('email change!');
    }, [ email ]);

    return (
        <>
            <h1 className='text-3xl text-center mb-[10px]'>Formulario Simple:</h1>
            <hr />

            <div className='m-4'>
                <div className='mb-2'>
                    <input
                        type='text'
                        className='border border-b-gray-500 rounded-[10px] p-2 w-full'
                        placeholder='Username'
                        name='username'
                        value={ username }
                        onChange={ onInputChange }
                    />
                </div>
                <div >
                    <input
                        type='email'
                        className='border border-b-gray-500 rounded-[10px] p-2 w-full'
                        placeholder='Vieri@gmail.com'
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                    />
                </div>
            </div>
        </>
    )
}
