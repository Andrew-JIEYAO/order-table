import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ProductService } from './product.service';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-test-dataview',
  standalone: true,
  imports: [CommonModule, DataViewModule, RatingModule, TagModule,FormsModule,ButtonModule],
  templateUrl: './test-dataview.component.html',
  styleUrls: ['./test-dataview.component.scss'],
  providers: [ProductService],
})
export class TestDataviewComponent implements OnInit {
  products!: Product[];
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().then((data) => {
      this.products = data.slice(0, 12);
    });
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
  }
}
