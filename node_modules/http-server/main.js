var items = {};

update();


function viewItem(){  clear();var item = document.getElementById('items').options[document.getElementById('items').selectedIndex];var content = items[item.value];addtext(content); 

 }

document.getElementById('items').onchange = viewItem;
