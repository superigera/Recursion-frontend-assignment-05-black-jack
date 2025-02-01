import { describe, test, expect } from "vitest";
import { Deck } from "../../Deck";
import { SUITS, RANKS } from "../../constants";

describe("Deckクラスのテスト", () => {
  test("デッキの枚数が52枚", () => {
    const deck = new Deck("blackjack");
    expect(deck.cards.length).toBe(52);
  });

  test("デッキにすべてのスートとランクが含まれている", () => {
    const deck = new Deck("blackjack");
    const cardSet = new Set(
      deck.cards.map((card) => `${card.suit}-${card.rank}`)
    );

    // 期待される52枚のカードセットを作成
    const expectedSet = new Set();
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        expectedSet.add(`${suit}-${rank}`);
      }
    }

    expect(cardSet).toEqual(expectedSet);
  });

  test("BlackJack以外を指定", () => {
    expect(() => new Deck("test")).toThrowError("Invalid game type: test");
  });
});
