const xhr = new XMLHttpRequest();

xhr.open('GET', "https://api.myjson.com/bins/152f9j.json", false);

xhr.send();

let dataFromJson = '';
if (xhr.status != 200) {
	alert( xhr.status + ": " + xhr.statusText );
} else {
	dataFromJson = xhr.responseText;
}
const objectFromJson = JSON.parse(dataFromJson);
//alert(objectFromJson);

console.log(objectFromJson);

const div = document.getElementById('container');

//alert(div.innerHTML);



for (let i = 0; i < 10; i++) {

	//console.log(objectFromJson);
	/*console.log(objectFromJson.data[i].title);*/


	const post = document.createElement('div');
	//post.innerHTML = objectFromJson[i];
	div.appendChild(post);

	const title = document.createElement("span");
	title.innerHTML = objectFromJson.data[i].title;
	post.appendChild(title);

	const img = document.createElement("img");
	img.src = objectFromJson.data[i].image;
	post.appendChild(img);

	const description = document.createElement("div");
	description.innerHTML = objectFromJson.data[i].description;
	post.appendChild(description);

	const createdAt = document.createElement("div");
	createdAt.innerHTML = objectFromJson.data[i].createdAt;
	post.appendChild(createdAt);

	const tags = document.createElement("div");
	tags.innerHTML = objectFromJson.data[i].tags.join(" ");
	post.appendChild(tags);


}