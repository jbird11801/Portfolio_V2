import selfi from '../assets/Selfi.jpg'

import "./About.css"

export default function About() {

    return (

        <div className="mx-6 mt-6">

            <section className='is-flex-desktop has-text-centered'>

                <img src={selfi} alt="A picture of Jarod Fredette" />

                <p className="is-size-4-desktop  is-size-7-touch">

                    Hi everyone, my name is Jarod Fredette! I love playing games and programming sometimes a mix of the two if I’m making a mod! I enjoy learning about computers and working with technology, and hope to continue doing so for a long time. I strive to create environments where I can constistently grow, communicate, help others, and succeed as a team. In my day to day life, I maintain a positive mental attitude especially in high stress environments. I keep a positive work space. I enjoy practicing clear communication skills, and when I work with a group, I hope everyone leaves knowing more and in a positive mood.

                </p>

            </section>

        </div>

    )

}