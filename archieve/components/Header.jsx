import '/src/styles/header.css'

export function Header() {
  return (
    <header>
      <nav className="nav">

        <a href="#" className='nav__logo'>
          <img src="public/images/logo.png" alt="" />
        </a>

        <div className="nav__menu " >
          <ul>
            <li>
              <a href="#">HOME</a> 
            </li>
            <li>
              <a href="#">AUCTIONS</a>
            </li>
            <li>
              <a href="#">TASKS</a>
            </li>
            <li>
              <a href="#">GAMES <img src="public/images/drop-symbol.svg" alt="" /></a>
            </li>
            <li>
              <a href="#">WALLET</a>
            </li>
          </ul>
        </div>

        <div>
          <a href="#" className="btn">Connect Wallet</a>
        </div>
      </nav>
    </header>
  );
}
