export {}
// import './index.scss'
// import { addItem } from '@app/store/redux/features/shopping-cart/slice'
// import { unwishfor, wishfor } from '@app/store/redux/features/wishlist/slice'
// import { useAppDispatch } from '@app/store/redux/hooks'
// import Favorite from '@mui/icons-material/Favorite'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import { Grid, Tooltip } from '@mui/material'
// import Button from '@mui/material/Button'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import { IProductItem } from 'lib/@types/products'
// import { FC } from 'react'

// interface IProps {
// 	product: IProductItem
// 	inWishlist: boolean | undefined
// }
// const ProductCard: FC<IProps> = ({ product, inWishlist = false }) => {
// 	const dispatch = useAppDispatch()
// 	const removeFromWishlist = () => {
// 		dispatch(unwishfor(product.id))
// 	}
// 	const addToWishlist = () => {
// 		dispatch(wishfor(product.id))
// 	}
// 	const wishlistTooltip = inWishlist
// 		? 'Remove from wishlist'
// 		: 'Add to wishlist'
// 	const WishlistIcon = inWishlist ? Favorite : FavoriteBorder
// 	return (
// 		<Card className='product-card'>
// 			{/* ----------------------------------------- Image */}
// 			<CardMedia
// 				className='card-media'
// 				component='img'
// 				image={product.image}
// 				alt={product.title}
// 			/>
// 			<CardContent>
// 				{/* ----------------------------------------- Title */}
// 				<Typography gutterBottom variant='h5' component='h5'>
// 					{product.title}
// 				</Typography>
// 				{/* ----------------------------------------- Price */}
// 				<Typography variant='body2' color='text.secondary'>
// 					Price: ${product.price}
// 				</Typography>
// 			</CardContent>
// 			<CardActions className='action'>
// 				<Grid container>
// 					{/* ----------------------------------------- Add to cart */}
// 					<Grid item xs={6} textAlign='center'>
// 						<Button onClick={() => dispatch(addItem(product))}>
// 							<Tooltip title='Add to Cart'>
// 								<AddShoppingCartIcon sx={{ color: 'white' }} />
// 							</Tooltip>
// 						</Button>
// 					</Grid>
// 					{/* ----------------------------------------- Wish */}
// 					<Grid item xs={6} textAlign='center'>
// 						<Button
// 							size='small'
// 							onClick={inWishlist ? removeFromWishlist : addToWishlist}
// 						>
// 							<Tooltip title={wishlistTooltip}>
// 								<WishlistIcon sx={{ color: 'white' }} />
// 							</Tooltip>
// 						</Button>
// 					</Grid>
// 				</Grid>
// 			</CardActions>
// 		</Card>
// 	)
// }

// export default ProductCard
