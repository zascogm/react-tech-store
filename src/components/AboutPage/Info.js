import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img 
                            src={aboutBcg} 
                            className="img-fluid img-thumbnail" 
                            alt="about company"
                            style={{background: "var(--darkGrey)"}}
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us"/>
                        <p className="text-lead text-muted my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy text 
                            ever since the 1500s.
                        </p>
                        <button 
                            className="main-link" 
                            type="button" 
                            style={{ marginTop: "2rem" }}
                        >
                            More info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
