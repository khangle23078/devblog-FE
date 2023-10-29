export interface API_RESPONSE<D> {
  status: number;
  error: boolean;
  data: D;
  paginate?: any;
  message: string;
}
