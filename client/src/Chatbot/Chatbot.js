import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

import { saveMessage } from '../_actions/message_actions'
import Message from './Sections/Message';
import UniqueMessage from './Sections/UniqueMessage';

function Chatbot() {
    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages)

    // make first response that user don't chat. just basic response from chatbot
    useEffect(() => {
        //get trigger from Intents
        eventQuery('welcomeToMyChatbot')
    }, [])
    

    // TextQuery Func
    const textQuery = async (text) => {

        // 1. take care of message who send
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text
                }
            }
        }
        dispatch(saveMessage(conversation))
        console.log('user text', conversation)

        // 2. take care of chatbot message

        const textQueryVariables = {
            text: text,
        }

        try {
            //send request to textQuery route
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            for (let content of response.data.fulfillmentMessages) {
                conversation = {
                    who: 'bot',
                    content: content
                }
                dispatch(saveMessage(conversation))
            }

        } catch (error) {
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: "Error just occured. Please check the problem"
                    }
                }
            }

            dispatch(saveMessage(conversation))
            console.log('error', conversation)
        }
    }

    // EventQuery Func
    const eventQuery = async (event) => {


        // event query don't need to take care of sending message. so just make only chatbot message query
        const eventQueryVariables = {
            event: event,
        }

        try {
            //send request to eventQuery route
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)

            for (let content of response.data.fulfillmentMessages) {
                let conversation = {
                    who: 'bot',
                    content: content
                }
                dispatch(saveMessage(conversation))
            }

        } catch (error) {
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: "Error just occured. Please check the problem"
                    }
                }
            }
            dispatch(saveMessage(conversation))
            console.log('error', conversation)
        }
    }

    const keyPressHandler = (event) => {
        if (event.key === "Enter") {
            if (!event.target.value) {
                return alert('you need to type first')
            }
            //send request to text Query route
            textQuery(event.target.value)

            event.target.value = "";
        }
    }

    // show one message
    const renderOneMessage = (message, index) => {
        console.log('message', message)
        // giving condition here to separate message kinds
        if (message.content && message.content.text && message.content.text.text) {
            // normal text
            return <Message key={index} who={message.who} text={message.content.text.text} />
        } else if (message.content && message.content.payload.fields.card) {
            // custom text
            return <UniqueMessage key={index} who={message.who} text={message.content.text.text} />
        }
    }

    // show message texts
    const renderMessages = (returnMessages) => {
        if (returnMessages) {
            return returnMessages.map((message, index) => {
                return renderOneMessage(message, index);
            })
        } else {
            return null;
        }
    }

    return (
        <div style={{ height: 700, width: 700, border: '3px solid black', borderRadius: '7px' }}>
            <div style={{ height: 644, width: '100%', overflow: 'auto' }}>
                {renderMessages(messagesFromRedux)}
            </div>
            <input style={{margin: 0, width: '100%', height: 50, borderRadius: '4px', padding: '5px', fontSize: '1rem' }} placeholder='Send a message' onKeyPress={keyPressHandler} type='text' />
        </div>
    )
}

export default Chatbot