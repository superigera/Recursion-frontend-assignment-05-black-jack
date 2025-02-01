export type Action = "bet" | "surrender" | "stand" | "hit" | "double";

export class GameDecision {
  action: Action;
  amount: number;

  constructor(action: Action, amount: number) {
    this.action = action;
    this.amount = amount;
  }
}
