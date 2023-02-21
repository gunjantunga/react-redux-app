import React from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header(props) {
    return (
        <div>
            <span className="cart-count">{props.data.length}</span>
            <div className="add-to-cart">
                <AddShoppingCartIcon style={{ height: '80px', width: '80px'}} />
            </div>
        </div>
    )
}

export default Header;