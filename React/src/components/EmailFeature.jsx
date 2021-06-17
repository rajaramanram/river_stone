import React from 'react';
import emailjs from 'emailjs-com';



function EmailFeature() {

    function sendEmail(e) {
        e.preventDefault();

        
        emailjs.sendForm('service_69qd3mz', 'template_qkfaszg', e.target, 'user_3k6LfNZBHoLZUZ4kLfp6b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }    

    return (
        <div className='container'>
            
            <form onSubmit={sendEmail}>
                <h1>Send Email Feature</h1>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            
        </div>
    );
};
export default EmailFeature