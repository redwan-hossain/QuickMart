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
       
     <div class="trending-cart flex flex-col rounded-lg outline outline-gray-300 hover:shadow-lg transition duration-300 cursor-pointer bg-white">

        <div class="bg-[#E5E7EB] flex justify-center items-center h-[250px] p-5 rounded-t-lg">
            <img class="max-h-full object-contain"
                src="${product.image}"
                alt="${product.title}">
        </div>

        <div class="flex flex-col flex-1 px-5 py-4">

            <div class="flex justify-between items-center">
                <span class="rounded-lg bg-[#E0E7FF] text-[#645DC2] px-3 py-1 text-sm font-semibold">
                    ${product.category}
                </span>

                <div class="flex items-center gap-1 text-sm">
                    <i class="fa-solid fa-star text-[#FDC701]"></i>
                    <p>${product.rating.rate}</p>
                    <span class="text-gray-500">(${product.rating.count})</span>
                </div>
            </div>


            <div class="mt-3 flex flex-col flex-1">
                <h1 class="text-md font-semibold line-clamp-2">
                    ${product.title}
                </h1>

                <span class="font-bold text-lg mt-2">
                    $${product.price}
                </span>


                <div class="flex gap-4 mt-auto pt-4">
                    <button class="flex-1 border py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                        <i class="fa-regular fa-eye mr-2"></i>Details
                    </button>

                    <button class="flex-1 border py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                        <i class="fa-solid fa-cart-shopping mr-2"></i>Add
                    </button>
                </div>
            </div>

        </div>

    </div>
       
       `
    }
}

loadChooseData();
loadAllProducts()
