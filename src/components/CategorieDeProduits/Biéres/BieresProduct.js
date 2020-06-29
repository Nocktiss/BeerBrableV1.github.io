import React from 'react';
// import bierreMain5 from '../../../assets/bierreMain5.jpg';
import { Media } from 'reactstrap';

const BieresProduct = (BiereJson) => (



  <div className="Product">
                            <Media  >
                            <Media body>
                                <Media heading className=''>
                                {BiereJson.title}{BiereJson.quantity}
                                </Media>
                                <Media className=''>
                                {BiereJson.description}
                                </Media>
                                <Media className=''>
                                {BiereJson.prix}
                                </Media>
                            </Media>
                            <Media right href="#">
                                <Media className="" src={BiereJson.image}alt="Logo" />
                            </Media>
                        </Media>
</div>
)
export default BieresProduct;





