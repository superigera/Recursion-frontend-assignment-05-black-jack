import { describe, test, expect } from "vitest";
import { Deck } from "../../Deck";

describe("DeckクラスのdrawOneテスト", () => {
  test("drawOne() を呼び出すとデッキの枚数が 1 減る", () => {
    const deck = new Deck("blackjack");
    const initialLength = deck.cards.length;

    const drawnCard = deck.drawOne();

    expect(drawnCard).not.toBeNull();
    expect(deck.cards.length).toBe(initialLength - 1);
  });

  test("デッキが空のときに drawOne() を呼び出すと null を返す", () => {
    const deck = new Deck("blackjack");

    // 全部引く
    for (let i = 0; i < 52; i++) {
      deck.drawOne();
    }

    expect(deck.drawOne()).toBeNull();
  });

  test("引いたカードが元々デッキにあったカードである", () => {
    const deck = new Deck("blackjack");
    const originalSet = new Set(
      deck.cards.map((card) => `${card.suit}-${card.rank}`)
    );

    const drawnCard = deck.drawOne();

    expect(drawnCard).not.toBeNull();
    if (drawnCard) {
      expect(originalSet.has(`${drawnCard.suit}-${drawnCard.rank}`)).toBe(true);
    }
  });
});
