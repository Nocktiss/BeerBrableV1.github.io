import assietteMixte from '../../assets/assietteMixte.jpg'
import assietteFermentee from '../../assets/assietteFermentee.jpg'
import saucisson from '../../assets/saucisson.jpeg'
import houmousMoutabal from '../../assets/houmousMoutabal.jpeg'
import plancheDeFromage from '../../assets/plancheDeFromage.jpg'
import tartinadesDApero from '../../assets/tartinadesDApero.jpg'
import sourkefir from '../../assets/sourkefir.jpg'
import sessionIpa from '../../assets/sessionIpa.jpg'
import kombucha from '../../assets/kombucha.jpg'
import houblonCommeLesBles from '../../assets/houblonCommeLesBles.png'
import hypePa from '../../assets/hypePa.jpg'
import brownAle from '../../assets/brownAle.png'
import fusoJaune from '../../assets/fusoJaune.png'
import fusoOrange from '../../assets/fusoOrange.png'
import fusoRouge from '../../assets/fusoRouge.png'
import perHugo from '../../assets/perHugo.jpg'
import kefirCitron from '../../assets/kefirCitron.jpg'
import cassisAuLevain from '../../assets/cassisAuLevain.jpg'


import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/Cart-actions'


const initState = {
    items: [


        {id:1,title: "Hype PA (5,3°)", desc:"Demi-Pinte-Biére Blonde", qty:"25 cl", img: hypePa, price: 3.50, ctg: "bieres", },
        {id:2,title:'Hype PA (5,3°)', desc: "Pinte-Biére Blonde ",qty:"50 cl", price:6 ,img: hypePa, bieres: "bieres",},
        {id:3,title:'Houblons des blés (4,7°)', desc: "Demi-Pinte-Biére Blonde",qty:"25 cl", price: 3.50, img: houblonCommeLesBles, ctg: "bieres",},
        {id:4,title:'Houblons des blés (4,7°)', desc: "Pinte-Biére Blonde ",qty:"50 cl",  price:6 ,img: houblonCommeLesBles, ctg: "bieres",},
        {id:5,title:'Session IPA (3,6°)', desc: "Biére Blonde ",qty:"Bouteille",  price:5,img:sessionIpa, ctg: "bieres", },
        {id:6,title:'Sour Kefir (5,9°)', desc: "Biére Blonde", qty:"Bouteille", price:6,img: sourkefir, ctg: "bieres",},
        {id:7,title:'Brown Ale (5,4°)', desc: "Biére blonde", qty:"Bouteille", price:5.5,img: brownAle, ctg: "bieres",},

        {id:8,title:'Fuso jaune - kombucha', desc: "Fuso ananas vanille réhaussé par du kombucha",qty:"Verre",  price:8 ,img:fusoJaune, ctg: "cocktail",},
        {id:9,title:'Fuso orange - kéfir', desc: "Fuso orange gingembre, kéfir citron  ",qty:"Verre",  price:8,img:fusoOrange, ctg: "cocktail",},
        {id:10,title:'Fuso rouge - cassis au levain', desc: "Fuso hibiscus, fraise - cassis au levain", qty:"Verre", price:8,img:fusoRouge, ctg: "cocktail",},
        {id:11,title:'Per Hugo', desc: "Vin nature sicilien", qty:"Verre", price:8,img:perHugo, ctg: "cocktail",},

        {id:12,title:'Kéfir citron (sans alcool)', desc: "Citronnade fermentée hyper rafraichissant",qty:"Bouteille",  price:4 ,img:kefirCitron, ctg: "soft",} ,
        {id:13,title:'Kombucha (sans alcool)', desc: "Thé délicatement fermentée.",qty:"25 cl",  price:3,img:kombucha, ctg: "soft",},
        {id:14,title:'Kombucha (sans alcool)', desc: "Thé délicatement fermentée.", qty:"50 cl", price:5,img: kombucha, ctg: "soft",},
        {id:15,title:'Cassis au levain ', desc: "Soda au cassis fermenté au levain", qty:"25 cl", price:3,img: cassisAuLevain, ctg: "soft",},
        {id:16,title:'Cassis au levain ', desc: "Soda au cassis fermenté au levain", qty:"50cl", price:5,img: cassisAuLevain, ctg: "soft",},

        {id:17,title: "Planche mixte", desc:"St nectaire, compté 18mois, Crotin de chevre", img: assietteMixte, price: 17, ctg: "planches",},
        {id:18,title:'Planche de fromages', desc: "4 fromages de choix fermier au lait cru.", price:15,img: plancheDeFromage, ctg: "planches",},
        {id:19,title:'Assiette fermentée"', desc: "Fromages, saucisson, pickles, houmous",price:14,img: assietteFermentee, ctg: "planches",},
        {id:20,title:'Planche de saucisson', desc: "Saucisson du Jura", price:12,img:saucisson, ctg: "planches",},
        {id:21,title:'Houmous et Moutabal', desc: "houmous et caviar d'aubergine", price:8,img:houmousMoutabal, ctg: "planches",},
        {id:22,title:'Tartinades Terre d\'Apéro', desc: "Poiscamole ,a partir de légumes bio.",price:7,img: tartinadesDApero, ctg: "planches",},
        {id:23,title:'Tartinades Terre d\'Apéro', desc: "Carotte/houmous", price:7,img: tartinadesDApero, ctg: "planches",},
        {id:24,title:'Tartinades Terre d\'Apéro', desc: "Lentillades  ", price:7,img: tartinadesDApero, ctg: "planches",},

    ],
    
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer;

