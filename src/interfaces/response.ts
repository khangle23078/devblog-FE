export interface API_RESPONSE<D> {
  status: number;
  error: boolean;
  data: D;
  message: string;
}
