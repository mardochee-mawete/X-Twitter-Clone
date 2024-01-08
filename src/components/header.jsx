import PageTitle from "./page-title"

export default function Header({valuePageTitle, children}){
    return(
        <div className='header'>
             <PageTitle value={valuePageTitle} />
             {children}
        </div>
    )
}