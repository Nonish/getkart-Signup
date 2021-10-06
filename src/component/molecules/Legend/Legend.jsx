import React from "react";
import Button from "../../atoms/Button";
import "./style.css"

function Legend() {
    return (
        <section className="right-side">
            <h2>New Customers</h2>
            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            <p>Check out faster, Keep more than one address, Track orders, Track wishlist and more.</p>
            <Button>Create an Account</Button>
        </section>
    )
}
export default Legend;