import '../../assets/styles/Profile.css'
import HinataImage from '../../assets/imgs/Hinata-logo.png'

export default function Profile() {


    return (
            <main className='main_profile'>
            <section className='profile_container'>
                <div className='profile'>
                    <img src={HinataImage} alt="profile_image" className='profile_image'/>
                    <h2>Accsj</h2>
                </div>
                <div className='cargo'>
                    <h3>Cargo:</h3>
                    <p>Owner</p>
                </div>
                <div className='date'>
                    <h3>Entrou em:</h3>
                    <p>24/10/2023</p>
                </div>
            </section>
        </main>
    )
}