import { useShoppingStore } from '@/stores/useShoppingStore';
import { ArticleItem } from './ArticleItem';

export function ArticleList() {
  const {
    getUnpurchasedArticles,
    getPurchasedArticles,
    togglePurchased,
    updateQuantity,
    removeArticle,
  } = useShoppingStore();

  const unpurchasedArticles = getUnpurchasedArticles();
  const purchasedArticles = getPurchasedArticles();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-h3">À acheter</h2>
        <div className="space-y-2">
          {unpurchasedArticles.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">Aucun article à acheter</p>
          ) : (
            unpurchasedArticles.map((article) => (
              <ArticleItem
                key={article.name}
                article={article}
                onTogglePurchased={togglePurchased}
                onUpdateQuantity={updateQuantity}
                onRemoveArticle={removeArticle}
              />
            ))
          )}
        </div>
      </div>

      {purchasedArticles.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-h3">Déjà achetés</h2>
          <div className="space-y-2">
            {purchasedArticles.map((article) => (
              <ArticleItem
                key={article.name}
                article={article}
                onTogglePurchased={togglePurchased}
                onUpdateQuantity={updateQuantity}
                onRemoveArticle={removeArticle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
