import '../Sidebar/Sidebar.css';

export default function Aside() {
    return (
            <div className="right-content">
                <a href="/hinata">
                    <img className="right-image" src="/imgs/Hinata-logo.png" alt="hinata" />
                </a>
                <a href="/kageyama">
                    <img className="right-image" src="/imgs/Kageyama-logo.png" alt="kageyama" />
                </a>
                <a href="/nishinoya">
                    <img className="right-image" src="/imgs/Nishinoya-logo.png" alt="nishinoya" />
                </a>
                <a href="/daichi">
                    <img className="right-image" src="/imgs/Daichi-logo.png" alt="daichi" height="115" />
                </a>
                <a href="/tsukishima">
                    <img className="right-image" src="/imgs/Tsukishima-logo.png" alt="tsukishima" />
                </a>
                <a href="/azumane">
                    <img className="right-image" src="/imgs/Azumane-logo.png" alt="azumane" />
                </a>
            </div>
    )
}