
var productArray = [
	{
		productId:10001,
		brand:'OEM',
		img:'assets/images/selling-products/pic-1.jpg', 
		name:'Đồng hồ dán tường mica', 
		price:765000,
		pricedel: 100000
	},
	{
		productId:10002,
		brand:'OEM',
		img:'assets/images/selling-products/pic-2.jpg', 
		name:'Đồng hồ đầu hưu hoa tài lộc', 
		price:545000,
		pricedel: 900000
	},
	{
		productId:10003,
		brand:'OEM',
		img:'assets/images/selling-products/pic-3.jpg', 
		name:'Đồng hồ Vintage 58cm 03', 
		price:595000,
		pricedel: 900000
	},
	{
		productId:10004,
		brand:'OEM',
		img:'assets/images/selling-products/pic-3.jpg', 
		name:'Đồng hồ Vintage 58cm 03', 
		price:595000,
		pricedel: 900000
	},
	{
		productId:10005,
		brand:'OEM',
		img:'assets/images/selling-products/pic-3.jpg', 
		name:'Đồng hồ Vintage 58cm 03', 
		price:595000,
		pricedel: 900000
	}
];

function getProductSlice(start, end) 
{
	return productArray.slice(start, end);
}