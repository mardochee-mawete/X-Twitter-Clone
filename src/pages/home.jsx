import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/timeline/tweet-editor/tweet-editor';
import Tweets from '../components/timeline/tweets/tweets';
import { TopTweetsIcon } from '../components/icon';

function Home() {
    return (
        <main className="timeline">
            <Header valuePageTitle="Home">
                <TopTweetsIcon  source="src/images/Vector.png" />
            </Header>
            <TweetEditor />
            <Tweets />
        </main>

    );
}

export default Home;