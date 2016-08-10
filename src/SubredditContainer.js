//@flow
import React, { PropTypes } from 'react';
import Article from './Article';
import Header from './Header';


const SubredditContainer = ({subreddit,articles}:{subreddit:string,articles:Array<any>}) => (
      <div>
        <Header name={subreddit} cssClass="Redditheader" />
        {articles.map((article, index) =>(
          <Article
          title={article.data.title}
          url={article.data.permalink}
          key={index}
          isReddit/>
        ))}
      </div>
  )

SubredditContainer.PropTypes = {
  subreddit: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired
}


export default SubredditContainer;
