import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
// Pattern de Composição

export interface TextInputPropsTwo extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps { children: ReactNode };

export interface TextInputIconProps { children: ReactNode };

function TextInputRoot(props: TextInputRootProps) {
    return( 
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded w-full bg-gray-800  focus-within:ring-2 ring-cyan-300'>
        {props.children}
        </div>   
    )
}
TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6' text-gray-400>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputTwo( props: TextInputPropsTwo ) {  
    return (
           
            <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
             {...props}
            /> 
    )
}

TextInputTwo.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputTwo,
  Icon: TextInputIcon,
}