import { CustomerApi } from './customerApi';

export class CustomerWrappedApi implements CustomerApi {
  private api: CustomerApi;

  constructor(api: CustomerApi) {
    this.api = api;
  }

  get(): any {
    return {
      status: 'OK',
      data: {
        customer: this.api.get(),
      },
    };
  }
}
