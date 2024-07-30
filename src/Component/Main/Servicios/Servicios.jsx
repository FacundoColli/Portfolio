import './Servicios.css'

function Servicios(){

    return(
        <div className='services'>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className="">
                    <p><i className="fa-solid fa-minus"></i>Servicios</p>
                    <h1>Mis <span>Servicios</span></h1>
                </div>
                <div className="btnFlecha d-flex justify-content-between">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href="#" className='btn btn-primary'>Ver todos</a>
                </div>
            </div>
            <div className='d-flex flex-wrap gap-5 justify-content-center'>
                <div className=" text-center cards">
                    <i className="fa-solid fa-pen-nib"></i>
                    <div className="card-body">
                        <h3 className="card-title">Diseño UI/UX</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <a href="#" className="btn btn-primary">Ver más<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className=" text-center cards">
                    <i className="fa-solid fa-bezier-curve"></i>
                    <div className="card-body">
                        <h3 className="card-title">Diseño de App</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <a href="#" className="btn btn-primary">Ver más<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className=" text-center cards">
                    <i className="fa-solid fa-pager"></i>
                    <div className="card-body">
                        <h3 className="card-title">Diseño Web</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <a href="#" className="btn btn-primary">Ver más<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios