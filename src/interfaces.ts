export interface ITodo {
  id: number | null;
  text: string;
  createdAt?: string;
}

export interface ITodos extends Array<ITodo> {}
