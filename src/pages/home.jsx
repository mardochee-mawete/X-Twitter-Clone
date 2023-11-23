import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/timeline/tweet-editor';
import Tweet from '../components/timeline/tweet';

function Home() {
    return (
        <main className="timeline">
            <Header valuePageTitle="Home" sourceTopTweetsIcon="src/images/Vector.png"/>
            <TweetEditor />
            <Tweet />
        </main>

    );
}

export default Home;