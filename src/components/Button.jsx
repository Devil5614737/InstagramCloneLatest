import {Button as Btn} from '@mui/material';

export const Button=({
    label,
    ...props})=>{
    return <Btn
    dis
    {...props} variant="contained" disableRipple disableElevation>{label}</Btn>
}