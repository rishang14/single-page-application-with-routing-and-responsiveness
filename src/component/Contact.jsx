import "../styles/contact.scss" ; 

const Contact=()=>{ 
    return(
        <div className="contact">
            <main>
                <h1>
                 Contact me 
                </h1> 
                 <form >
                <div>
                    <label>Name:</label> 
                    <input type="text" required placeholder=" Enter your name" />
                </div> 
                <div>
                    <label>Email:</label> 
                    <input type="email" required placeholder=" Enter your email" />
                </div> 
                <div>
                    <label>Msg:</label> 
                    <input type="text" required placeholder=" Enter your query here" /> 
                </div>  
                <button type="submit">Send</button>
                </form> 

            </main>
        </div>
    )

} 
export default Contact;