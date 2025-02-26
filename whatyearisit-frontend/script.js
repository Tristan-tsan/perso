fetch('http://localhost:3000/date')
	.then(response => response.json())
	.then(data => {
		document.querySelector('#year').innerHTML += `
			<p>${data.year}</p>
			`;
		console.log(data)})
