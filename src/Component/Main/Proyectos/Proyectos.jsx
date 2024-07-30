import './Proyectos.css'

function Proyectos(){

    return(
        <>
        <div className='proyectos'>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className="">
                    <p><i className="fa-solid fa-minus"></i>Proyectos</p>
                    <h1>Mis <span>Proyectos</span></h1>
                </div>
                <div className="btnFlecha d-flex justify-content-between">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href="#" className='btn btn-primary more'>Ver todos</a>
                </div>
            </div>
            <div className='d-flex flex-column row-gap-5 flex-wrap'>
                <article className='d-flex flex-wrap justify-content-center gap-2 '>
                    <img src="/proyecto1.jpeg" alt="" className='img-fluid col-6'/>
                    <div className='col row p-4 pt-5'>
                        <div className='d-grid gap-2 d-md-block'>
                            <a href="" className='btn btn-sm col m-1'>Diseño UI/UX</a>
                            <a href="" className='btn btn-sm col m-1'>Diseño de App</a>
                            <a href="" className='btn btn-sm col m-1'>Wireframe</a>
                        </div>
                        <h3>Podcast - Podcast <br/> Aplicación Movil</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugiat eius in necessitatibus dolore aliquid</p>
                        <div className="btnFlecha">
                            <i class="fa-solid fa-arrow-right"></i>
                            <a href="#" className='btn more'>Ver detalles</a>
                        </div>
                    </div>
                </article>
                <article className='d-flex flex-wrap justify-content-center gap-2'>
                    <div className='col row p-4 pt-5'>
                        <div className='d-grid gap-2 d-md-block'>
                            <a href="" className='btn btn-sm col m-1'>Diseño Web</a>
                            <a href="" className='btn btn-sm col m-1'>Landing Page</a>
                            <a href="" className='btn btn-sm col m-1'>Wireframe</a>
                        </div>
                        <h3>Podcast - Podcast Mobile<br/> Aplicación Landing Page</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius in necessitatibus dolore aliquid</p>
                        <div className="btnFlecha">
                            <i class="fa-solid fa-arrow-right"></i>
                            <a href="#" className='btn more'>Ver detalles</a>
                        </div>
                    </div>
                    <img src="/proyecto2.jpeg" alt="" className='img-fluid col-6'/>
                </article>
            </div>
        </div>
        </>
    )
}

export default Proyectos