import { Component } from '@angular/core';
import listadePokemon from '../assets/json/pokemon.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-angular';
  pokemon: any = listadePokemon;
  pokemonAll : any ="";
  showPokemonWater: Array<any> = [];
  showPokemonGrass: Array<any> = [];
  showPokemonPoison: Array<any> = [];
  showPokemonFire: Array<any> = [];
  showPokemonNormal : Array<any> = [];
  data ={
    name: "",
    type: "",
  }
 
  ngOnInit(): void {
    this.pokemonAll = this.pokemon.pokemon;
    console.log( this.pokemonAll[0].img);
    
    // this.showPokemonWater = this.pokemon.pokemon;
   
  }

  filterByTypeWater(){
    
    this.showPokemonWater = this.pokemonAll.filter((items:any) => items.type == "water")
    this.showPokemonGrass = []
    this.showPokemonPoison = []
    console.log(this.showPokemonWater);
  }

  filterByTypeGrass(){
   
    this.showPokemonGrass= this.pokemonAll.filter((items:any) =>items.type == "grass")
    this.showPokemonWater = []
    this.showPokemonPoison = []
    console.log(this.showPokemonGrass);
  }
  filterByTypePoison(){
 this.showPokemonPoison = this.pokemonAll.filter((items:any) =>items.type == "poison")
 this.showPokemonWater = []
 this.showPokemonGrass = []
 console.log(this.showPokemonPoison);
  }
  filterByTypeFire(){
    this.showPokemonFire = this.pokemonAll.filter((items:any) =>items.type == "fire")
    this.showPokemonWater = []
    this.showPokemonGrass = []
    console.log(this.showPokemonFire);
  }
  filterByTypeNormal(){
    this.showPokemonNormal = this.pokemonAll.filter((items:any) =>items.type == "normal")
    this.showPokemonWater = []
    this.showPokemonGrass = []
    console.log(this.showPokemonNormal);
  }
}
