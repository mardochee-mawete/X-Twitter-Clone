import InputText from "../inputText"
import { SearchIcon } from "../icon"


export default function Search(){
    return(
        <div className="search-tweet">
            <InputText placeholder="Serach Twitter" className="input-search-twett"/>
            <SearchIcon />
        </div>
    )
}