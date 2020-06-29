import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, subtractQuantity, } from '../redux/actions/CartActions'
import { Link } from 'react-router-dom';
import { CardText,Media } from 'reactstrap';


import './Home.scss'


import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

class Home extends Component {

    
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(id) {
        this.setState(prevState => ({
            modal: id
        }));
    }
    render() {
        const externalCloseBtn = <button className="crossModal" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;

        let itemList = this.props.items.map(item => {
            return (
                <div className="homeProduct">
                    <button className="buttonContainerHome" onClick={() => this.toggle(item.id)}>{this.props.buttonLabel}
                        <Media key={item.id}  >
                            <Media body className="mediaBodyContainerHome">
                                <div className="mediaBodyTitle">
                                    <Media heading className='MediaTextHome'>
                                        {item.title}
                                    </Media>
                                    <Media heading className='MediaTextQty'>
                                        {item.qty}
                                    </Media>
                                </div>
                                <Media className='MediaTextQty'>
                                    {item.desc}
                                </Media>
                                <Media className='MediaTextHome'>
                                    {item.price} €
                                </Media>
                            </Media>
                            <Media right href="#" className="itemMediaImgHome">
                                <Media className="itemImgHome" src={item.img} text="" alt="Logo" />
                            </Media>
                        </Media>
                    </button>

                    
                    <Modal className="modalTotalProductHomeModal" isOpen={this.state.modal === item.id} toggle={this.toggle} external={externalCloseBtn}>
                        <ModalHeader className="modalHeaderFromProduct">Combien t'en prends ?</ModalHeader>
                        <ModalBody className="modalBodyQuantity">
                            <Button onClick={() => { this.handleSubtractQuantity(item.id) }} className="buttonProductLess" type="button">-</Button>
                            <CardText className="textQuantityHomeModal">0{item.quantity}</CardText>
                            <Button onClick={() => { this.handleClick(item.id) }} className="buttonProductbutton" type="button">+</Button>
                        </ModalBody>
                        <ModalFooter className='footerModalPlanchesModalFooter'>
                            <Link to="homeScreen">
                                <Button className="buttonModalQuantity" onClick={this.toggle}>AJOUTER AU PANIER</Button>{' '}
                            </Link>
                        </ModalFooter>
                    </Modal>

                </div>
            )
        })
        return (
    <div>             <div className="box">
                {itemList}
            </div>
            </div>
        

        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.total,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
