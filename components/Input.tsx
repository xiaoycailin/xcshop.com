import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
const Input = (props: TextFieldProps) => {
    return (
        <TextField fullWidth size="small" {...props} variant="outlined"/>
    )
}

export default Input