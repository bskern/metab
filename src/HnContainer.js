import React, { PropTypes } from 'react';
import Article from './Article';
import Header from './Header';


const HackerNewsContainer = ({title,items}) => (
      <div>
        <Header name={title} cssClass="HNheader"/>
        {items.map((item, index) =>(
          <Article
          title={item.title}
          url={item.url}
          key={index}
          isReddit={false}
          />
        ))}
      </div>
  )

HackerNewsContainer.PropTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}


export default HackerNewsContainer;
