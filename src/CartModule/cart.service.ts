import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Cart from './cart.model';
import Product from '../ProductModule/product.model';
import Payment from '../PaymentModule/payment.model';
import Shipment from '../ShipmentModule/shipment.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('Cart') private readonly cartModel: Model<Cart>,
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('Payment') private readonly paymentModel: Model<Payment>,
    @InjectModel('Shipment') private readonly shipmentModel: Model<Shipment>,
  ) {}

  // Find a cart by its ID
  async findById(id: string) {
    const cart = await this.cartModel.findById(id);
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
    return cart;
  }

  // Add a item to the cart
  async addItemToCart(cartId: string, productId: string) {
    const cart = await this.findById(cartId);
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    cart.items.push(product.id);
    return cart.save();
  }

  // Remove a product from the cart
  async removeProduct(cartId: string, productId: string) {
    const cart = await this.findById(cartId);
    cart.items = cart.items.filter((p) => p.productId !== productId);
    return cart.save();
  }

  // Add a payment to the cart
  async addPayment(cartId: string, paymentDto: any) {
    const cart = await this.findById(cartId);
    const newPayment = new this.paymentModel(paymentDto);
    await newPayment.save();

    cart.payments.push(newPayment);
    return cart.save();
  }

  // Add a shipment to the cart
  async addShipment(cartId: string, shipmentDto: any) {
    const cart = await this.findById(cartId);
    const newShipment = new this.shipmentModel(shipmentDto);
    await newShipment.save();

    cart.shipments.push(newShipment);
    return cart.save();
  }

  // Other methods like updating cart items, processing the checkout, etc.
}
