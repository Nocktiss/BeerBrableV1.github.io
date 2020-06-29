import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import OderSummary from '../components/OrderSummary/OrderSummary'
import Header from '../components/lib/Header/Header'
import { connect } from 'react-redux'

import { CardText, Container } from 'reactstrap';

class OderSummaryScreen extends Component {

    render() {
        return (

            <div className="backgroundScreen">
                <StickyContainer>
                    <Sticky>
                        {({
                            style,

                            // the following are also available but unused in this example
                            isSticky,
                            wasSticky,
                            distanceFromTop,
                            distanceFromBottom,
                            calculatedHeight
                        }) => (
                                <header style={style}>

                                    <div className="stickyProductScreen">
                                        <Header text="Résumé de la commande " />
                                        <CardText className="NameBarPanier"> Selky </CardText>
                                    </div>
                                </header>
                            )}
                    </Sticky>
                    <OderSummary />
                </StickyContainer>
                <Container className='productContainerOderSummaryScreen'>
                    <div className="totalPricePaymentCartScreen">
                        <CardText> Total  </CardText>

                        <CardText>{this.props.total} € </CardText>
                    </div>

                </Container>

            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.total,
    }
}


export default connect(mapStateToProps)(OderSummaryScreen)

