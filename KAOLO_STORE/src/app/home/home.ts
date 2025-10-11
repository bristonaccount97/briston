import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category {
  id: string;
  label: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  imageUrl: string;
  discountPct?: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Palette largely reused from previous project: orange/gray accents
  readonly brandAccentHex = '#cb8054'; // from previous project buttons

  readonly searchQuery = signal('');
  readonly selectedCategoryId = signal<string>('all');

  readonly categories: Category[] = [
    { id: 'all', label: 'Toutes catégories' },
    { id: 'phones', label: 'Téléphones' },
    { id: 'computers', label: 'Ordinateurs' },
    { id: 'cameras', label: 'Appareils photo' },
    { id: 'clothes', label: 'Vêtements' }
  ];

  readonly products: Product[] = [
    {
      id: 'laptop1',
      name: 'Laptop',
      price: 798,
      categoryId: 'computers',
      imageUrl:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'phone1',
      name: 'Smartphone',
      price: 389,
      categoryId: 'phones',
      imageUrl:
        'https://images.unsplash.com/photo-1510552776732-01acc9a4c38b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'camera1',
      name: 'GSR',
      price: 499,
      categoryId: 'cameras',
      imageUrl:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'printer1',
      name: 'Prentee',
      price: 149,
      categoryId: 'computers',
      imageUrl:
        'https://images.unsplash.com/photo-1569074187119-3f620cfb6aab?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  readonly filteredProducts = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.selectedCategoryId();
    return this.products.filter((p) => {
      const matchCategory = category === 'all' || p.categoryId === category;
      const matchQuery = query === '' || p.name.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
  });
}
