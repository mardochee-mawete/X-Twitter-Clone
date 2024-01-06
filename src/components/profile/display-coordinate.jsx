
export default function DisplayCoordinate({children, coordinate}){
    if(coordinate){
        return(
            <div className="icon-separator-and-profile-details">
                  {children}
            </div>
        )
    }
}