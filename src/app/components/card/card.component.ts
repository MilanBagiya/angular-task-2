import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() productList: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToProductDetails() {
    this.router.navigate(['/product-details', { data: this.productList[0] }]);
  }

}
