import React from "react";
import LoginByMobileForm from "../../molecules/LoginByNumberForm";
import LoginByEmailForm from "../../molecules/LoginByEmailForm";
import Legend from "../../molecules/Legend";
import "./style.css";

function Authentication() {
    return (
        <main>
            <h1>Please Sign In</h1>
            <div className="container-border">
                <section className="container">
                    <section className="left-side">
                        <LoginByMobileForm />
                        <div className="seprator">
                            <p>OR</p>
                        </div>
                        <LoginByEmailForm />
                    </section>
                    <Legend />
                </section>
            </div>

        </main>
    )
}
export default Authentication;