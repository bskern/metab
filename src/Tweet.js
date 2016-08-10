//@flow
import React, { PropTypes } from 'react';
import './App.css';
export const Tweet = ({text,name,screenName,imageUrl}:{text:string,name:string,screenName:string,imageUrl:string}) =>{


  return (
    <div className={"tweet"}>
      <header>
        <div className={"obj-left item-img tweet-img"}>
          <img className={"tweet-avatar avatar pull-right"} width="48" height="48" src={imageUrl} alt="sth" />
        </div>
        <div className={"nbfc"}>
          <span className={"account-inline txt-ellipsis"}>
            <b className={"fullname link-complex-target"}>{name}</b>
            <span className={"username txt-mute"}>@{screenName}</span>
          </span>
        </div>
      </header>
      <div className={"tweet-body"}>
        <p className={"js-tweet-text tweet-text with-linebreaks "}>{text}</p>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  imageUrl: PropTypes.bool
}

export default Tweet
