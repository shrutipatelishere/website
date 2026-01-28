export interface CartItem {
  medicineId: string;
  quantity: number;
  selectedVariant: {
    strength: string;
    packSize: string;
    price: number;
    mrp: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  shippingFee: number;
  discount: number;
  paymentMethod: string;
  prescriptionRequired: boolean;
  prescriptionStatus?: 'pending' | 'verified' | 'rejected';
  createdAt: string;
  estimatedDelivery: string;
  deliveryAddress: Address;
}

export interface OrderItem {
  medicineId: string;
  medicineName: string;
  quantity: number;
  strength: string;
  packSize: string;
  price: number;
  prescriptionRequired: boolean;
}

export interface Prescription {
  id: string;
  fileName: string;
  uploadedAt: string;
  status: 'pending' | 'verified' | 'rejected';
  validUntil?: string;
  linkedOrders: string[];
}

export interface RefillReminder {
  id: string;
  medicineId: string;
  medicineName: string;
  frequency: 'weekly' | 'biweekly' | 'monthly' | 'quarterly';
  nextRefillDate: string;
  isActive: boolean;
}
