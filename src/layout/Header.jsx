function Header() {
    return (
        <nav className='purple darken-2'>
            <div className='nav-wrapper'>
                <a href='!#' className='brand-logo'>
                    MoviesDB
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/Maxim280596'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
