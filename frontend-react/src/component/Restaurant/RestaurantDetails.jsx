import { Grid } from "@mui/material";

export default function RestaurantDetails() {
  return (
    <div className="px-5 lg:px-20">
        <section>
            <h3>Home/india/indian/fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg" 
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
                    <Grid item xs={12} lg={6}>
                        <img 
                            className='w-full h-[40vh] object-cover' 
                            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg" 
                            alt=""
                        />
                    </Grid>
                </Grid>
            </div>
        </section>
    </div>
  )
}