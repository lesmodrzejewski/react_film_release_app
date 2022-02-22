
const FilmDetail = ({name, url}) => {

    return(
        <>
            <a href={url} target="_blank" className="film-name"><li>{name}</li></a>
        </>

    )
    
}

export default FilmDetail;