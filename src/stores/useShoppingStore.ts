import { AddArticleResult, ShoppingStore } from '@/types/shoppingListTypes';
import { create } from 'zustand';

export const useShoppingStore = create<ShoppingStore>((set, get) => ({
  articles: [],

  addArticle: (
    name: string,
    quantity?: number,
    unitPrice?: number,
    unit?: string
  ): AddArticleResult => {
    const normalizedName = name.trim();
    const articles = get().articles;

    // Vérifier si l'article existe déjà
    const existingArticle = articles.find((a) => a.name === normalizedName);
    if (existingArticle) {
      return {
        status: 'DUPLICATE',
        message: `Un article nommé "${normalizedName}" existe déjà dans votre liste.`,
        suggestions: quantity
          ? {
              updateQuantity: {
                message: `Voulez-vous ajouter ${quantity} à la quantité existante (${existingArticle.quantity || 0}) ?`,
                currentQuantity: existingArticle.quantity || 0,
                additionalQuantity: quantity,
              },
            }
          : undefined,
      };
    }

    // Ajouter le nouvel article
    set((state) => ({
      articles: [
        ...state.articles,
        {
          name: normalizedName,
          ...(quantity && { quantity }),
          ...(unitPrice && { unitPrice }),
          ...(unit && { unit }),
          isPurchased: false,
        },
      ],
    }));

    return {
      status: 'SUCCESS',
      message: `Article "${normalizedName}" ajouté avec succès.`,
    };
  },

  togglePurchased: (name: string) => {
    set((state) => ({
      articles: state.articles.map((article) =>
        article.name === name ? { ...article, isPurchased: !article.isPurchased } : article
      ),
    }));
  },

  updateQuantity: (name: string, quantity: number) => {
    if (quantity <= 0) {
      throw new Error('La quantité doit être supérieure à 0');
    }

    set((state) => ({
      articles: state.articles.map((article) =>
        article.name === name ? { ...article, quantity } : article
      ),
    }));
  },

  removeArticle: (name: string) => {
    console.log('Store: removing article:', name);
    console.log('Store: current articles:', get().articles);
    set((state) => {
      const newArticles = state.articles.filter((article) => article.name !== name);
      console.log('Store: articles after removal:', newArticles);
      return { articles: newArticles };
    });
  },

  // Getters
  getTotalPrice: () => {
    return get().articles.reduce((sum, article) => {
      if (article.quantity && article.unitPrice) {
        return sum + article.quantity * article.unitPrice;
      }
      return sum;
    }, 0);
  },

  getFormattedTotalPrice: () => {
    return (get().getTotalPrice() / 100).toFixed(2) + '€';
  },

  getFormattedPurchasedTotalPrice: () => {
    const total = get()
      .getPurchasedArticles()
      .reduce((sum, article) => sum + (article.quantity || 0) * (article.unitPrice || 0), 0);
    return (total / 100).toFixed(2) + '€';
  },

  getPurchasedArticles: () => {
    return get().articles.filter((article) => article.isPurchased);
  },

  getUnpurchasedArticles: () => {
    return get().articles.filter((article) => !article.isPurchased);
  },
}));
