import React from 'react';
import { CardText, Col, Container, CardTitle, Button, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import './PaymentsFooter.scss'

class PaymentsFooter extends React.Component {

    render() {
        return (
        
                    <Container className='containerPaymentFooterContainer' >
                        <Col sm="12" className='col12PaymentsFooter'>
                        
            <Input type="checkbox"  className="inputCheckboxPaymentsFooter"/>{' '}
            <CardText className='cardTextPaymentsFooter'>Je reconnais avoir lu et pris connaissance des termes, de la charte de confidentialité et des cgu, et les accepte.</CardText>

                        </Col>
                        <Col sm="12" className='col12PaymentsFooterButtonCol12' >
                        <Link to="OderSummaryScreen">  
                            <Button className='buttonPaymentsFooterbutton' >
                                <CardTitle className="buttonPaymentsCardTitleFooter">PAYER </CardTitle>
                                <CardTitle className="buttonPaymentsCardTitleFooter" >{this.props.total} €  </CardTitle>
                            </Button>
                            </Link>
                        </Col>
                    </Container>
           
        );
    } 
   
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
		total: state.total,
	}
}

export default connect(mapStateToProps)(PaymentsFooter)


