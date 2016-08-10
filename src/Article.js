//@flow
import React, { PropTypes } from 'react';
import { Row, Col} from 'react-bootstrap';
import './App.css';
export const Article = ({title,url,isReddit}: { title: string, url: string, isReddit: boolean}) =>{

const urlPrefix = isReddit ?'https://www.reddit.com':'';
  return (
    <Row>
      <Col md={12}>
      <div className="content">
        <a target="_blank" href={`${urlPrefix}${url}`} className="title">{title}</a>
      </div></Col>
    </Row>

  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isReddit: PropTypes.bool.isRequired
}


export default Article;
