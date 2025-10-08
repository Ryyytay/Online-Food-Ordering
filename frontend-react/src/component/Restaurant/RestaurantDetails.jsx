import { Grid } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';

export default function RestaurantDetails() {
  return (
    <div className="px-5 lg:px-20">
        <section> 
            <h3 className="text-gray-500 py-2 mt-10">Home/india/indian/fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src="https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg" 
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg" 
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg" 
                            alt=""
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                <p className="text-gray-500 flex items-center gap-3">
                    <PlaceIcon/>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipiscining elit. Nam 
                    </span>
                </p>
            </div>
        </section>
    </div>
  )
}