import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, FormControlLabel, FormGroup, Checkbox } from "@mui/material";

const ingredients = [
  {
    category: "Beef",
    items: ["beef sirloin", "tenderloin"],
  },
  {
    category: "Vegetables",
    items: ["bell pepper", "red onion", "cherry tomatoes", "zucchini"],
  },
  {
    category: "Marinade",
    items: [
      "olive oil",
      "soy sauce",
      "lemon juice",
      "Worcestershire sauce",
      "garlic cloves",
      "smoked paprika",
      "ground cumin",
      "ground coriander",
      "chili powder",
      "dried oregano",
      "Salt",
      "ground black pepper",
    ],
  },
];

const MenuCard = () => {
  // State to track selected items
  const [selectedItems, setSelectedItems] = useState({});

  // Handler to toggle checkbox
  const handleCheckboxChange = (category, item) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: !prevState[category]?.[item], // Toggle item state
      },
    }));
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[rem] object-cover"
              src="https://i.pinimg.com/736x/52/92/ba/5292ba02393a6d1ca2a209daee687da2.jpg"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Beef Kabob</p>
              <p>$25.56</p>
              <p className="text-gray-400">
                Juicy, marinated beef grilled with vibrant vegetables, delivering
                smoky, tender, and flavorful bites in every skewer.
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredients.map((ingredient) => (
              <div key={ingredient.category}>
                {/* Display the category name */}
                <h3 className="font-bold text-lg mb-2">{ingredient.category}</h3>
                <FormGroup>
                  {ingredient.items.map((item) => (
                    <FormControlLabel
                      key={item}
                      control={
                        <Checkbox
                          checked={
                            selectedItems[ingredient.category]?.[item] || false
                          }
                          onChange={() =>
                            handleCheckboxChange(ingredient.category, item)
                          }
                        />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div>
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
