import './footer.css'

export default function Footer() {

return (

<footer id="footer"  className="footer mt-6">

  <div  className="content is-flex is-flex-direction-column">

    <div className='is-flex  is-justify-content-center'>

      <a target="_blank" href="https://github.com/jbird11801"><span id="icon" className="is-size-1 mr-3"><i className="fa-brands fa-github"></i></span></a>

      <a id = "text" target="_blank" href=" https://www.linkedin.com/in/jarod-fredette-36222522b/"><span id="icon" className="is-size-1 ml-3"><i className="fa-brands fa-linkedin"></i></span></a>
    
    </div>

      <p className='is-flex  is-justify-content-center mt-6 is-size-3-desktop is-size-6-touch has-text-weight-bold' >Made with ❤️ by Jarod Fredette!</p>
  </div> 

</footer>
)

}