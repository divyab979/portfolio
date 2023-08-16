import React from 'react';
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"; // Importing correct icons
import { useForm } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit = (formData: Inputs) => {
        window.location.href = `mailto:divyab979@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
    
    return (
        <div className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10 pt-56'>
                <h4 className='text-4xl font-semibold text-center'>
                    I've got just what you need.{' '}
                    <span className='text-[#f7ab0a] underline'>Let's Talk.</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 8483961061</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>divyab979@gmail.com</p>
                    </div>
                </div>
                <form
                    className='flex flex-col space-y-2 w-fit mx-auto'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex space-x-2'>
                        <input
                            placeholder='Name'
                            className='contactInput bg-slate-800/40'
                            type='text'
                            {...register('name')}
                        />
                        <input
                            placeholder='Email'
                            className='contactInput bg-slate-800/40'
                            type='text'
                            {...register('email')}
                        />
                    </div>
                    <input
                        placeholder='Subject'
                        className='contactInput bg-slate-800/40'
                        type='text'
                        {...register('subject')}
                    />
                    <textarea
                        placeholder='Message'
                        className='contactInput bg-slate-800/40'
                        {...register('message')}
                    />
                    <button
                        type='submit'
                        className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
