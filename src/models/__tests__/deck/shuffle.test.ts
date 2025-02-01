import { describe, test, expect } from "vitest";
import { Deck } from "../../Deck";

describe("Deckクラスのshuffleテスト", () => {
  test("シャッフル後もデッキの枚数が52枚", () => {
    const deck = new Deck("blackjack");
    deck.shuffle();
    expect(deck.cards.length).toBe(52);
  });

  test("シャッフル後もデッキ内容が変わらない", () => {
    const deck = new Deck("blackjack");
    const originalSet = new Set(
      deck.cards.map((card) => `${card.suit}-${card.rank}`)
    );

    deck.shuffle();

    const shuffledSet = new Set(
      deck.cards.map((card) => `${card.suit}-${card.rank}`)
    );
    expect(shuffledSet).toEqual(originalSet);
  });
});
