function loadChooseData() {
    fetch("./jsonData/whyChoose.json")
        .then(res => res.json())
        .then(data => {
            displayChooseData(data)
        })
}


const loadAllProducts = () => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(res => res.json())
        .then(allProduct => {
            displayAllProduct(allProduct);
        })
}


// all display function here

const displayChooseData = (chooseData) => {

    const cartContainer = document.querySelector(".cart-container");

    cartContainer.innerHTML = "";

    chooseData.forEach(choose => {
        cartContainer.innerHTML += `
   <div class="space-y-3 bg-slate-100 px-4 py-6 rounded-xl 
            cursor-pointer
            transition-all duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600
            hover:text-white hover:shadow-xl hover:-translate-y-2">
                    <i class="${choose.icon_description} text-4xl"></i>
                    <h1 class="font-bold text-lg">${choose.title}</h1>

                    <p class="text-gray-400">${choose.description}</p>
                </div>

  `
    });
}


const displayAllProduct = (allProduct) => {


    const trendingCartContainer = document.querySelector(".trending-cart-container");
    trendingCartContainer.innerHTML = "";

    for (product of allProduct) {
        trendingCartContainer.innerHTML += `
       
       <div class="trending-cart px-5 rounded outline outline-gray-400 cursor-pointer">

                    <div class="bg-[#E5E7EB] flex justify-center items-center p-5">
                        <img class="mx-auto"
                            src="${product.image}" alt="">
                    </div>

                    <div class="px-3 mt-3">
                        <div class="flex justify-between">
                            <span class="rounded-lg bg-[#E0E7FF] text-[#645DC2] px-2 font-bold">${product.category}</span>

                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-star text-[#FDC701]"></i>
                                <p>${product.rating.rate}</p>
                                <span>(${product.rating.count})</span>
                            </div>

                        </div>

                        <div class="space-y-1 mt-2">
                            <h1 class="text-lg font-semibold">${product.title}</h1>
                            <span class="font-bold ">$${product.price}</span>
                            <div class="btnDiv flex mt-3 gap-4 justify-between pb-[10px]">

                                <button class="border px-5 py-1 rounded-md cursor-pointer"><i class="fa-regular fa-eye mx-2"></i>Details</button>
                                <button class="border px-5 py-1 rounded-md cursor-pointer"><i class="fa-solid fa-cart-shopping mx-2"></i>add</button>
                               
                            </div>
                        </div>
                    </div>

                </div>
       
       `
    }
}

loadChooseData();
loadAllProducts()
