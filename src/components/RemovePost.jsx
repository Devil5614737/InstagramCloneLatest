import { Popover, Typography} from "@mui/material"
import {BiTrash} from 'react-icons/bi'

export const RemovePost=({id,anchorEl,open,handleClose,post,handleRemovePost})=>{
    return (
        <Popover

  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  sx={{
    textAlign:'center'
  }}
>
 <BiTrash onClick={()=>handleRemovePost(post._id)} size={30} style={{cursor:'pointer'}}/>
 <Typography>Delete</Typography>
</Popover>
    )
}