//@flow
import React, { PropTypes } from 'react';
import { Row, Col} from 'react-bootstrap';

export const Header = ({name,cssClass}:{name: string, cssClass: DataProviderCssName}) => (
    <Row>
      <Col md={12}><div className={cssClass}>{name}</div></Col>
    </Row>
)
Header.PropTypes = {
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired
}

export default Header
