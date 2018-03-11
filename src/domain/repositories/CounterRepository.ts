import * as SocketIo from 'socket.io-client';

export class CounterRepository {
  private socket: SocketIOClient.Socket;
  constructor(private serverUrl: string) {
    this.socket = SocketIo(`${this.serverUrl}/counter`);
  }

  get(): Promise<number> {
    return new Promise(resolve => {
      this.socket.emit("get");
      this.socket.once("update", (count: number) => {
        resolve(count);
      });
    });
  }

  add(delta: number): Promise<number> {
    return new Promise(resolve => {
      this.socket.emit("patch", delta);
      this.socket.once("update", (count: number) => {
        resolve(count);
      });
    });
  }
}
