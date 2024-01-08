import PageTitle from "./page-title"

export default function Header({valuePageTitle, children}){
    return(
        <header className='header'>
             <PageTitle value={valuePageTitle} />
             {children}
        </header>
    )
}