import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { getModelToken } from '@nestjs/mongoose';

import Cart from './cart.model';
import Shop from '../shop/shop.model';
import Fulfillment from '../fulfillment/fulfillment.model';
import Product from '../product/product.model';
import Payment from '../payment/payment.model';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: getModelToken(Cart.name),
          useValue: Cart,
        },
        {
          provide: getModelToken(Shop.name),
          useValue: Shop,
        },
        {
          provide: getModelToken(Fulfillment.name),
          useValue: Fulfillment,
        },
        {
          provide: getModelToken(Product.name),
          useValue: Product,
        },
        {
          provide: getModelToken(Payment.name),
          useValue: Payment,
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('second way', () => {
    const cartService = new (CartService as any)();
    cartService.Cart.findOne = jest.fn();
    expect(cartService).toBeDefined();
  });
});
