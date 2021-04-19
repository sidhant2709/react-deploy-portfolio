import React, { useState } from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "sidhant2709";
    const templateID = "sidhant_2709";
    const userID = "user_hBrt9lWtEmHAkOP5XbgCr";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description:data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form Sent Sucessfully I will contact you as soon as possible")
            })
            .catch(err=>console.error(`Something went wrong ${err}`))
    }

    console.log(successMessage);

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form</p>
            </div>
            <div className="container contact-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col col-mf-6 col-xs-12">
                            <div className="text-center">
                                <input type="text" id="name" className="form-control" placeholder="Name" name="name"
                                    ref={
                                    register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    }
                                    })
                                }/>
                                <div className="line"></div>
                                <span className="error-message">
                                    {errors.name && errors.name.message}
                                </span>
                            </div>
                            <div className="text-center">
                                <input id="phone" type="text" className="form-control" placeholder="Phone Number"
                                    name="phone"/>
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input id="email" type="email" className="form-control" placeholder="Email" name="email" />
                                <div className="line"></div>
                            </div>

                            <div className="text-center">
                                <input id="subject" type="text" className="form-control" placeholder="Subject"
                                    name="subject" />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea type="text" id="description" className="form-control" placeholder="Description"
                                    name="description"></textarea>
                                <div className="line"></div>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}

export default Contact
