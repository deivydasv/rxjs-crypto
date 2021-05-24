import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CryptoInfo } from './types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  #rates = {
    BTC: { name: 'Bitcoin', price: 38_441.4 },
    ETH: { name: 'Ethereum', price: 2_145.734 },
    DOGE: { name: 'Dogecoin', price: 0.34 }
  };

  #usd_eur = 0.82;

  getCryptoCurrencies(): Observable<string[]> {
    return defer(() => {
      console.log('Sending request for currencies..');
      return of(['BTC', 'ETH', 'DOGE']).pipe(delay(Math.random() * 2000 + 500));
    });
  }

  getCryptoCurrencyInfo(currency: string): Observable<CryptoInfo> {
    return defer(() => {
      console.log(`Sending request for ${currency}..`);

      return of(this.#rates[currency]).pipe(delay(Math.random() * 2000 + 500));
    });
  }

  getUSDtoEURPrice(): Observable<number> {
    return defer(() => {
      console.log(`Sending request for USD-EUR price..`);

      return of(this.#usd_eur).pipe(delay(Math.random() * 2000 + 500));
    });
  }
}
