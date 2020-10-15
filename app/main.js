import CartController from "./Controllers/CartController.js";
import ShopController from "./Controllers/ShopController.js";

class App {
  shopController = new ShopController();
  cartController = new CartController()
}

window["app"] = new App();
