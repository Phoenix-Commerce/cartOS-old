import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Cart from './cart.model';
import Product from '../product/product.model';
import Payment from '../payment/payment.model';
import Shop from '../shop/shop.model';
import Fulfillment from '../fulfillment/fulfillment.model';
import CreateCartDto from './dto/createCartDto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('Cart') private readonly cartModel: Model<Cart>,
    @InjectModel('Shop') private readonly shopModel: Model<Shop>,
    @InjectModel('Fulfillment') private readonly fulfillmentModel: Model<Fulfillment>,
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('Payment') private readonly paymentModel: Model<Payment>,
  ) {}

  // Find a cart by its ID
  async findById(id: string) {
    const cart = await this.cartModel.findById(id);
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
    return cart;
  }

  // create a new cart
  async createCart(cartDto: CreateCartDto) {
    const newCart = new this.cartModel(cartDto);
    return newCart.save();
  }

  // // Add a item to the cart
  // async addItemToCart(cartId: string, productId: string) {
  //   const cart = await this.findById(cartId);
  //   const product = await this.productModel.findById(productId).exec();
  //   if (!product) {
  //     throw new NotFoundException('Product not found');
  //   }
  //
  //   cart.items.push(product.id);
  //   return cart.save();
  // }

  // // Add a payment to the cart
  // async addPayment(cartId: string, paymentDto: any) {
  //   const cart = await this.findById(cartId);
  //   const newPayment = new this.paymentModel(paymentDto);
  //   await newPayment.save();
  //
  //   cart.payments.push(newPayment);
  //   return cart.save();
  // }
}
