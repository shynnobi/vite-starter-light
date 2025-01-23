import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useShoppingStore } from '@/stores/useShoppingStore';
import { useState } from 'react';

export function AddArticleForm() {
  const [name, setName] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [unit, setUnit] = useState('');
  const addArticle = useShoppingStore((state) => state.addArticle);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir les valeurs optionnelles
    const quantityNum = quantity ? Number(quantity) : undefined;
    const unitPriceNum = unitPrice ? Number(unitPrice) * 100 : undefined; // Convertir en centimes

    addArticle(name, quantityNum, unitPriceNum, unit || undefined);

    // Reset form
    setName('');
    setQuantity('');
    setUnitPrice('');
    setUnit('');
    setShowDetails(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Nom de l'article"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Button type="submit">Ajouter</Button>
      </div>

      <Button
        type="button"
        variant="ghost"
        className="text-sm"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Masquer les détails' : 'Ajouter des détails (optionnel)'}
      </Button>

      {showDetails && (
        <div className="grid grid-cols-3 gap-2">
          <Input
            type="number"
            placeholder="Quantité"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="0"
            step="1"
          />
          <Input
            type="number"
            placeholder="Prix unitaire (€)"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            min="0"
            step="0.01"
          />
          <Input
            type="text"
            placeholder="Unité (kg, l, etc.)"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>
      )}
    </form>
  );
}
