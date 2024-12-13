import { Divider } from "@mui/material";
import React from "react";
import { CartItem } from "./CartItem";

export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",

    boxShadow: 24,
    p: 4 
};

const Cart = () => {
    return(
        <div>
            <main className="lg:flex justify-between">

                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    <CartItem/>
                </section>
                <Divider/>
            </main>
        </div>
    )
}

export default Cart