import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
                <Title title="Contact us" />
                <form 
                    className="mt-5" 
                    action="https://formspree.io/xdowwyej" 
                    method="POST"
                >
                    {/* first */}
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="John smith"
                        />
                    </div>
                    {/* email */}
                    <div className="form-group">
                        <input 
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="email@email.com"
                        />
                    </div>
                    {/* subject */}
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="important!"
                        />
                    </div>
                    {/* text area */}
                    <div className="form-group">
                        <textarea 
                            name="message" 
                            className="form-control" 
                            rows="10" 
                            placeholder="hello buddy"
                        />
                    </div>
                    {/* submit */}
                    <div className="form-group mt-3">
                        <input 
                            type="submit" 
                            value="Send" 
                            className="form-control bg-primary text-white"
                        />
                    </div>
                </form>
            </div> 
        </div>
        </section>
    )
}
