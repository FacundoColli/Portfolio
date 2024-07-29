import './Header.css'

function Header(){

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary header">
            <div class="container-fluid container">
                <a class="navbar-brand" href="#">
                    <img src="/imgPrueba.jpeg" alt="" width="35" />
                    Facundo
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse container" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Servicios</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">Sobre Mi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                    </ul>
                    <a class="btn btn-primary btnHeader">Contactame</a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header