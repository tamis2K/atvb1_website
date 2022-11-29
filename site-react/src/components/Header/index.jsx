import './style.css';

import imgLogo from '../../assets/img/LOGO.png';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img src={imgLogo} alt="Logomarca da AGF+" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Sobre a AGF</a>
                        </li>
                        <li>
                            <a href="#">Comece a investir</a>
                        </li>
                        <li>
                            <a href="#">Ações</a>
                        </li>
                        <li>
                            <a href="#">Fundos Imobiliarios</a>
                        </li>
                        <li>
                            <a href="#">Atendimento</a>
                        </li>
                        <li>
                            <a href="#">Acesse sua conta</a>
                        </li>
                        <li>
                            <button>Abra a sua conta</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}