import { TextField } from "@mui/material"

export const Input=({type,label,...props})=>{
    return <TextField 
    {...props}
    InputProps={{ disableUnderline: true }}
    type={type}
    id="standard-basic" label={label} variant="standard" />

}