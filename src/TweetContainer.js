import React, { PropTypes } from 'react';
import Header from './Header';
import Tweet from './Tweet';
//console.log(tweet.text,tweet.user.name,tweet.user.screen_name,tweet.user.profile_image_url));
const TweetContainer = ({title,tweets}) => (
      <div>
        <Header name={title} cssClass="TwitterHeader"/>
        {tweets.map((tweet, index) =>(
          <Tweet
          text={tweet.text}
          name={tweet.user.name}
          screenName={tweet.user.screen_name}
          imageUrl={tweet.user.profile_image_url}
          key={index}
          />
        ))}
      </div>
  )

TweetContainer.PropTypes = {
  title: PropTypes.string.isRequired,
  tweets: PropTypes.array.isRequired
}


export default TweetContainer;
