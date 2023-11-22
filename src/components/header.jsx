import {PageTitle} from './title';
import {TopTweetsIcon} from './icon';

export default function Header(){
    return(
        <div className='header'>
             <PageTitle value="Home" />
             <TopTweetsIcon />
        </div>
    )
}