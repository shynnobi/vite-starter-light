import { Button } from '@/components/ui/button';
import { Article } from '@/types/shoppingListTypes';

interface ArticleItemProps {
  article: Article;
  onTogglePurchased: (name: string) => void;
  onUpdateQuantity: (name: string, quantity: number) => void;
  onRemoveArticle: (name: string) => void;
}

export function ArticleItem({ article, onTogglePurchased, onRemoveArticle }: ArticleItemProps) {
  const formattedQuantity =
    article.quantity && article.unit
      ? `${article.quantity} ${article.unit}${article.quantity > 1 ? 's' : ''}`
      : null;
  const unitPriceFormatted = article.unitPrice ? (article.unitPrice / 100).toFixed(2) + '€' : null;
  const totalPriceFormatted =
    article.quantity && article.unitPrice
      ? ((article.quantity * article.unitPrice) / 100).toFixed(2) + '€'
      : null;

  return (
    <div className={`p-4 rounded-lg shadow ${article.isPurchased ? 'bg-muted' : 'bg-card'}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3
            className={`text-lg font-medium ${article.isPurchased ? 'line-through text-muted-foreground' : ''}`}
          >
            {article.name}
          </h3>
          {(formattedQuantity || unitPriceFormatted || totalPriceFormatted) && (
            <div className="flex gap-4 text-sm text-muted-foreground">
              {formattedQuantity && <span>{formattedQuantity}</span>}
              {unitPriceFormatted && article.unit && (
                <span>
                  {unitPriceFormatted}/{article.unit}
                </span>
              )}
              {totalPriceFormatted && <span>Total: {totalPriceFormatted}</span>}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={article.isPurchased ? 'outline' : 'default'}
            size="sm"
            onClick={() => onTogglePurchased(article.name)}
          >
            {article.isPurchased ? 'Annuler' : 'Acheté'}
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              console.log('Removing article:', article.name);
              onRemoveArticle(article.name);
            }}
          >
            Supprimer
          </Button>
        </div>
      </div>
    </div>
  );
}
