// dane od użytkownika
const tytulProjektuElement = document.querySelector('.nazwa_input');
const iloscRzedowElement = document.querySelector('.ilosc_rzedow_input');

// elementy na stronie
const nazwaElement = document.querySelector('.nazwa_projektu');
const liczbaRzedowElement = document.querySelector('.liczba_rzedow');
const pozostaleElement = document.querySelector('.pozostale_rzedy');
const zapisz = document.querySelector('.zapisz');
const licznikElement = document.querySelector('.aktualny_rzad');
const nextButton = document.querySelector('.next');
let pozostaleIlosc = Number(pozostaleElement.textContent);

//nowy projekt

document.querySelector('.nowy_projekt').addEventListener('click', () => {
	document.querySelector('.input').classList.remove('hidden');
	document.querySelector('.info').classList.add('hidden');
	document.querySelector('.licznik').classList.add('hidden');
	document.querySelector('.nowy_projekt').classList.add('hidden');
});

// zapisanie input w localStorage
zapisz.addEventListener('click', () => {
	localStorage.setItem('nazwa-projektu', tytulProjektuElement.value);
	localStorage.setItem('ilosc-rzedow', iloscRzedowElement.value);
	nazwaElement.textContent = localStorage.getItem('nazwa-projektu');
	liczbaRzedowElement.textContent = Number(
		localStorage.getItem('ilosc-rzedow')
	);
	localStorage.setItem('aktualny-rząd', 1);
	pozostaleElement.textContent =
		Number(localStorage.getItem('ilosc-rzedow')) - 1;
	licznikElement.textContent = 1;
	aktualnyRzad = 1;
	document.querySelector('.input').classList.add('hidden');
	document.querySelector('.info').classList.remove('hidden');
	document.querySelector('.licznik').classList.remove('hidden');
	document.querySelector('.nowy_projekt').classList.remove('hidden');
});

// dane z localStorage - zwrot na stronę
nazwaElement.textContent = localStorage.getItem('nazwa-projektu');
liczbaRzedowElement.textContent = Number(localStorage.getItem('ilosc-rzedow'));

if (localStorage.getItem('aktualny-rząd')) {
	aktualnyRzad = localStorage.getItem('aktualny-rząd');
	licznikElement.textContent = aktualnyRzad;
	console.log(aktualnyRzad);
	pozostaleElement.textContent = `${
		localStorage.getItem('ilosc-rzedow') - localStorage.getItem('aktualny-rząd')
	}`;
} else {
	aktualnyRzad = 1;
	licznikElement.textContent = 1;
	pozostaleElement.textContent = Number(localStorage.getItem('ilosc-rzedow'));
}

// licznik
nextButton.addEventListener('click', () => {
	aktualnyRzad++;
	licznikElement.textContent = aktualnyRzad;
	localStorage.setItem('aktualny-rząd', aktualnyRzad);
	pozostaleElement.textContent = `${
		localStorage.getItem('ilosc-rzedow') - localStorage.getItem('aktualny-rząd')
	}`;
});
