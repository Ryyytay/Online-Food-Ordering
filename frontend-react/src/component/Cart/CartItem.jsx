import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';

export default function CartItem() {
  return (
    <div className="px-5">
        <div className="lg:flex items-center lg:space-x-5">
            <div>
                <img className="w-[5rem] h-[5rem] object-cover" 
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707904777/ufillbuz61zjilw0rrc3.jpg" alt="" />
            </div>
            <div className="flex items-center justify-between lg:w=[70] ">
                <div className="space-y-1 lg:space-y-3 w-full">
                    <p>biryani</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            <IconButton>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}