import axios from "axios";

export class StatusRepository {
  constructor(
    private protocol: "http:" | "https:",
    private host: string,
    private port: number
  ) {}

  get(): Promise<void> {
    return axios
      .get(`${this.protocol}//${this.host}:${this.port}/status`)
      .then(res => {
        if (res.data !== "game server is running.") {
          throw new Error("invalid game server.");
        }
      });
  }
}
