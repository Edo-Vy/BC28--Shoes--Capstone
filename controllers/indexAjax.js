//------------------------------------------- Phương thức get ------------------------------------------------------

function getProductApi() {

    //Kết nối với api (đường dẫn backend cung cấp)
    const promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON,
    });

    //Xử lý thành công
    promise.then(function (result) {
        renderProduct(result.data.content);
    });
    //Xử lý thất bại
    promise.catch(function (err) {
        console.log(err);
    });
}

//Gọi hàm khi page vừa load 
window.onload = function () {
    getProductApi();
};

/**
 * Hàm này sẽ nhận vào 1 array (Product) và trả ra output
 * @param {*} arrProduct arrProduct là mảng các object 
 *  * @returns trả ra 1 giá trị là 1 htmlString
 */
function renderProduct(arrProduct) {
    let html = '';

    arrProduct.map((item, index) => {
        // console.log(item);
        if (index < 6) {
            html += `
                <div class="col-12 col-md-6 col-lg-4">
                <a href="./detail.html?product=${item.id}" class="productFeature-item onclick="product('${item.id}')"">
                <div class="productFeature-item-top">
                    <div class="productFeature-item-img">
                    <img src="${item.image}" alt="" />
                    </div>
                    <h4>${item.alias}</h4>
                    <p>${item.shortDescription}</p>
                </div>
                <div class="row">
                    <div class="col-6 pe-0">
                    <div class="productFeature-item-bottom bottom-bg-yellow">
                        <button class="productFeature-btn item-bottom-text">
                        Buy now
                        </button>
                    </div>
                    </div>
        
                    <div class="col-6 ps-0">
                    <div class="productFeature-item-bottom bottom-bg-grey">
                        <button class="productFeature-price item-bottom-text">
                        ${item.price}$
                        </button>
                    </div>
                    </div>
                </div>
                </a>
            </div>
              `;
        }
    });
    document.querySelector('.productFeature-group').innerHTML = html;
}
