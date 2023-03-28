import { Grid} from "@mui/material";
import './login.scss'
import { ErrorLogo, Event, FastTrack, Hemming, ProductDrop, SaleItem, Studio} from "./svg";
import axios from "axios";
import { useState} from "react";
import {useNavigate} from "react-router-dom";


export const Login = () => {

    const key =
        "mykey=jYwrtdSw7iO92ambpJ8UsNYXXIFTp2eIImew8gPTqYsNV3TWe7YzuSl4tx%2BarSsa15aOnNN2j8L%2BlsPM2JZ52A==";
    const urlHead = "http://api-lulu.hibitbyte.com/auth/login";

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [erroMess, setErroMess] = useState(null)

    const Navigate = useNavigate();


    const handleSubmit = (evt) => {
        evt.preventDefault()

        axios.post(urlHead + '?' + key, {
            email: email,
            password: password
        })
            .then((res) => {
                console.log(res.data)
                Navigate('/');

            })
            .catch((error) => {
                setErroMess("Something's not right with your email address or password");
                console.log(error);
            });
    }

    const handleError = () => {
        if (erroMess) {
            console.log(erroMess)

        }
    }


    return (
        <div className='login'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '55px',
                    }}>
                        Wellbeing made easier. We've got you.
                    </h1>
                    <hr/>
                </Grid>

                <Grid item xs={5} style={{marginTop: '20px'}}>
                    <div className='login_menberShip'>
                        <h1 className='login_menberShip_text'>
                            Discover lululemon Membership
                        </h1>
                        <p style={{fontSize: '17px', margin: '20px 0 30px'}}>One account. Tons of benefits. Endless
                            possibilities.</p>
                    </div>
                    <div className='login_menberShip' style={{marginTop: '40px'}}>
                        <h1 className='login_menberShip_text'>
                            Membership benefits include
                        </h1>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <ProductDrop/>
                            <p style={{fontSize: '17px', paddingLeft: '10px',}}>Early Access to Product Drops</p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <SaleItem/>
                            <p style={{fontSize: '17px', paddingLeft: '10px',}}>Exchange or Credit on Sale Items
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <Studio/>
                            <p style={{fontSize: '17px', paddingLeft: '10px',}}>Select lululemon Studio Content

                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <Event/>
                            <p style={{fontSize: '17px', paddingLeft: '10px',}}>Virtual Community Events
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <FastTrack/>
                            <p style={{fontSize: '17px', paddingLeft: '10px',}}>Receipt-Free and Fast-Track Returns

                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 0'
                        }}>
                            <Hemming/>
                            <p style={{fontSize: '17px', paddingLeft: '10px',}}>Free Hemming
                            </p>
                        </div>
                    </div>
                    <div style={{margin: '10px 0'}} className='login_experienceMem'>
                        <p className='login_experienceMem_text' style={{fontSize: '15px'}}>Experience Membership</p>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <div className='login_vLine'></div>
                </Grid>


                <Grid item xs={5} style={{marginTop: '20px', maxWidth: '400px'}}>
                    <form className='login_rightPart' onSubmit={handleSubmit} onClick={handleError}>
                        <h1 className='login_menberShip_text'>
                            Sign in to your member account
                        </h1>

                        {erroMess &&
                            <div style={{
                                fontSize: '17px', border: '1px red solid',
                                paddingLeft: '5px',
                                margin: '10px 0',
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: '#fae8ea',
                                padding:'5px'
                            }}><ErrorLogo/>
                                <p style={{paddingLeft: '5px'}}>{erroMess}</p>
                            </div>
                        }

                        <label style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                            <p style={{fontSize: '17px'}}>Email:</p>
                            <input type="text" style={{height: '30px', fontSize: '18px'}}
                                   onChange={(evt) => {
                                       setEmail(evt.target.value)
                                   }}/>
                        </label>
                        <label style={{display: 'flex', flexDirection: 'column', margin: '20px 0'}}>
                            <p style={{fontSize: '17px'}}>Password :</p>
                            <input type="password" style={{height: '30px', fontSize: '18px'}}
                                   onChange={(evt) => {
                                       setPassword(evt.target.value)
                                   }}/>
                        </label>
                        <div style={{margin: '10px 0'}} className='login_experienceMem'>
                            <p className='login_experienceMem_text' style={{fontSize: '15px'}}>Forgot your
                                password?</p>
                        </div>
                        <button type='submit' style={{padding: '15px', margin: '20px 0'}}>
                            SIGN IN
                        </button>

                        <p style={{fontSize: '15px', color: '#57585B'}}>By signing in, you agree to the <span>Terms of Use</span> and
                            acknowledge the <span>Privacy Policy</span>. California consumers, see our <span>Notice of Financial Incentives</span>.
                        </p>
                    </form>

                    <hr/>
                    <div style={{marginTop: '20px'}}>
                        <span className='login_rightPart_create'>Create a member account</span>

                    </div>
                </Grid>


            </Grid>
        </div>
    )
}