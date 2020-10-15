import { ProxyState } from "../AppState.js";
import { shopService } from "../Services/ShopService.js";


//Private
function _draw() {

  let shopItems = ProxyState.shopItems
  let template = ""
  shopItems.forEach(i => template += i.shopTemplate)
  document.getElementById("shopId").innerHTML = template


  let cartItems = ProxyState.cartItems
  let dropDownTemplate = ""
  cartItems.forEach(c => dropDownTemplate += c.cartTemplate)
  document.getElementById("cartId").innerHTML = dropDownTemplate
}

//Public
export default class ShopController {
  constructor() {
    // ProxyState.on("shopItems", _draw);
    console.log('Hello from Shop Controller')
    _draw()
  }

  modal() {
    shopService.modalServ()
  }

}

