import '/src/styles/hero.css'

export function Hero() {
  return (
    <main  className="main">
      <img src="public/images/Gradient.svg" className='hero__img' alt="img" />
      <div className='hero'>
        <h2 className="main__title">
          GET NEW SOLUTION
        </h2>

        <div className="hero__data">
          <div className="hero__title">
            <img src="public/images/vector-coin.svg" alt="" />
            <h1>
              Copup coin
            </h1>
          </div>

          <div className="hero__description grid">
            <div>
              <a href="#" className="hero-btn">BUY COPUP COIN</a>
            </div>

            <div className="hero__para">
              <p>Copup is the native utility 
                and governance coin created 
                to <br />incentivize and reward 
                activities that support the copup 
                ecosystem
              </p>

              <a href="#" className="btn">
              Read Whitepaper
              <img src="public/images/forward-symbol.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="public/images/Gradient-2.svg" className='hero__img-2' alt="" srcset="" />
    </main>
  );
}
