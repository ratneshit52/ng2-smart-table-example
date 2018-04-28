import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OrderRequest } from './order-request';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let orderRequests: OrderRequest[] = [
      {
        id: 1,
        fullname: 'Jack Dawson',
        location: 'London',
        dp: 'https://www.w3schools.com/images/w3schools_green.jpg',
        button: 'Click me'
      }
    ];
    return {orderRequests};
  }
}
