import { ScrollTopModule } from './scroll-top.module';

describe('ScrollTopModule', () => {
  let scrollTopModule: ScrollTopModule;

  beforeEach(() => {
    scrollTopModule = new ScrollTopModule();
  });

  it('should create an instance', () => {
    expect(scrollTopModule).toBeTruthy();
  });
});
