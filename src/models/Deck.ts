import { Card } from "./Card";
import { SUITS, RANKS } from "./constants";

export class Deck {
  gameType: string;
  cards: Card[];

  constructor(gamgeType: string) {
    this.gameType = gamgeType;
    this.cards = [];

    // ゲームの種類によってデッキの作成方法を変える
    switch (this.gameType) {
      case "blackjack":
        this.createBlackJackDeck();
        break;

      default:
        throw new Error(`Invalid game type: ${this.gameType}`);
    }
  }

  /**
   * ブラックジャックのデッキを作成する(52枚)
   * @returns {void}
   */
  private createBlackJackDeck(): void {
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  /**
   * デッキをシャッフルする
   * @returns {void}
   */
  shuffle(): void {
    // Fisher-Yatesシャッフル(適当な数字を生成して、それを元にカードを入れ替える)
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /**
   * デッキをリセットする（最初の状態に戻す）
   * @returns {void}
   */
  resetDeck(): void {
    this.cards = [];
    switch (this.gameType) {
      case "blackjack":
        this.createBlackJackDeck();
        break;
    }
    this.shuffle();
  }

  /**
   * デッキからカードを1枚引く
   * @returns {Card | null} 引いたカード（空なら `null`）
   */
  drawOne(): Card | null {
    return this.cards.length > 0 ? this.cards.pop()! : null;
  }
}
