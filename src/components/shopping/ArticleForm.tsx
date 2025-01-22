import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useShoppingStore } from '@/stores/useShoppingStore';

export function ArticleForm() {
  const addArticle = useShoppingStore((state) => state.addArticle);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const [unit, setUnit] = useState('unit');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = addArticle(name, quantity, unitPrice, unit);

    if (result.status === 'DUPLICATE' && result.suggestions?.updateQuantity) {
      if (window.confirm(result.suggestions.updateQuantity.message)) {
        const newQuantity =
          result.suggestions.updateQuantity.currentQuantity +
          result.suggestions.updateQuantity.additionalQuantity;
        useShoppingStore.getState().updateQuantity(name, newQuantity);
      }
    }

    if (result.status === 'SUCCESS') {
      setName('');
      setQuantity(1);
      setUnitPrice(0);
      setUnit('unit');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-card rounded-lg shadow">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nom de l'article
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantité
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="unit" className="text-sm font-medium">
            Unité
          </label>
          <select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="unit">Unité</option>
            <option value="kg">Kg</option>
            <option value="g">g</option>
            <option value="l">L</option>
            <option value="ml">mL</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="text-sm font-medium">
            Prix unitaire (centimes)
          </label>
          <input
            type="number"
            id="price"
            value={unitPrice}
            min={0}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Ajouter l'article
      </Button>
    </form>
  );
}
