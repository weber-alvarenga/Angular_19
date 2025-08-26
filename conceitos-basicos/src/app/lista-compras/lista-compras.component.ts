import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemLista } from './itemLista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item : string = '';
  lista : ItemLista[] = [];


  adicionarItem() : void {

    let itemLista = new ItemLista();

    itemLista.id = this.lista.length + 1;
    itemLista.nome = this.item;
    this.lista.push(itemLista);

    this.item = '';

  }


  riscarItem(itemLista: ItemLista) : void {

    itemLista.comprado = !itemLista.comprado;

  }


  limparLista() : void {

    this.lista = [];

  }

}
