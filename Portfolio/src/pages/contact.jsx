import "./contact.css"

export default function Contact() {

    return (

        <div className="mx-6">

            <h1 className="is-size-2-desktop is-size-5-touch has-text-weight-bold is-underlined">Contact Me</h1>

            <section className="is-flex">

                <input className="is-flex-grow-5 mr-4" type="text" placeholder="Future email spot" />

                <ul className="is-flex is-flex-direction-column is-flex-shrink-2">

                    <li><a id = "text" href="tel:1-603-960-4546"><button id="button"className="text has-text-weight-bold is-size-6"><i className="fa-solid fa-phone"></i> 1-603-960-4546</button></a></li>

                    <li><a id = "text" href="mailto:jarodfredette@gmail.com"><button id="button"className="text has-text-weight-bold is-size-6"><i className="fa-solid fa-envelope"></i> jarodfredette@gmail.com</button></a></li>

                </ul>

            </section>

        </div>

    )

}