import React, { Component } from 'react'
import styled from 'styled-components'
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly/>,
                title: 'free shipping',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea.'
            },
            {
                id: 2,
                icon: <FaRedo/>,
                title: '30 days return policy',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea.'
            },
            {
                id: 3,
                icon: <FaDollarSign/>,
                title: 'secured payment',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea.'
            }
        ]
    }

    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row"></div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper = styled.section`
    background: rgba(95, 183, 234, 0.5);
    
    .service-icon {
        font-size: 2.5rem;
        color: var(--primaryColor);
    }

    p {
        color: var(--darkGrey);
    }
`;
