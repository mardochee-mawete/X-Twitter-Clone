import {PageTitle} from './title';
import {TopTweetsIcon} from './icon';

export default function Header({valuePageTitle, sourceTopTweetsIcon}){
    return(
        <div className='header'>
             <PageTitle value={valuePageTitle} />
             <TopTweetsIcon source={sourceTopTweetsIcon}/>
        </div>
    )
}