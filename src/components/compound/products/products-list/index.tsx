export {} // import { Grid, Skeleton } from '@mui/material'
// import { IFilter } from 'lib/@types/filters'
// import { FC, lazy } from 'react'

// const ProductCard = lazy(
// 	() => import('@components/compounds/products/product-card')
// )

// interface IProps {
// 	productItems: IProductItem[]
// 	filter?: IFilter
// 	wishlist?: (string | number)[]
// }

// const ProductsList: FC<IProps> = ({ productItems, filter, wishlist }) => {
// 	return (
// 		<>
// 			{productItems
// 				.filter((item) => {
// 					if (
// 						item.title
// 							.toLowerCase()
// 							.includes(filter?.term.toLowerCase() || '') &&
// 						isInRange(item.price, filter?.priceRange)
// 					) {
// 						return true
// 					}
// 				})
// 				.map((item: IProductItem) => (
// 					<Grid item key={item.id} xs={12} md={4} sm={6}>
// 						<Lazy
// 							fallback={
// 								<Skeleton
// 									animation='pulse'
// 									variant='rectangular'
// 									width={210}
// 									height={118}
// 								/>
// 							}
// 						>
// 							<ProductCard
// 								product={item}
// 								inWishlist={wishlist?.includes(item.id)}
// 							/>
// 						</Lazy>
// 					</Grid>
// 				))}
// 		</>
// 	)
// }

// export default ProductsList
