import React from "react";
import Flags from "./FlagList";
import sa from "../assets/sa.svg";

class Home extends React.Component
{
    render()
    {
        return(
            <main id="mainContent">
                <header>
                    <span>FLAG</span>
                    <h1>ZA Flags</h1>
                </header>
                <section>
                    <h2 className="desc">A description of what this website is for</h2>
                </section>
                <Flags/>
                <footer>
                    By Marvin Ndlovu
                </footer>
            </main>
        );
    }
}

const saflag =()=>
{
    
}

export default Home;