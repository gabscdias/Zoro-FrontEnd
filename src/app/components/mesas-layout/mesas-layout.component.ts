import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mesas-layout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mesas-layout.component.html',
  styleUrl: './mesas-layout.component.scss',
})
export class MesasLayoutComponent {
  searchTerm: string = '';

  mesas = [
    { id: 1, name: 'Mesa 1', statusId: 1, statusName: 'Livre' },
    { id: 2, name: 'Mesa 2', statusId: 1, statusName: 'Livre' },
    { id: 3, name: 'Mesa 3', statusId: 2, statusName: 'Ocupado' },
    { id: 4, name: 'Mesa 4', statusId: 1, statusName: 'Livre' },
    { id: 5, name: 'Mesa 5', statusId: 3, statusName: 'Pago' },
    { id: 6, name: 'Mesa 6', statusId: 3, statusName: 'Pago' },
    { id: 7, name: 'Mesa 7', statusId: 2, statusName: 'Ocupado' },
    { id: 8, name: 'Mesa 8', statusId: 2, statusName: 'Ocupado' },
  ];

  filteredData = this.mesas;

  statusBgColors: { [key: number]: string } = {
    1: '#e6e6e6',
    2: '#7001FD',
    3: '#1E2772',
    // adicione mais cores conforme necessário
  };

  statusTextColors: { [key: number]: string } = {
    1: '#555555',
    2: '#F1F3F6',
    3: '#F1F3F6',
    // adicione mais cores conforme necessário
  };

  getBackgroundColor(statusId: number): string {
    return this.statusBgColors[statusId] || '#FFFFFF'; // Cor padrão
  }

  getTextColor(statusId: number): string {
    return this.statusTextColors[statusId] || '#FFFFFF'; // Cor padrão
  }

  searchTable() {
    const term = this.searchTerm.toLowerCase();
    this.filteredData = this.mesas.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.statusName.toLowerCase().includes(term)
    );
  }

  selectedTable(event: Event){
    debugger;
    console.log(event);
  }
}
