import { CircularProgress, Container} from "@mui/material"

export const HomeSkeleton=()=>{
    return (
        <>
        <Container sx={{width:'100vw',height:'100vh',display:'grid',placeContent:'center'}}>

        <CircularProgress size={50} sx={{color:"#0095F6"}}/>
        </Container>
        
    </>
)
}