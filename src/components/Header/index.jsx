import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Sobre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
