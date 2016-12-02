import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 产品分类组件
 * @author wonguohui
 * @since  2016-11-23T14:28:34+0800
 */
var ProductCategoryRow = React.createClass({
	render : function(){
		return (<tr><th colSpan="2">{this.props.category}</th></tr>);
	}
});
/**
 * 具体的某一个产品信息的组件
 * @author wonguohui
 * @since  2016-11-23T14:33:36+0800
 */
var ProductRow = React.createClass({
	render : function(){
		var name = this.props.product.stocked ? 
			this.props.product.name : 
			<span style={{color: 'red'}}>
        		{this.props.product.name}
      		</span>;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
});
/**
 * 根据用户的不同输入显示的产品table
 * @author wonguohui
 * @since  2016-11-23T14:44:03+0800
 */
var ProductTable = React.createClass({
	render : function(){
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product){
			//根据state过滤数据
			if(product.name.indexOf(this.props.filterText) == -1 || (!product.stocked && this.props.inStockOnly)){
				return;
			}
			//如果是新的分类则添加
			if(product.category !== lastCategory){
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			//添加产品组件
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		}.bind(this));
		return (
			<table>
		        <thead>
		          	<tr>
		            	<th>Name</th>
		            	<th>Price</th>
		          	</tr>
		        </thead>
		        <tbody>{rows}</tbody>
		    </table>
		);
	}
});
/**
 * 搜索组件
 * @author wonguohui
 * @since  2016-11-23T14:46:17+0800
 */
var SearchBar = React.createClass({
	handleChange : function(){
		this.props.onUserInput(
			this.refs.filterTextInput.value, 
			this.refs.inStockOnlyInput.checked
		);
	},
	render : function(){
		return (
			<form>
	        	<input type="text" ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange}  placeholder="Search..." />
	        	<p>
	          		<input type="checkbox" ref="inStockOnlyInput" onChange={this.handleChange} checked={this.props.inStockOnly}/>
	          		{' '}
	          		Only show products in stock
	        	</p>
	      	</form>
		);
	}
});
/**
 * 组件整体
 * @author wonguohui
 * @since  2016-11-23T14:48:25+0800
 */
var FilterableProductTable = React.createClass({
	getInitialState : function(){
		return {
			'filterText' : '',
			'inStockOnly' : false
		};
	},
	handleUserInput : function(filterText, inStockOnly){
		this.setState({
			filterText : filterText,
			inStockOnly : inStockOnly,
		});
	},
	render : function(){
		return (
			<div>
				<SearchBar onUserInput={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        		<ProductTable products={this.props.products}  filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
        	</div>
		);
	}	
});

/**
 * 模拟数据
 */
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$50.00', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
class MockComponent extends React.Component{
	render(){
		return (<FilterableProductTable products={PRODUCTS} />);
	}
}
ReactDOM.render(<MockComponent />,document.getElementById("mock"));

// module.exports = MockComponent;








