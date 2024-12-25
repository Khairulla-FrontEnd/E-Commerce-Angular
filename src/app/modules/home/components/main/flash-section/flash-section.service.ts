import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../shared/service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlashSectionService {
  constructor(private apiService: ApiService) {}

  getProducts(params: any = {}): Observable<any> {
    return this.apiService.get('/products', params);
  }
  getProductById(productId: number): Observable<any> {
    return this.apiService.get('/products/' + productId);
  }

 
}
