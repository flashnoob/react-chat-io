import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { RouteComponentProps } from 'react-router-dom'

let socket: SocketIOClient.Socket
export const Chat = ({ location }: RouteComponentProps<any>) => {
    const [name, setName] = useState<string | string[] | null>('')
    const [room, setRoom] = useState<string | string[] | null>('')

    useEffect(() => {


        const { name, room } = queryString.parse(location.search)
        socket = io('http://localhost:5000');
        socket.on('connect', (event: any) => {
            console.log('connected');
        })            //starting speed at 0
        let speed = 0;

        //Simulating reading data every 100 milliseconds
        setInterval(function () {
            //some sudo-randomness to change the values but not to drastically
            let nextMin = (speed - 2) > 0 ? speed - 2 : 2;
            let nextMax = speed + 5 < 140 ? speed + 5 : Math.random() * (130 - 5 + 1) + 5;
            speed = Math.floor(Math.random() * (nextMax - nextMin + 1) + nextMin);
            socket.on('chat', (counter: number) => {
                console.log(counter);
            });
            //we emit the data. No need to JSON serialization!
            socket.emit('chats', `message`);
        }, 100);
        // socket=io('localhost:5000')
        setName(name)
        setRoom(room)
        console.log(socket);
        return () => {

        }
    }, [])

    return (
        <div>
            {name + ' ' + room}
        </div>
    )
}

