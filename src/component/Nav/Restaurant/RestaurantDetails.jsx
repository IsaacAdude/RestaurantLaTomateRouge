import {
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
  import MenuCard from "./MenuCard";
  
  // Define the food categories for the restaurant menu
  const categories = ["Fish", "Chicken", "Pizza", "Meat", "Sides"];
  
  // Define the different food types (filters)
  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
  ];
  
  // Placeholder menu items (I will add in the menu when I have time)
  const menu = [1];
  
  const RestaurantDetails = () => {
    // State to manage the selected food type (e.g., vegetarian, non-vegetarian)
    const [selectedFoodType, setSelectedFoodType] = useState("all");
  
    // State to manage the selected food category (e.g., Fish, Chicken)
    const [selectedCategory, setSelectedCategory] = useState("");
  
    // Handler for changes in the food type radio group
    const handleFoodTypeChange = (e) => {
      setSelectedFoodType(e.target.value); // Update the selected food type
      console.log("Selected Food Type:", e.target.value); // Log the selected food type for debugging
    };
  
    // Handler for changes in the food category radio group
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value); // Update the selected category
      console.log("Selected Category:", e.target.value); // Log the selected category for debugging
    };
  
    return (
      <div className="px-5 lg:px-20">
        {/* Section: Restaurant Header */}
        <section>
          <h3 className="text-gray-500 py-2 mt-10">Home/USA/La Tomate Rouge/3</h3>
          <div>
            {/* Grid of images for the restaurant */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src="https://thumbs.dreamstime.com/b/grand-africa-cafe-beachfront-bar-restaurant-cape-town-south-may-254337811.jpg"
                  alt=""
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src="https://www.silverkris.com/wp-content/uploads/2017/09/four-seasons-westcliff-1.jpg"
                  alt=""
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src="https://fact-magazine.com/wp-content/uploads/2023/03/DSC_9381-845x550.jpg"
                  alt=""
                />
              </Grid>
            </Grid>
          </div>
  
          {/* Section: Restaurant Description */}
          <div className="pt-3 pb-5">
            <h1 className="text-4xl font-semibold">La Tomate Rouge</h1>
            <p className="text-gray-500 flex items-center gap-3 mt-2">
              <span>
                La Tomate Rouge is a sophisticated dining destination where
                culinary artistry meets a welcoming ambiance. Specializing in
                exquisite dishes crafted from the freshest ingredients, the
                restaurant offers a menu inspired by both timeless classics and
                modern innovations. With an atmosphere that balances elegance and
                comfort, La Tomate Rouge promises an unforgettable experience for
                every guest, celebrating the vibrant flavors and rich traditions
                of fine cuisine. Whether it's an intimate dinner, a celebratory
                gathering, or a casual yet refined outing, La Tomate Rouge is the
                perfect setting to savor life’s most delicious moments.
              </span>
            </p>
            <p className="text-gray-500 flex items-center gap-3 mt-4">
              <LocationOnIcon />
              <span>Des Moines, IA</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3 mt-4">
              <CalendarTodayIcon />
              <span>Mon-Sun: 11:00 AM - 9 PM</span>
            </p>
          </div>
        </section>
  
        {/* Divider line */}
        <Divider />
  
        {/* Section: Menu Filters and Items */}
        <section className="pt-[2rem] lg:flex relative">
          {/* Filters for Food Type and Food Category */}
          <div className="space-y-10 lg:w-[20%] filter ">
            <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
              {/* Food Type Filter */}
              <div>
                <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                  Food Type
                </Typography>
                <FormControl className="py-10 space-y-5" component={"fieldset"}>
                  <RadioGroup
                    onChange={handleFoodTypeChange}
                    name="food_type"
                    value={selectedFoodType}
                  >
                    {foodTypes.map((item) => (
                      <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
  
              {/* Divider between filters */}
              <Divider />
  
              {/* Food Category Filter */}
              <div>
                <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                  Food Category
                </Typography>
                <FormControl className="py-10 space-y-5" component={"fieldset"}>
                  <RadioGroup
                    onChange={handleCategoryChange}
                    name="food_category"
                    value={selectedCategory}
                  >
                    {categories.map((item) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={<Radio />}
                        label={item}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
  
          {/* Display Menu Items */}
          <div className="space-y-5 lg:w-[80%] lg:pl-10">
            {menu.map((item, index) => (
              <MenuCard key={index} />
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default RestaurantDetails;
  