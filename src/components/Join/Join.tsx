import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Join.css'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particles from 'react-particles-js';

export const Join = (_props: any) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const history = useHistory();


    const signIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (!name || !room) {

            return toast.error('🦄 Please enter credentials!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        history.push(`/chat?name=${name}&room=${room}`);


    }

    return (
        <div className="joinOuterContainer">
       

            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <button onClick={(event) => signIn(event)} className={'button mt-20'} type="submit">Sign In</button>
            </div>
            <ToastContainer />
            {/* <Particles canvasClassName="particle"

params={{
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": 1
        },
        "size": {
            "value": 2
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}} /> */}
        </div>

    );
}

