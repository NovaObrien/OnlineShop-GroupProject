import { generateId } from "../Utils/generateId.js"
export default class Shop {
    constructor({ name, price, description, stock, img }) {
        this.name = name
        this.price = price
        this.description = description
        this.stock = stock
        this.img = img
        this.id = generateId()
        this.numCart = 0
    }

    get shopTemplate() {

        return /*html*/`
        <div class="card p-2 value">
        <div class="col-4">
        <img class="card-img-top img-fluid" src="${this.img}" alt="">
        
        </div>
        <div className="col-3">
        ${this.name}
        </div>
        <div className="col-3">
        Price$${this.price}
        </div>
        <div className="col-3">
        Stock:${this.stock}
        </div>
        <div className="col-3">
        ${this.description}
        </div>

        <button class = "btn btn-primary"></button>
            
        </div>

        `
    }

    get cartTemplate() {
        return /*html*/`
        <div class="card p-2 value">
        <div class="col-4">
        <img class="card-img-top img-fluid" src="${this.img}" alt="">
        
        </div>
        <div className="col-3">
        ${this.name}
        </div>
        <div className="col-3">
        Price$${this.price}
        </div>
        <div className="col-3">
        Stock:${this.numCart}
        </div>
        <button class = "btn btn-danger">Delete</button>
            
        </div>

        `
    }
}
