import { useRouteError , Link , useLocation} from 'react-router-dom';
import cat from '../assets/cat.jpg'
export default function ErrorPage() {

    const currentPage = useLocation().pathname;

    const error =  useRouteError();

    console.error(error);

    return (

        <div className="mx-6 is-flex is-flex-direction-column is-align-items-center">

            <h1 className="is-size-2-desktop is-size-5-touch has-text-weight-bold is-underlined">Oooops! A {error.status} error has occured! </h1>

            <p>{error.statusText}   </p>

            <img src={cat} alt="Hang in their cat!" />

            <p className="is-size-4-desktop is-size-7-touch">

                Please click <Link to="/"
                    
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    
                >here</Link> to go back to my portfolio!

            </p>

        </div>

    )

}