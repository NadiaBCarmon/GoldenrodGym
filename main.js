// Objects

class Pokemon {
	constructor(stats){
		this.stats = stats;
	}

}
class Trainer {
	constructor(){
		this.myPoke = [];
	}
	all (){
		return this.myPoke;
}
 	get (name){
 		for(let i=0; i < this.myPoke.length; i++){
 			let pokeName = this.myPoke[i].stats.name;
 			if(pokeName === name) {
 				return this.myPoke[i];
 			} else {
 				return "Hey Girl!  I like the way you search, but...that's not a Pokemon!";
 			}
 		}
	} 
 }

let pokeBallZee = new Trainer();
let vee = new Trainer();
let msPotus = new Trainer();
// Wait until Ajax calls are done, when this is TRUE gather data from trainer pokeBallZee. 
// Create a new div to hold the pokemon information and append this information to the new div.
// Finally, append the new div and all it's contents to the container div. 

// Zee PokeBallZee

$.when(jiggly(),wiggly(),iggly()).then(function(jiggy,wiggly,iggly){

			let pokes = pokeBallZee.myPoke;
			for(let i=0; i < pokes.length;i++){
				let name = pokes[i].stats.name;
				let pic = pokes[i].stats.pic;
				let hp = pokes[i].stats.hp;
				let attack = pokes[i].stats.attack;
				let defense = pokes[i].stats.defense;
				let newDiv = $('<div class="hidden slidezee"></div>');
				console.log(newDiv);

		 			$(newDiv).append(`<p class="pokename">${name}</p>`);
		 			$(newDiv).append(`<img src ="${pic}" class="picture">`);
		 			$(newDiv).append(`<p class="hp">HP: ${hp}</p>`);
		 			$(newDiv).append(`<p class="attack">ATTACK: ${attack}</p>`);
		 			$(newDiv).append(`<p class="defense">DEFENSE: ${defense}</p>`);
					$(newDiv).insertAfter(".trainername1");
			}
});
// Nadia VEE Trainer
$.when(kakuna(),masq(),typhlo()).then(function(kakuna,masq,typhlo){

			let pokes = vee.myPoke;
			for(let i=0; i < pokes.length;i++){
				let name = pokes[i].stats.name;
				let pic = pokes[i].stats.pic;
				let hp = pokes[i].stats.hp;
				let attack = pokes[i].stats.attack;
				let defense = pokes[i].stats.defense;
				let newDiv = $('<div class="hidden slidenadia"></div>');

		 			$(newDiv).append(`<p class="pokename">${name}</p>`);
		 			$(newDiv).append(`<img src ="${pic}" class="picture">`);
		 			$(newDiv).append(`<p class="hp">HP: ${hp}</p>`);
		 			$(newDiv).append(`<p class="attack">ATTACK: ${attack}</p>`);
		 			$(newDiv).append(`<p class="defense">DEFENSE: ${defense}</p>`);
					$(newDiv).insertAfter(".trainername2");
			}
});
// Caroline MSPOTUS
$.when(rosy(),milo(),luc()).then(function(rosy,milo,luc){

			let pokes = msPotus.myPoke;
			for(let i=0; i < pokes.length;i++){
				let name = pokes[i].stats.name;
				let pic = pokes[i].stats.pic;
				let hp = pokes[i].stats.hp;
				let attack = pokes[i].stats.attack;
				let defense = pokes[i].stats.defense;
				let newDiv = $('<div class="hidden slidecaroline"></div>');

		 			$(newDiv).append(`<p class="pokename">${name}</p>`);
		 			$(newDiv).append(`<img src ="${pic}" class="picture">`);
		 			$(newDiv).append(`<p class="hp">HP: ${hp}</p>`);
		 			$(newDiv).append(`<p class="attack">ATTACK: ${attack}</p>`);
		 			$(newDiv).append(`<p class="defense">DEFENSE: ${defense}</p>`);
					$(newDiv).insertAfter(".trainername3");
			}
});

