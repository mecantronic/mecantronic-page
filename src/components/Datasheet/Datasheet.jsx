import "./Datasheet.css"
export const Datasheet = ({product}) =>{
    return(
        <>
        <div className='Datasheet'>
            <h3>Ficha técnica</h3>
            <h2>{product["subtitleDatasheet"]}</h2>
            <div>
                {product["datasheet"].map((specification)=>{
                    return (
                        <div className="specification">
                            <p className="espTitle">Titulo:</p>
                            <p>{specification["specification"]}</p>
                        </div>
                    )
                })}
            </div>
            <a href={`../assets/products/${product["title"]}/datasheet-${product["title"]}.pdf` } target="_blank" rel="noreferrer">
                <button>Descargar</button>
            </a>
        </div>
        </>
    )
}