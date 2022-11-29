import './style.css';

export function Footer() {
    return (
        <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-company">
                    <p class="footer-logo">Ações Garantem o Futuro</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minus consequuntur nam saepe. Quidem laborum iste dolores libero dignissimos. Tempore vero molestias aliquid voluptatibus dolor tempora, fugit ad doloremque autem.</p>
                </div>

                <div class="footer-menu">
                    <p class="footer-menu-title">Nossa Empresa</p>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Especialistas</a></li>
                        <li><a href="#">Missão e Visão</a></li>
                        <li><a href="#">Nossos Valores</a></li>
                    </ul>                    
                </div>

                <div class="footer-menu">
                    <p class="footer-menu-title">Contato</p>
                    <ul>
                        <li>+55 (11) 9 9927-3329</li>
                        <li>Rua São Felipe, 90</li>                        
                        <li>São Paulo - SP</li>
                    </ul>
                </div>

                <div class="footer-menu">
                    <p class="footer-menu-title">Parceiros</p>
                    <ul>
                        <li><a href="#">XP</a></li>
                        <li><a href="#">Rico</a></li>
                        <li><a href="#">Clear</a></li>
                    </ul>                    
                </div>
            </div>

            <div class="footer-social">
                <span class="facebook"></span>
                <span class="twitter"></span>
                <span class="instagram"></span>
                <span class="linkedin"></span>
            </div>

            <p class="footer-copyright">
                &#169; 2022 - Todos os direitos reservados
            </p>
        </div>
    </footer>
    )
}