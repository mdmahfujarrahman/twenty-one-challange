import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/feature/cart/cartSlice';
import { useGetSingleProductQuery } from '@/redux/feature/product/productApi';
import { useAppDispatch } from '@/redux/hooks/reduxHooks';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { data: product, isLoading, isError } = useGetSingleProductQuery(id);

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.data?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.data?.rating}</p>
          <ul className="space-y-1 text-lg">
            {product?.data?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button onClick={() => dispatch(addToCart(product?.data))}>
            Add to cart
          </Button>
        </div>
      </div>
      <ProductReview />
    </>
  );
}
