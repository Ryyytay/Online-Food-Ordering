import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from "react";

const categories=[
    "pizza",
    "rice",
    "burger",
    "chicken",
    "beef"
]

const foodTypes=[
    {label:"All", value:"all"},
    {label:"Vegetable", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non_vegetarian"},
    {label:"Seasonal", value:"seasonal"}
]

export default function RestaurantDetails() {
    const [foodType,setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

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
                <p className="text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                </p>
                <div className="space-y-3 mt-3">
                    <p className="text-gray-500 flex items-center gap-3">
                        <PlaceIcon/>
                        <span>
                            Canterbury, New Zealand
                        </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3">
                        <CalendarTodayIcon/>
                        <span>
                            Mon-Sun: 9:00 AM - 9:00 PM (Today)
                        </span>
                    </p>
                </div>
                
            </div>
        </section>
        <Divider/>
        <section className="pt-[2rem] lg:flex relative">
            <div className="space-y-10 lg:w-[20%] filter">
                <div className="box space-y-5 lg:sticky top-28">
                    <div>
                        <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {foodTypes.map((item) => 
                                    <FormControlLabel 
                                        value={item.value} 
                                        control={<Radio/>} 
                                        label={item.label} 
                                    />
                                )}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="categories" value={foodType}>
                                {categories.map((item) => 
                                    <FormControlLabel 
                                        value={item} 
                                        control={<Radio/>} 
                                        label={item} 
                                    />
                                )}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="space-y-5 lg:w-[80%] lg:pl-10">
                Menu
            </div>
        </section>
    </div>
  )
}