import { NavLink } from "react-router-dom"

import logo from "./../assets/images/logo.png"
export const Navigation = () => {
    return (
        <>
            <div className="nav ">


                <div class="loader">
                    <div id="first">
                        <div id="second">
                            <div id="third">
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
                <hr/>
                <NavLink to={"/"}>HOME</NavLink>
                <NavLink to={"/about"}>CHOCOLATE</NavLink>
                <div className="logos">
                    <img className="logo" src={logo} alt="" />
                </div>
                <NavLink to={"/producs"}>ENERGIE DRINKS</NavLink>
                <NavLink to={"/contact"}>CANDYS</NavLink>
                <hr />
                <hr />

                <div class="loader">
                    <div id="first">
                        <div id="second">
                            <div id="third">
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </>
    )
}
