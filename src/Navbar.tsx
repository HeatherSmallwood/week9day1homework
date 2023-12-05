const Navbar = () => {
  return (
<div>
  <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
    <a className="navbar-brand" href="#">Navbar</a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading1">Rate Your Favorite Season</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading2">Pick Your Favorite Spinoff</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Learn About The Top Three Villians</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#scrollspyHeading3">Negan</a></li>
          <li><a className="dropdown-item" href="#scrollspyHeading4">Whispers</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#scrollspyHeading5">The Governor</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex={0}>
    <h4 id="scrollspyHeading1">Rate Your Favorite Season</h4>
    <p>...</p>
    <h4 id="scrollspyHeading2">Pick Your Favorite Spinoff</h4>
    <p>...</p>
    <h4 id="scrollspyHeading3">Read About the Bat Wielding Negan</h4>
    <p>...</p>
    <h4 id="scrollspyHeading4">Read, or listen closely to the story of the Whispers</h4>
    <p>...</p>
    <h4 id="scrollspyHeading5">What's more frightening then politicians? Learn more about the Governor</h4>
    <p>...</p>
  </div>
</div>


  )
}
export default Navbar