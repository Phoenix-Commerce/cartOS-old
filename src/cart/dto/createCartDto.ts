type CreateCartDto = {
  customer: {
    id: string;
    name: string;
    email: string;
  };
  shop: {
    id: string;
    name: string;
  };
  items: {
    product: {
      id: string;
      name: string;
      description: string;
      price: number;
      quantity: number;
    };
    price: number;
    quantity: number;
    discounts: {
      id: string;
      name: string;
      description: string;
      amount: number;
      type: string;
    }[];
  }[];
  payments: {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: string;
  }[];
  fulfillment: {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: string;
  };
};

export default CreateCartDto;
