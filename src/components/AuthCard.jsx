import { Card } from "@mui/material"

export const AuthCard=({children,...props})=>{
    return (
        <Card
        elevation={0}
         {...props}>
            {children}
        </Card>
    )
}