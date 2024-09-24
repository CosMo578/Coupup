import '/src/styles/about.css';

export function About() {
  return (
    <section className='section__about'>
      <div className='section__data'>
        <h2 className='section__title'>ABOUT COPUP</h2>

        <h1 className='about__title'>Why Copup?</h1>

        <p className='section__description'>
          Copup will make you so rich and you’ll be so speechless that <br />
          will leave you having ountless orgasim
        </p>
      </div>

      <img
        src='public/images/about-side-img.svg'
        className='about__side'
        alt=''
      />

      <div className='about__details'>
        <div className='auction'>
          <h3>AUCTION</h3>

          <p>
            Join exciting auctions and win amazing items. Experience
            <br />
            the thrill of bidding on unique products, from rare collectibles to
            the
            <br /> latest gadgets.
          </p>

          <ul>
            <li>Auction a wide range of items</li>
            <li>Place bids using copup ticket </li>
            <li>Stay tuned to copup news</li>
          </ul>

          <img src='public/images/auction.png' alt='' />
        </div>

        <div className='about__detail__col-2'>
          <div className='games'>
            <h3>GAMES</h3>

            <p>
              Play fun games and earn rewards. Dive into a world of
              entertainment <br />
              with a variety of exciting games that challenge <br />
              your skills and creativity.
            </p>

            <img src='public/images/game.png' alt='' />
          </div>

          <div className='wallet'>
            <h3>WALLET</h3>
            <p className='para-1'>
              Manage your points and rewards in your wallet. Keep track of{' '}
              <br />
              all your earned points and rewards in one convenient place.
            </p>

            <p className='para-2'>
              We’ve worked with over 400 companies to build
            </p>

            <img src='public/images/wallet.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
