import React, { InputHTMLAttributes } from 'react'

type Input = InputHTMLAttributes<HTMLInputElement>

export function Input(props: Input) {
    return (
        <input {...props} />
    )
}