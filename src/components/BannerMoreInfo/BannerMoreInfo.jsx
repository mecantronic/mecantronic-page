import "./BannerMoreInfo.css"

export const BannerMoreInfo = () =>{
    return (
        <div className="bannerMoreInfo">
            <div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <a href="mailto:info@mecantronic.com.ar" target="_blank" rel="noreferrer">
                    <button>Quiero mas info</button>
                </a>
            </div>
            <h1 className="text-yellow-400 text-5xl text-center">...VER DIRECCION DEL BOTON mas info...</h1>
        </div>
    )
}