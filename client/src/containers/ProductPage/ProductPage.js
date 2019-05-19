import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import ProductDetails from 'components/ProductDetails/ProductDetails';

class ProductPage extends React.Component {

	render() {
		return (
			<div id="ProductPage">
				<Navbar/>
				<ProductDetails {...this.props}/>
			</div>
		);
	}
}

export default ProductPage;

