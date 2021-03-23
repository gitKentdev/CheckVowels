
const button = document.getElementById('subButton');
const input = document.getElementById('input');
const resultDiv = document.getElementById('result');
let numOfVowel = 0;
let numOfConsonant = 0;


button.addEventListener('click', (event)=>{
	var string = input.value.toLowerCase();
	checkVowels(string);
	resultDiv.innerHTML = `
		<p>Number of Vowels: <span class="result__span">${numOfVowel}<span/></p>
		<p>Number of Consonants: <span class="result__span">${numOfConsonant}<span/></p>
		`;

	numOfVowel = 0;
	numOfConsonant = 0;
});

function checkVowels(string){
	for (i of string){
		if (i == 'a' || i == 'i' || i == 'u' || i == 'e' || i == 'o'){
			numOfVowel += 1;
		} else {
			numOfConsonant += 1;
		};
	};
};