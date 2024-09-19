let arr = [];
let x = document.getElementById("number");
let result = document.getElementById("result");
function add() {
	arr.push(parseInt(x.value));
	console.log(arr);
}
function display() {
	for (let i = 0; i < arr.length; i++) {
		result.innerHTML += `Element ${i} = ${x.value}  <br>`;
	}
}
