import './Footer.css'

function Footer(){

    return(
        <>
        <div className='footer row-gap-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Nos vemos allá</h1>
                <div className="btnFlecha d-flex justify-content-between">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href="#contacto" className='btn btn-primary'>Contratame</a>
                </div>
            </div>
            <div className='row column-gap-3 row-gap-3'>
                <div className='col p-0'>
                    <p>
                        <img src="/imgPrueba.jpeg" alt="" width="35" />
                        Facundo
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestias velit odit pariatur corporis labore assumenda</p>
                    <div class="d-flex justify-content-between">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-behance"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='col d-flex flex-column align-items-start p-0'>
                    <h3>Navegación</h3>
                    <a href="#inicio" className='btn'>Inicio</a>
                    <a href="#servicios" className='btn'>Servicios</a>
                    <a href="#sobremi" className='btn'>Sobre mi</a>
                    <a href="#proyectos" className='btn'>Proyectos</a>
                </div>
                <div className='col d-flex flex-column align-items-start p-0'>
                    <h3>Contacto</h3>
                    <a className='btn'>+54 (343) 123-4567</a>
                    <a className='btn'>www.example.com</a>
                    <a className='btn'>facucolli@gmail.com</a>
                    <a className='btn'>Entre Ríos, Argentina</a>
                </div>
                <div className='col col d-flex flex-column align-items-start p-0'>
                    <h3>Obten la última información</h3>
                    <form className='d-flex'>
                        <input className='form-control' type="email" placeholder="Dirección Email"/>
                        <button class="fa-solid fa-play"></button>
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Copyright © 2024 Facundo. All Rights Reserved.</p>
                <p>User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
        </>
    )
}

export default Footer