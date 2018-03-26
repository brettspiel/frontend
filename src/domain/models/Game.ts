export enum GameType {
  Dominion = 'dominion',
  Hex = 'hex',
  TicTacToe = 'tic-tac-toe',
}

export interface GameOptions {
  [GameType.Dominion]: GameOptionDominion;
  [GameType.Hex]: GameOptionHex;
  [GameType.TicTacToe]: GameOptionTicTacToe;
}

export interface GameOptionDominion {
  decks: {
    basic: boolean;
    intrigue: boolean;
    seaside: boolean;
    prosperity: boolean;
    alchemy: boolean;
    cornucopia: boolean;
    hinterlands: boolean;
    darkAges: boolean;
    guilds: boolean;
    adventures: boolean;
    empires: boolean;
    nocturne: boolean;
  }
}

export interface GameOptionHex {
  size: 7 | 11 | 14 | 26;
}

export interface GameOptionTicTacToe {

}
