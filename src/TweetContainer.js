//@flow
import React, { PropTypes } from 'react';
import Header from './Header';
import Tweet from './Tweet';

const TweetContainer = ({title,tweets}:{title:string,tweets:Array<any>}) => (
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