// Jigglypuff
function jiggly() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/39/', 
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
		}
			let puffDaddy = new Pokemon(stats);
			pokeBallZee.myPoke.push(puffDaddy);
		}
	});
}
//WigglyTuff
function wiggly() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/40/',
	success: function(data){
		let stats = {
				"name" : data.name,
				"pic": data.sprites.front_shiny,
				"hp": data.stats[5].base_stat,
				"attack": data.stats[4].base_stat,
				"defense": data.stats[3].base_stat,			
		}
			let wiggles = new Pokemon(stats);
			pokeBallZee.myPoke.push(wiggles);
		}
	});
}
// IgglyTuff
function iggly() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/174/',
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
			
		}
			let igglesTuff = new Pokemon(stats);
			pokeBallZee.myPoke.push(igglesTuff);
		}
	});
}
// TRAINER VEE Nadia
// kakuna
function kakuna() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/14/', 
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
		}
			let kakuna = new Pokemon(stats);
			vee.myPoke.push(kakuna);
		}
	});
}
//masquerain
function masq() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/284/',
	success: function(data){
		let stats = {
				"name" : data.name,
				"pic": data.sprites.front_shiny,
				"hp": data.stats[5].base_stat,
				"attack": data.stats[4].base_stat,
				"defense": data.stats[3].base_stat,			
		}
			let masq = new Pokemon(stats);
			vee.myPoke.push(masq);
		}
	});
}
// typhloslain
function typhlo() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/157/',
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
			
		}
			let typhlo = new Pokemon(stats);
			vee.myPoke.push(typhlo);
		}
	});
}

// // MsPotus Caroline

// roserade
function rosy() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/407/', 
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
		}
			let rosy = new Pokemon(stats);
			msPotus.myPoke.push(rosy);
		}
	});
}
// milotic
function milo() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/350/',
	success: function(data){
		let stats = {
				"name" : data.name,
				"pic": data.sprites.front_shiny,
				"hp": data.stats[5].base_stat,
				"attack": data.stats[4].base_stat,
				"defense": data.stats[3].base_stat,			
		}
			let milo = new Pokemon(stats);
			msPotus.myPoke.push(milo);
		}
	});
}
// lucario
function luc() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/448/',
	success: function(data){
		let stats = {
			"name": data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
			
		}
			let luc = new Pokemon(stats);
			msPotus.myPoke.push(luc);
		}
	});
}




// 		// iggly();
// 		// wiggly();
// 		// jiggly();
// 		// ajaxCalls();

//EVENTS

//ZEE HAS TO CHANGE THIS TO MAKE ADDITIONAL ONES FOR EACH TRAINER
// Start counting divs with class of slide at position 1, and change display on click.	
let z = 0;
$('.zee').click(function(){

	let slideDiv = document.getElementsByClassName('slidezee');
	if (z === slideDiv.length){

		z = 0;
		slideDiv[z].style.display = "block"; 
		slideDiv[slideDiv.length-1].style.display = "none";
	} else {
		z++
		slideDiv[z].style.display = "block";
		
		if(z === 0){

		slideDiv[z].style.display ="block";
		} else {
			slideDiv[z-1].style.display ="none";
			// slideDiv[z+1].style.display="none"; //Don't need this. 
		}
	}
		// slideDiv[z+1].style.display = "none";
})


//NEW FUNCTIONALITIES AFTER THIS!

let n = 0;
$('.nadia').click(function(){

	let nadslide = document.getElementsByClassName('slidenadia');
	if (n === nadslide.length){

		n = 0;
		nadslide[n].style.display = "block"; 
		nadslide[nadslide.length-1].style.display = "none";
	} else {
		n++
		nadslide[n].style.display = "block";

		if(n === 0){

		nadslide[n].style.display ="block";
		} else {
			nadslide[n-1].style.display ="none";
			// slideDiv[z+1].style.display="none"; //Don't need this. 
		}
	}
		// slideDiv[z+1].style.display = "none";
})

let c = 0;
$('.caroline').click(function(){

	let carslide = document.getElementsByClassName('slidecaroline');
	if (c === carslide.length){

		c = 0;
		carslide[c].style.display = "block"; 
		carslide[carslide.length-1].style.display = "none";
	} else {
		c++
		carslide[c].style.display = "block";

		if(c === 0){

		carslide[c].style.display ="block";
		} else {
			carslide[c-1].style.display ="none";
			// slideDiv[z+1].style.display="none"; //Don't need this. 
		}
	}
		// slideDiv[z+1].style.display = "none";
})



let x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 
playAudio();

let y = document.getElementById("myAudio1"); 

function playAudio1() { 
    y.play(); 
} 


	x.addEventListener('ended', function() {
		playAudio1();
	})

	// y.addEventListener('ended', function() {
	// 	playAudio();
	// })

