import './style.css'

export default function footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} -
                todos os direitos reservados.
                <br />
                SENAI - BAHIA
            </p>
        </footer>
    )
}