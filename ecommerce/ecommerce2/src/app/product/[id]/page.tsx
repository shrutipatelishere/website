'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  Plus,
  Minus,
  Shield,
  Truck,
  RotateCcw,
  Clock,
  Star,
  Pill,
  AlertTriangle,
  Thermometer,
  Package,
  Building2,
  Snowflake,
  Check,
  Info,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ProductCard } from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';
import { medicines, categories } from '@/data/medicines';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

function ProductNotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-navy-900 mb-4">Product Not Found</h1>
      <p className="text-clinical-600 mb-6">The medicine you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/categories">
        <Button>Browse All Medicines</Button>
      </Link>
    </div>
  );
}

function ProductDetailContent({ id }: { id: string }) {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  const medicine = medicines.find((m) => m.id === id);

  if (!medicine) {
    return <ProductNotFound />;
  }

  const category = categories.find((c) => c.id === medicine.category);
  const currentVariant = medicine.variants[selectedVariant];
  const relatedMedicines = medicines
    .filter((m) => m.category === medicine.category && m.id !== medicine.id)
    .slice(0, 4);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(medicine, quantity, selectedVariant);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsAdding(false);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-clinical-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-clinical-500 hover:text-navy-800">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-clinical-400" />
            <Link href="/categories" className="text-clinical-500 hover:text-navy-800">
              Categories
            </Link>
            <ChevronRight className="w-4 h-4 text-clinical-400" />
            {category && (
              <>
                <Link
                  href={`/category/${category.id}`}
                  className="text-clinical-500 hover:text-navy-800"
                >
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4 text-clinical-400" />
              </>
            )}
            <span className="text-navy-900 font-medium truncate max-w-xs">
              {medicine.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-clinical-50 border border-clinical-100 flex items-center justify-center overflow-hidden">
              <Pill className="w-32 h-32 text-clinical-200" />
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-clinical-100">
                <Shield className="w-5 h-5 text-teal-600" />
                <span className="text-sm text-navy-800">Genuine</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-clinical-100">
                <Truck className="w-5 h-5 text-teal-600" />
                <span className="text-sm text-navy-800">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-clinical-100">
                <RotateCcw className="w-5 h-5 text-teal-600" />
                <span className="text-sm text-navy-800">Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div>
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              {medicine.prescriptionRequired ? (
                <Badge variant="rx" size="md">Rx Required</Badge>
              ) : (
                <Badge variant="otc" size="md">OTC</Badge>
              )}
              {medicine.coldChain && (
                <Badge variant="coldchain" size="md">
                  <Snowflake className="w-3.5 h-3.5 mr-1" />
                  Cold Chain
                </Badge>
              )}
              {medicine.discount > 0 && (
                <Badge variant="discount" size="md">{medicine.discount}% off</Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-1">
              {medicine.name}
            </h1>
            <p className="text-lg text-clinical-600 mb-4">
              {medicine.genericName} • by {medicine.manufacturer}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-semibold text-navy-900">{medicine.rating}</span>
              </div>
              <span className="text-clinical-500">({medicine.reviewCount.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="p-4 bg-clinical-50 rounded-xl mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-navy-900">
                  {formatPrice(currentVariant.price)}
                </span>
                {medicine.discount > 0 && (
                  <>
                    <span className="text-xl text-clinical-400 line-through">
                      {formatPrice(currentVariant.mrp)}
                    </span>
                    <span className="text-success font-medium">
                      Save {formatPrice(currentVariant.mrp - currentVariant.price)}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-clinical-500 mt-1">Inclusive of all taxes</p>
            </div>

            {/* Variants */}
            {medicine.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-navy-800 mb-3">
                  Select Pack Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {medicine.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={cn(
                        'px-4 py-2.5 text-sm rounded-xl border-2 transition-all duration-150',
                        selectedVariant === index
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-clinical-200 hover:border-clinical-300'
                      )}
                    >
                      <span className="font-medium">{variant.strength}</span>
                      <span className="text-clinical-500 ml-1">• {variant.packSize}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-navy-800 mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border-2 border-clinical-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-clinical-600 hover:bg-clinical-50 rounded-l-xl transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-16 text-center text-lg font-medium text-navy-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-clinical-600 hover:bg-clinical-50 rounded-r-xl transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Delivery */}
            <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
              <Clock className="w-6 h-6 text-teal-600" />
              <div>
                <p className="font-medium text-teal-800">Delivery Estimate</p>
                <p className="text-sm text-teal-600">{medicine.deliveryEstimate}</p>
              </div>
            </div>

            {/* Cold chain warning */}
            {medicine.coldChain && (
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                <Snowflake className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Cold Chain Product</p>
                  <p className="text-sm text-blue-600">
                    This product requires temperature-controlled storage. It will be delivered in specialized packaging.
                  </p>
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <Button
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              isLoading={isAdding}
              leftIcon={!isAdding && <Plus className="w-5 h-5" />}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="composition">Composition</TabsTrigger>
              <TabsTrigger value="uses">Uses & Benefits</TabsTrigger>
              <TabsTrigger value="side-effects">Side Effects</TabsTrigger>
              <TabsTrigger value="precautions">Precautions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-3">Product Details</h3>
                    <dl className="space-y-3">
                      <div className="flex">
                        <dt className="w-1/3 text-clinical-500">Form</dt>
                        <dd className="w-2/3 text-navy-800 capitalize">{medicine.form}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-clinical-500">Strength</dt>
                        <dd className="w-2/3 text-navy-800">{medicine.strength}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-clinical-500">Pack Size</dt>
                        <dd className="w-2/3 text-navy-800">{currentVariant.packSize}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-clinical-500">Category</dt>
                        <dd className="w-2/3 text-navy-800">{category?.name || medicine.category}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-3">Manufacturer</h3>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-clinical-100 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-clinical-500" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-900">{medicine.manufacturer}</p>
                        <p className="text-sm text-clinical-500 mt-1">Licensed Manufacturer</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-clinical-50 rounded-xl">
                      <div className="flex items-center gap-2 text-sm">
                        <Thermometer className="w-4 h-4 text-clinical-500" />
                        <span className="text-clinical-600">Storage: {medicine.storage}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-2">
                        <Package className="w-4 h-4 text-clinical-500" />
                        <span className="text-clinical-600">Expiry: {medicine.expiryNote}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dosage disclaimer */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-800">Dosage Information</p>
                      <p className="text-sm text-amber-700 mt-1">{medicine.dosage}</p>
                      <p className="text-xs text-amber-600 mt-2">
                        Disclaimer: This information is for reference only. Please consult a healthcare
                        professional for proper dosage advice.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="composition">
              <Card>
                <h3 className="font-semibold text-navy-900 mb-4">Salt Composition</h3>
                <div className="space-y-2">
                  {medicine.saltComposition.map((salt, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-clinical-50 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-teal-700" />
                      </div>
                      <span className="text-navy-800">{salt}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="uses">
              <Card>
                <h3 className="font-semibold text-navy-900 mb-4">Uses & Benefits</h3>
                <ul className="space-y-3">
                  {medicine.uses.map((use, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-teal-700" />
                      </div>
                      <span className="text-navy-800">{use}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-clinical-500">
                  * This information is for educational purposes only. Consult a doctor for medical advice.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="side-effects">
              <Card>
                <h3 className="font-semibold text-navy-900 mb-4">Possible Side Effects</h3>
                <ul className="space-y-3">
                  {medicine.sideEffects.map((effect, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                      </div>
                      <span className="text-navy-800">{effect}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-clinical-50 rounded-xl">
                  <p className="text-sm text-clinical-600">
                    Not all people experience these side effects. If any of these persist or worsen,
                    please consult your doctor immediately.
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="precautions">
              <Card>
                <h3 className="font-semibold text-navy-900 mb-4">Precautions & Warnings</h3>
                <ul className="space-y-3">
                  {medicine.precautions.map((precaution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Info className="w-3.5 h-3.5 text-red-700" />
                      </div>
                      <span className="text-navy-800">{precaution}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Substitutes */}
        {medicine.substitutes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-display font-bold text-navy-900 mb-4">
              Generic Alternatives
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {medicine.substitutes.map((substitute) => (
                <div
                  key={substitute.id}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-clinical-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-clinical-50 flex items-center justify-center">
                      <Pill className="w-6 h-6 text-clinical-400" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-900">{substitute.name}</p>
                      <p className="text-sm text-clinical-500">{formatPrice(substitute.price)}</p>
                    </div>
                  </div>
                  {substitute.savings > 0 && (
                    <Badge variant="success">Save {formatPrice(substitute.savings)}</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedMedicines.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-display font-bold text-navy-900 mb-4">
              Similar Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedMedicines.map((med) => (
                <ProductCard
                  key={med.id}
                  medicine={med}
                  onAddToCart={() => addToCart(med, 1, 0)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart - Mobile */}
      <div className="fixed bottom-16 left-0 right-0 z-30 md:hidden bg-white border-t border-clinical-100 p-4 pb-safe">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-2xl font-bold text-navy-900">
              {formatPrice(currentVariant.price * quantity)}
            </p>
            <p className="text-xs text-clinical-500">for {quantity} item(s)</p>
          </div>
          <Button onClick={handleAddToCart} isLoading={isAdding} className="flex-1">
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <ClientLayout>
      <ProductDetailContent id={id} />
    </ClientLayout>
  );
}
