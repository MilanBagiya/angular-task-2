import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList = [
    {
      name: "Imperdiet Ornare In Inc.",
      price: 667,
      description: "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Blandit Enim Consequat LLP",
      price: 1776,
      description: "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Dolor Fusce Mi Inc.",
      price: 1860,
      description: "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Facilisis Lorem Corporation",
      price: 1231,
      description: "Cras convallis convallis dolor. Quisque tincidunt pede ac urna.",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Phasellus LLP",
      price: 1085,
      description: "sem, vitae aliquam eros turpis",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Morbi Neque Tellus LLC",
      price: 1299,
      description: "Sed congue, elit sed consequat auctor, nunc nulla vulputate",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Pellentesque Sed Dictum Ltd",
      price: 1258,
      description: "non, hendrerit id, ante. Nunc mauris",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Augue Eu Corp.",
      price: 607,
      description: "commodo ipsum. Suspendisse non leo. Vivamus nibh",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    },
    {
      name: "Orci Luctus Et Corporation",
      price: 906,
      description: "egestas a, scelerisque",
      image:'https://i.ibb.co/FJrnpsL/matebook.png'
    }
  ];

  showFiter= false;

  constructor() { }

  ngOnInit(): void {
  }

}
