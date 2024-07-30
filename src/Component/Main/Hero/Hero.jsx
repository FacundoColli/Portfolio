import './Hero.css'

function Hero(){

    return(
        <>
        <section class="hero bg-body-tertiary text-center">
            <article>
                <p><i class="fa-solid fa-minus"></i> Hola</p>
                <h1>Soy Facundo,<br/>Desarrollador FullStack</h1>
            </article>
            <img src="/pruebaHero.png" class="imgHero" alt="..."/>
            <div class="d-flex botones container">
                <p class="portfolio-btn">Portfolio<i class="fa-solid fa-arrow-right"></i></p>
                <a href="https://github.com/FacundoColli" target="_BLANK" class="btn btnHero">Aquí</a>
            </div>
        </section>
        </>
    )
}

export default Hero