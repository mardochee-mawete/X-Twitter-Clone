import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/timeline/tweet-editor';

function Home() {
    return (
        <main className="timeline">
            <Header valuePageTitle="Home" sourceTopTweetsIcon="src/images/Vector.png"/>
            <TweetEditor />
        </main>

    );
}

export default Home;