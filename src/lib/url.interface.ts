export interface UrlState {
  originalUrl: string;
  shortCode: string;
}

export interface ResponseShortUrl {
  status: string;
  message: string;
  data: UrlState;
  code: number;
}
