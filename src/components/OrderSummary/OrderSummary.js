import React, { Component } from "react";
import { CardText, CardBody, CardImg, Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "./OrderSummary.scss";

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );

    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="ProductOrderSummary" key={item.id}>
            <CardBody className="cardBodyOrderSummary">
              <div className="cardTitleCategorieDeProduits">
                <CardText className="textH1CategorieDeProduits">
                  {item.title}
                </CardText>
                <CardText className="textCategorieDeProduits">
                  {item.qty}
                </CardText>

                <CardImg
                  className="cardImgPlancheMixCardImg"
                  top
                  width="100%"
                  src={item.img}
                  alt="Logo"
                />
              </div>
              <CardText className="textCategorieDeProduits">
                {item.desc}
              </CardText>
              <div className="priceQuantityOrderSummary">
                <CardText className="textH1CategorieDeProduitstext">
                  {" "}
                  {item.price} €{" "}
                </CardText>
                <CardText className="orderSummaryQteOrderQuantity">
                  {" "}
                  Qté{item.quantity}
                </CardText>
              </div>
              {/* <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Supprimer</button> */}
            </CardBody>
          </div>
        );
      })
    ) : (
      <div></div>
    );

    return (
      <div>
        <div>
          <CardText className="textOderSummary">
            {" "}
            Ta commande a été prise en compte avec grand succés
          </CardText>
          <CardText className="textOderSummaryCommande"> Commande :</CardText>
          <CardText className="textOderSummaryNumeroCommande"> BA02 </CardText>
          <CardText className="textOderSummaryStripe">
            {" "}
            Payé avec Stripe
          </CardText>
          <CardText className="textOderSummaryNumberText">
            {" "}
            Tu recevras un SMS pour venir chercher ta commande au comptoir
          </CardText>
        </div>
        <div className="collection">
          {addedItems}

          <div className="modalOrderSummaryModal">
            <button
              className="modalButtonOrderSummaryModalButton"
              onClick={this.toggle}
            >
              {this.props.buttonLabel}
              <div>
                <button className="buttonPaiementOrderSummary">
                  {" "}
                  Passer une nouvelle commande
                </button>
              </div>
            </button>
          </div>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="modalCartScreenConnexionCart"
            external={externalCloseBtn}
          >
            <CardText className="textH1ModalRegisterAntho">
              T'es vraiment sur de toi la ?{" "}
            </CardText>
            <CardText className="textModalRegisterAntho">
              Si tu reviens a la carte, tu ne pourras plus visionner le résumé
              de ta commande.{" "}
            </CardText>
            <ModalBody className="paddingModalBodyLeft">
              <div className="">
                <div className="linkRegisterPageScreen">
                  <Link to="/webapp">
                    <button className="buttonCreeCompteModal">
                      Quitter cette page
                    </button>
                  </Link>
                </div>

                <div className="linkLoginPageScreen">
                  <Link to="/OderSummaryScreen">
                    <button className="buttonCreeCompteModal1">Rester</button>
                  </Link>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    // items: state.items,
    total: state.total,
    //addedItems: state.addedItems
  };
};

export default connect(mapStateToProps)(OrderSummary);
