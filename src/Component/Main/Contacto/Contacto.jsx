import './Contacto.css'

function Contacto(){

    return(
        <div className='d-flex flex-wrap justify-content-center contacto'>
            <article class="col datos">
                <div className="container">
                    <p><i className="fa-solid fa-minus"></i>Proyectos</p>
                    <h1>Contactame & <br /><span>Colaboremos</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores porro ullam laborum, quaerat cumque quo unde</p>
                </div>
                <div className='col icons'>
                    <div className='d-flex container mb-3'>
                        <i class="fa-solid fa-envelope icon"></i>
                        <p>+54 (123) 123-4567</p>   
                    </div>
                    <div className='d-flex container mb-3'>
                        <i class="fa-solid fa-envelope icon "></i>
                        <p> facucolli@gmail.com</p>
                    </div>
                    <div className='d-flex container mb-3'>
                        <i class="fa-solid fa-location-dot icon"></i>
                        <p>Entre Ríos, Argentina</p>
                    </div>
                </div>
            </article>
            <form className='col'>
                <article className='row column-gap-3'>
                    <input className="col" type="text" placeholder="Nombre *"/>
                    <input className="col" type="text" placeholder="Apellido *"/>
                </article>
                <article className='row column-gap-3'>
                    <input className="col" type="email" id="exampleFormControlInput1" placeholder="Email *"/>
                    <input className="col" type="number" placeholder="Teléfono *"/>
                </article>
                <article className='row'>
                    <input className="asunto" class="form-control" id="exampleFormControlTextarea1" type="text" placeholder="Asunto *"/>
                    <input className="mensaje" class="form-control" id="exampleFormControlTextarea1" type="text" placeholder="Mensaje *"/>
                </article>
                <div className="btnFlecha d-flex justify-content-between">
                    <i class="fa-solid fa-arrow-right"></i>
                    <button type='submit' className='btn btn-primary more'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto