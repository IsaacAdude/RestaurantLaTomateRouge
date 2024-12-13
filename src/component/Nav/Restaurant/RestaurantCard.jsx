
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, Chip, IconButton } from "@mui/material";

const RestaurantCart = () => {
    return (
        <Card className = 'w-[18rem]'>
            <div className={`${true?'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img className="w-full h-[10rem] rounded-t-md object-cover"
                 src="http://www.eatout.co.za/wp-content/uploads/2017/10/La-Terrasse-new.jpg.jpg"
                  alt=""/>
                  <Chip
                  size="small"
                  className="absolute top-2 left-2"
                  color={true?"success":"error"}
                  label={true?"open":'closed'}
                  />

            </div>

            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="font-semibold text-lg">La Tomate Rouge</p>
                    <p className="text-gray-500 text-sm">
                    La Tomate Rouge will make your taste buds vibrate with bistronomic cuisine giving pride of place to the African tradition
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon></FavoriteBorderIcon>}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}

export default RestaurantCart