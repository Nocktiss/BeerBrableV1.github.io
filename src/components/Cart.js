import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import trash from '../assets/fontIcons/trash.svg'
import { connect } from 'react-redux'
import { CardText, Container, Button, Media } from 'reactstrap';
import ButtonNav from '../components/lib/Button/ButtonNav'
import { removeItem, addQuantity, addToCart, subtractQuantity } from '../redux/actions/CartActions'
import Recipe from './Recipe'
class Cart extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }


    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <div className="homeProduct">


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

                                    <div className="mediaBodyTitle"> 
                                    <Media className='MediaTextHome'>
                                        {item.price} €
                                </Media>
                                <Media className=''>
                                <Button onClick={() => { this.handleSubtractQuantity(item.id) }} className="buttonCartbutton" type="button">-</Button>
                                <CardText className=''> {item.quantity}</CardText>
                                <Button onClick={() => { this.handleClick(item.id) }} className="buttonCartCartbutton" type="button">+</Button>
                                </Media>
                                </div>


                                </Media>
                                <Media right href="#" className="itemMediaImgHome">
                                    <Media className="itemImgHome" src={item.img} text="" alt="Logo" />
                                </Media>
                            
                            </Media>


    <div>
                                <Button className="buttonIconsTrash" onClick={() => { this.handleRemove(item.id) }}>
                                    <img src={trash} className="iconsTrash" alt="trash" />
                                </Button>
                            </div>
                          

                            <div>
                                
                            </div>
                        </div>
                    )
                })
            ) :

            (

                <Container className="containerCartContainerCart">
                    <CardText className='panierCardTextCartPanier'>Oops !</CardText>
                    <CardText className='panierTextCartPanier'>Mais c'est que ton panier est vide ! Va vite te servir un petit verre... (ou un gros) </CardText>
                    <Link to="HomeScreen">
                        <ButtonNav text="VOIR LA CARTE" />
                    </Link>
                </Container>
            )

        return (

            <div>
                <div className="collection">
                    {addedItems}
                </div>
                <Recipe />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        // items: state.items,
        total: state.total,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        addToCart: (id) => { dispatch(addToCart(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


