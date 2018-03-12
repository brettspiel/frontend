export class CounterRepository {
  constructor(private socket: SocketIOClient.Socket) {}

  get(): Promise<number> {
    return new Promise(resolve => {
      this.socket.emit("get");
      this.socket.once("update", (count: number) => resolve(count));
    });
  }

  add(delta: number): Promise<number> {
    return new Promise(resolve => {
      this.socket.emit("patch", delta);
      this.socket.once("update", (count: number) => resolve(count));
    });
  }

  onUpdate(handler: (count: number) => void): void {
    this.socket.on("update", handler);
  }
}
