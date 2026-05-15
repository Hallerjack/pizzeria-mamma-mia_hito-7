import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { formatNumber } from "../utils/formatNumber"

const Navbar = () => {
    const { total } = useContext(CartContext)
    const { token, logout } = useContext(UserContext)

    return (
        <div id='navbar'>
            <div id='left-container'>
                <div id='logo'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h3>Pizzeria Mamma Mia!</h3>
                    </Link>
                </div>
                <div id='nav-buttons'>
                    <Link to="/">
                        <button>🍕 Home</button>
                    </Link>

                    {token ? (
                        <>
                            <Link to="/profile">
                                <button id='profile-button'>🔓 Profile</button>
                            </Link>
                            <button id='logout-button' onClick={logout}>🔒 Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button id='login-button'>🔐 Login</button>
                            </Link>
                            <Link to="/register">
                                <button id='register-button'>🔐 Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div id='right-container'>
                <div id='nav-total'>
                    <Link to="/cart">
                        <button id='total-button'>🛒 Total: {formatNumber(total)}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar