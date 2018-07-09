const xhr = new XMLHttpRequest();

xhr.open('GET', "https://api.myjson.com/bins/152f9j.json", false);

xhr.send();

let dataFromJson = '';
if (xhr.status != 200) {
	alert( xhr.status + ": " + xhr.statusText );
} else {
	dataFromJson = xhr.responseText;
}

alert(dataFromJson);

//alert( '-----------');

alert( xhr.responseText );