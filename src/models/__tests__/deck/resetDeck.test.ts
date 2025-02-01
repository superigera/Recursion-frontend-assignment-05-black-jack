import { describe, test, expect } from "vitest";
import { Deck } from "../../Deck";

describe("DeckクラスのresetDeckテスト", () => {
  test("リセット後もデッキの枚数が52枚", () => {
    const deck = new Deck("blackjack");
    deck.resetDeck();
    expect(deck.cards.length).toBe(52);
  });

  test("リセット後もデッキ内容が変わらない", () => {
    const deck = new Deck("blackjack");
    const originalSet = new Set(
      deck.cards.map((card) => `${card.suit}-${card.rank}`)
    );

    deck.resetDeck();

    const shuffledSet = new Set(
      deck.cards.map((card) => `${card.suit}-${card.rank}`)
    );
    expect(shuffledSet).toEqual(originalSet);
  });
});
