import { Component } from '@angular/core';

interface BuyMeItem {
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: BuyMeItem[] = [
    { id: '1', name: 'Stilles Wasser', price: 2 },
    { id: '2', name: 'Sprudel', price: 2 },
    { id: '3', name: 'Apfelschorle', price: 2.5 },
    { id: '4', name: 'Spritzer', price: 2.5 },
    { id: '5', name: 'Spezi', price: 2.5 },
    { id: '6', name: 'Bier', price: 3 },
    { id: '7', name: 'Radler', price: 3 },
    { id: '8', name: 'Kaffee', price: 2 },
    { id: '9', name: 'Cappuccino', price: 2.5 },
    { id: '10', name: 'Espresso', price: 1 },
    { id: '11', name: 'Kuchen', price: 1.5 },
    { id: '12', name: 'Muffines', price: 1 },
    { id: '13', name: 'Amerikaner', price: 1 },
    { id: '14', name: 'Flachswickel', price: 1 },
  ];

  bill: BuyMeItem[] = [];

  get price(): number {
    return this.bill.map((b) => b.price).reduce((p, c) => p + c, 0);
  }

  onPay() {
    const result = prompt('Gegeben? (zum Beispiel: 10.50)');
    if (result) {
      const given = +result;
      if (!isNaN(given)) {
        const ret = given - this.price;
        alert(`Rückgeld: ${ret.toFixed(2)} €`);
      }
    }
  }

  onAdd(item: BuyMeItem) {
    this.bill = [...this.bill, item];
  }

  onRemove(item: BuyMeItem) {
    const index = this.bill.findIndex((b) => b.id === item.id);
    if (index !== -1) {
      this.bill = [...this.bill.slice(0, index), ...this.bill.slice(index + 1)];
    }
  }

  onReset() {
    this.bill = [];
  }
}
