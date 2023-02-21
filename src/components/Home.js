import React from "react";

function Home(props) {
    return (
        <div>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div>

                    <div className="btn-wrapper item">
                        <button onClick={() => props.addToCartHandler({ price: 1000, name: 'I phone 11' })}>Add to Cart</button>
                    </div>
                    <div className="remove-btn-wrapper item">
                        <button onClick={() => props.removeToCartHandler()}>Remove Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;