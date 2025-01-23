import { useShoppingStore } from '@/stores/useShoppingStore';

describe('useShoppingStore', () => {
  beforeEach(() => {
    useShoppingStore.setState({ articles: [] });
  });

  it('should add an article', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');

    const articles = useShoppingStore.getState().articles;
    expect(articles).toHaveLength(1);
    expect(articles[0]).toEqual({
      name: 'Pommes',
      quantity: 2,
      unitPrice: 150,
      unit: 'kg',
      isPurchased: false,
    });
  });

  it('should handle duplicate articles', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');
    const resultAdd = store.addArticle('Pommes', 3, 150, 'kg');

    expect(resultAdd.status).toBe('DUPLICATE');
    expect(resultAdd.suggestions?.updateQuantity).toBeDefined();
    expect(resultAdd.suggestions?.updateQuantity?.currentQuantity).toBe(2);
    expect(resultAdd.suggestions?.updateQuantity?.additionalQuantity).toBe(3);
  });

  it('should toggle purchased status', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');
    store.togglePurchased('Pommes');

    let articles = useShoppingStore.getState().articles;
    expect(articles[0].isPurchased).toBe(true);

    store.togglePurchased('Pommes');
    articles = useShoppingStore.getState().articles;
    expect(articles[0].isPurchased).toBe(false);
  });

  it('should update quantity', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');
    store.updateQuantity('Pommes', 5);

    const articles = useShoppingStore.getState().articles;
    expect(articles[0].quantity).toBe(5);
  });

  it('should throw error when updating quantity to 0 or less', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');

    expect(() => store.updateQuantity('Pommes', 0)).toThrow();
    expect(() => store.updateQuantity('Pommes', -1)).toThrow();
  });

  it('should calculate total price correctly', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg'); // 2 * 150 = 300
    store.addArticle('Poires', 3, 200, 'kg'); // 3 * 200 = 600

    expect(store.getTotalPrice()).toBe(900);
    expect(store.getFormattedTotalPrice()).toBe('9.00€');
  });

  it('should calculate purchased total price correctly', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');
    store.addArticle('Poires', 3, 200, 'kg');
    store.togglePurchased('Pommes');

    expect(store.getFormattedPurchasedTotalPrice()).toBe('3.00€');
  });

  it('should filter purchased and unpurchased articles', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');
    store.addArticle('Poires', 3, 200, 'kg');
    store.togglePurchased('Pommes');

    expect(store.getPurchasedArticles()).toHaveLength(1);
    expect(store.getUnpurchasedArticles()).toHaveLength(1);
    expect(store.getPurchasedArticles()[0].name).toBe('Pommes');
    expect(store.getUnpurchasedArticles()[0].name).toBe('Poires');
  });

  it('should remove an article', () => {
    const store = useShoppingStore.getState();
    store.addArticle('Pommes', 2, 150, 'kg');

    let articles = useShoppingStore.getState().articles;
    expect(articles).toHaveLength(1);

    store.removeArticle('Pommes');
    articles = useShoppingStore.getState().articles;
    expect(articles).toHaveLength(0);
  });
});
