import FilmDetail from "./FilmDetail"

const FilmList = ({films}) => {

    const filmNodes = films.map( film => {
        return (
            <FilmDetail key={film.id} name={film.name} url={film.url} />
        )
    })

    return (
        <div className="film-list">
             {filmNodes}
        </div>
        
    )
}

export default FilmList;