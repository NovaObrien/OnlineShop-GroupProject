import Shop from "./Models/Shop.js"
import Cart from "./Models/cart.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {



  /** @type {Shop[]} */
  shopItems = [new Shop({ name: "Tractor", price: 2000, description: "A nice tractor", stock: 2, img: "//placehold.it/200x200" })]

  cartItems = [new Shop({ name: "NotTractor", price: 2000, description: "A nice tractor", stock: 2, img: "//placehold.it/200x200" })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
