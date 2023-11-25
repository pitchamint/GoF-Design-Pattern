import { Customer } from './customer';
import { CustomerApi } from './decoratorApi/customerApi';
import { CustomerWrappedApi } from './decoratorApi/customerWrapedApi';
import { EncrytedCustomerApi } from './decoratorApi/encrytedCustomerApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should build response with wrapped status and data', () => {
    //given
    const api = new CustomerApi();
    const wrappedApi = new CustomerWrappedApi(api);

    const expectedCustomer = {
      status: 'OK',
      data: {
        customer: new Customer('John', 'Doe', 30),
      },
    };

    //when
    const result = wrappedApi.get();

    //then
    expect(result).toEqual(expectedCustomer);
  });

  it('should return response with expected customer data', () => {
    //given
    const api = new CustomerApi();
    const encrytedApi = new EncrytedCustomerApi(api);
    const wrappedApi = new CustomerWrappedApi(encrytedApi);
    const expectedData = {
      status: 'OK',
      data: {
        customer: {
          name: 'encrypted John',
          lastname: 'encrypted Doe',
          age: 0,
        },
      },
    };

    //when
    const result = wrappedApi.get();

    //then
    expect(result).toEqual(expectedData);
  });
});
