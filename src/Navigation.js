import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'


const Navigation = () => {
return (
    <>
        <BrowserRouter>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">
                Navbar
                </Link>
                <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/home">
                        Home <span class="sr-only">(current)</span>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/about">
                        About
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                        Contact us
                    </Link>
                    </li>
                    <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Event
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item"to="/event1">
                        event1
                        </Link>
                        <Link class="dropdown-item" to="/event2">
                        event2
                        </Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item"to="/event3">
                        event3
                        </Link>
                    </div>
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                        Disabled
                    </a>
                    </li> */}
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                    </button>
                </form>
                </div>
            </nav>
                    <Route path ='/home' component={Home}></Route>
                    <Route path ='/about' component={About}></Route>
                    <Route path ='/contact' component={Contact}></Route>
        </BrowserRouter>
    </>
)
}
export default Navigation;