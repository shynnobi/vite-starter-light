export enum ShoppingEvents {
  ARTICLE_ADDED = 'ARTICLE_ADDED',
  ARTICLE_REMOVED = 'ARTICLE_REMOVED',
  QUANTITY_UPDATED = 'QUANTITY_UPDATED',
  PURCHASED_TOGGLED = 'PURCHASED_TOGGLED',
}

export interface Article {
  name: string;
  quantity: number;
  unitPrice: number;
  unit: string;
  isPurchased: boolean;
}

export interface AddArticleResult {
  status: 'SUCCESS' | 'DUPLICATE' | 'ERROR';
  message: string;
  suggestions?: {
    updateQuantity?: {
      message: string;
      currentQuantity: number;
      additionalQuantity: number;
    };
  };
}

export interface ShoppingStore {
  articles: Article[];

  // Actions
  addArticle: (name: string, quantity: number, unitPrice: number, unit: string) => AddArticleResult;
  togglePurchased: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  removeArticle: (name: string) => void;

  // Getters
  getTotalPrice: () => number;
  getFormattedTotalPrice: () => string;
  getFormattedPurchasedTotalPrice: () => string;
  getPurchasedArticles: () => Article[];
  getUnpurchasedArticles: () => Article[];
}
