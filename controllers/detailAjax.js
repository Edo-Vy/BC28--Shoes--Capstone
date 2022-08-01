window.onload = function () {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('product');
    console.log('myParam', myParam);

    // getProductApi();
}

// ====================

// ==================
function product(idclick) {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id='+ idclick,
        method: 'GET',
        ResponseType : JSON
        
    });
    
    //Xử lý thành công
    promise.then(function (result) {

        var myParam = result.data.content;
        //Load thông sản phẩm lên giao diện
        document.querySelector('.bg-product').value = myParam.image;

        document.querySelector('.product__name').value = myParam.name;
        document.querySelector('.product__info').value = myParam.shortDescription;
        document.querySelector('.product__size-selection').value = myParam.size;
        document.querySelector('.product__price').value = myParam.price;
 
  
    })
    //Xử lý thất bại
    promise.catch(function (error) {

    })
}