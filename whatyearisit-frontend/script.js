fetch('https://perso-rose.vercel.app/year')
	.then(response => response.json())
	.then(data => {
		document.querySelector('#year').textContent = data;
	});
		
		
		/*innerHTML += `
			<p>${data.year}</p>
			`;
		console.log(data)})
*/