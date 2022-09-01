import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  subs: Subscription;
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.subs = new Subscription();
    this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.product = history.state;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
