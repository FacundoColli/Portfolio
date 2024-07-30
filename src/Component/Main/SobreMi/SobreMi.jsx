import './SobreMi.css'

function SobreMi(){

    return(
        <div className='d-flex flex-wrap justify-content-center aboutme gap-5'>
            <section class="experiencia d-flex">
                <h1 className='col-3'>FACUNDO COLLI</h1>
                <div className='col'>
                    <h2>2</h2>
                    <p>Meses de Experiencia</p>
                </div>
            </section>
            <section className="col texto ">
                <h6><i className="fa-solid fa-minus"></i>Sobre mí</h6>
                <h1>Quién es <span>Facundo Colli?</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam a rerum corporis sint magnam?</p>
                <div className="d-flex flex-wrap justify-content-start gap-5">
                    <div>
                        <h3>1+</h3>
                        <p>Proyectos Completados</p>
                        <div class="btnFlecha d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-right"></i>
                            <a href="" className='btn'>Descargar CV</a>
                        </div>
                    </div>
                    <div>
                        <h3>1+</h3>
                        <p>Industrias Cubiertas</p>
                        <p>Facundo Colli</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SobreMi