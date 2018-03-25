import {User} from "./User";

export enum GameType {
  Dominion = 'dominion',
  Hex = 'hex',
  TicTacToe = 'tic-tac-toe',
}

export enum GameStatus {
  Wanted = 'wanted',
  Started = 'started',
  Finished = 'finished',
}

export interface GameRoom {
  id: string;
  game: GameType;
  owner: User;
  players: User[];
  status: GameStatus;
}
