import { AddArticleForm } from '@/components/shopping/AddArticleForm';
import { ArticleList } from '@/components/shopping/ArticleList';
import { useShoppingStore } from '@/stores/useShoppingStore';

function App() {
  const { getFormattedTotalPrice, getFormattedPurchasedTotalPrice } = useShoppingStore();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-h1 text-center">Shopping List</h1>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-muted-foreground">Total</p>
            <p className="text-h3">{getFormattedTotalPrice()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Déjà acheté</p>
            <p className="text-h3">{getFormattedPurchasedTotalPrice()}</p>
          </div>
        </div>

        <AddArticleForm />
        <ArticleList />
      </div>
    </div>
  );
}

export default App;
