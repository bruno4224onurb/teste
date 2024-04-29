import './Home.css';
import home from '../../assets/home.png';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center mb-auto" style={{ paddingTop: '10px' }}>
           
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                <img src={home} alt="" style={{ width: '100%', height: 'auto' }} />
                  
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* Conteúdo do outro lado, se houver */}
                </div>
            
            
            <Footer></Footer>

        </>
    );
}

export default Home;