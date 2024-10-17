
let bagItems;
onload();




function addToBag(itemId){
   bagItems.push(itemId);
   localStorage.setItem('bagItems', JSON.stringify(bagItems))
   dispalyBagIcon();
}
function onload(){
  let bagItemsStr= localStorage.getItem('bagItems');
  bagItems= bagItemsStr ? JSON.parse(bagItemsStr) : [] ;
  displayItemsOnHomePage();
  dispalyBagIcon();
  
}


function dispalyBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagItemCountElement.style.visibility='visible';
  bagItemCountElement.innerText=bagItems.length;
  }
  else{
    bagItemCountElement.style.visibility='hidden';
  }
}

function displayItemsOnHomePage(){
  
  let itemsContainerElement= document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }
  let innerHTML=``;
  items.forEach(item => {
      innerHTML=innerHTML+`
  <div class="item-container">
    <img class="item-image" src="${item.image}" 
      alt="item 
    image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}
        </div>
        <div class="PRICE">
            <SPAn class="current-price">Rs ${item.current_price} 
            </SPAn>
            <span class="original-price">Rs ${item.original_price} 
            </span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <BUTTon class="btn-add-bag" onclick="addToBag(${item.id}) ">Add to Bag</BUTTon>
    </div>
  </div>
  `
  })
  
  itemsContainerElement.innerHTML=innerHTML;
}



