import './Footer.css'

function Footer(){

    return(
        <>
        <div className='conteiner'>
            <div className='row column-gap-5'>
                <h2>Nos vemos allá</h2>
                <div className="container">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href="#contacto" className='btn btn-primary'>Contratame</a>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <a class="navbar-brand" href="#">
                        <img src="/imgPrueba.jpeg" alt="" width="35" />
                        Facundo
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestias velit odit pariatur corporis labore assumenda</p>
                    <div class="container">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-behance"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='col'>
                    <h3>Navegación</h3>
                    <a href="#inicio">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#sobremi">Sobre mi</a>
                    <a href="#proyectos">Proyectos</a>
                </div>
                <div className='col'>
                    <h3>Contacto</h3>
                    <p>+54 (343) 123-4567</p>
                    <p>www.example.com</p>
                    <p>facucolli@gmail.com</p>
                    <p>Entre Ríos, Argentina</p>
                </div>
                <div className='col'>
                    <h3>Obten la última información</h3>
                    <form className='d-flex'>
                    <input className='form-control' type="email" placeholder="Dirección Email"/>
                    <button><i class="fa-solid fa-play"></i></button>
                    </form>
                </div>
            </div>
            <div className='row'>
                <p>Copyright © 2024 Facundo. All Rights Reserved.</p>
                <a href="">User Terms & Conditions | Privacy Policy</a>
            </div>
        </div>
        </>
    )
}

export default Footer