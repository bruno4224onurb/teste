import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Footer from '../../components/footer/Footer';

function Perfil() {

    let navigate = useNavigate();

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/login")
        }
    }, [usuario.token]);

    return (
        <div>
        <div className='container mx-auto my-5 rounded-2xl overflow-hidden'>
            <img className='w-full h-72 object-cover border-b-8 border-white' src="https://i.imgur.com/x73G4P6.jpg" alt="Capa do Perfil" />
            {usuario.foto === "" ? <img src="https://i.imgur.com/bbC0sF0.jpg" alt="Foto padrão"
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
                :
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
            }
            <div className="relative mt-[-6rem] h-72 flex flex-col bg-gradient-to-t from-lime-900 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>
        </div>
        <div className='fixed bottom-0 w-full'>
        <Footer></Footer>
        </div>
        </div>
    );
}

export default Perfil;