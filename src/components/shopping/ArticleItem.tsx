import { Article } from '@/types/shoppingListTypes';
import { Button } from '@/components/ui/button';

interface ArticleItemProps {
  article: Article;
  onTogglePurchased: (name: string) => void;
  onUpdateQuantity: (name: string, quantity: number) => void;
}

export function ArticleItem({ article, onTogglePurchased, onUpdateQuantity }: ArticleItemProps) {
  const formattedQuantity = `${article.quantity} ${article.unit}${article.quantity > 1 ? 's' : ''}`;
  const unitPriceFormatted = (article.unitPrice / 100).toFixed(2);
  const totalPriceFormatted = ((article.quantity * article.unitPrice) / 100).toFixed(2);

  return (
    <div className={`p-4 rounded-lg shadow ${article.isPurchased ? 'bg-muted' : 'bg-card'}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3
            className={`text-lg font-medium ${article.isPurchased ? 'line-through text-muted-foreground' : ''}`}
          >
            {article.name}
          </h3>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{formattedQuantity}</span>
            <span>
              {unitPriceFormatted}€/{article.unit}
            </span>
            <span>Total: {totalPriceFormatted}€</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(article.name, article.quantity + 1)}
          >
            +1
          </Button>
          <Button
            variant={article.isPurchased ? 'default' : 'secondary'}
            size="sm"
            onClick={() => onTogglePurchased(article.name)}
          >
            {article.isPurchased ? 'Annuler' : 'Acheté'}
          </Button>
        </div>
      </div>
    </div>
  );
}
