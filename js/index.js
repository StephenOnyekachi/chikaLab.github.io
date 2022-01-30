

var form = document.getElementById('form')

var parentDiv = document.getElementById('result1')
var parentDiv1 = document.getElementById('result')
var parentDiv2 = document.getElementById('result2')

form.addEventListener('submit', function(event) {
	event.preventDefault()

	var reader = new FileReader();

	var name = document.getElementById("image").files[0].name

	let formData = {
		title: document.getElementById("title").value,
		text: document.getElementById("text").value
	}

	reader.addEventListener('load', function() {
		if(this.result && localStorage){
			window.localStorage.setItem(name, this.result)
			localStorage.setItem('formData', JSON.stringify(formData))
			// alert("image stored in locacal storage")
			parentDiv.innerHTML = ''
			// parentDiv.innerHTML = ''
			// parentDiv2.innerHTML = ''
			displayData()
			showImages()
		}
		else{
			alert("not successful")
		}
	})

	reader.readAsDataURL(document.getElementById('image').files[0])

	let entries = Object.entries(formData);
	
	console.log(entries[1][1]);
	console.log(entries[0][1]);

	console.log(name)
	console.log('user information', entries);
});

function showImages(){
	for (let i = 0; i < window.localStorage.length; i++){
		let res = window.localStorage.getItem(window.localStorage.key(i))
		var image = new Image()
		image.src = res;

		parentDiv.appendChild(image)
	}
}

function displayData(){
	console.log(JSON.parse(localStorage.getItem('formData')))
	if(localStorage.getItem('formData')){
		let{title, text} = JSON.parse(localStorage.getItem('formData'))

		var output1 = document.getElementById('result')
		output1.innerHTML = (title)

		var output2 = document.getElementById('result2')
		output2.innerHTML = (text)

		// parentDiv1.appendChild(result)
		// parentDiv1.appendChild(result2)
	}
}


function remove(){
	window.localStorage.clear()
	// alert("image have been deleted from local storage")
	parentDiv1.innerHTML = ''
	parentDiv.innerHTML = ''
	parentDiv2.innerHTML = ''
}

displayData()
showImages()