import React, { Component } from "react";

import Aux from "../../hoc/ReactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasing: false,
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({
            ingredients: updatedIngredient,
            totalPrice: updatedPrice,
        })
    }

    decreaseIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1

        if (updatedCount < 0) return

        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({
            ingredients: updatedIngredient,
            totalPrice: updatedPrice,
        })
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    increase={this.addIngredientHandler}
                    decrease={this.decreaseIngredientHandler}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }


}

export default BurgerBuilder