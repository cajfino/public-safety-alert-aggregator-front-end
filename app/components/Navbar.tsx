export default function Navbar(){
    return(
        <nav>
            <div className="nav-logo">
                <img src="/" alt="Critical Signal logo" />
                <p>Critical Signal</p>
            </div>
            <div className="nav-controls">
                <input type="text" placeholder="Search alerts" />
                <button aria-label="Open menu">☰</button>
                <button aria-label="Open alert preferences">🔔</button>
            </div>
        </nav>
    );
}