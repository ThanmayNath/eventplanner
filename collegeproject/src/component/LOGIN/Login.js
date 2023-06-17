import React from 'react'
import { RxCross2 } from "react-icons/rx";
// import "../LOGIN/Login.scss"
function Registerpage({ setLoginmodalonoff }) {
    const handelLoginModaloff = () => {
        setLoginmodalonoff(false)
    }
    return (
        <>
            <div className="registerCard">

                <div className="header">
                    <div className="title">
                        <h2>

                            Login form
                        </h2>
                    </div>
                    <RxCross2 className='CrossIcon' onClick={handelLoginModaloff} />

                </div>


                <div className="username">
                    <span>
                        Email:
                    </span>
                    <input type="text" />
                </div>

                <div className="username">
                    <span>
                        password:
                    </span>
                    <input type="text" />
                </div>
                <div className="btn"><button>Log in</button></div>
            </div>
        </>
    )
}

export default Registerpage