import styles from './BookCard.module.scss';
import prince from '@/images/no_photo.jpg';
import heart0 from '@/images/heart0.svg';
import heart1 from '@/images/heart1.svg';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import play from '@/images/play.svg';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { IBookSlug } from '@/services/index.interface';
import { addCart, addFavorites, removeCart, removeFavorites } from '@/store/index.actions';

const BookCard: React.FC<IBookSlug> = (props) => {
  const { categoryId } = useParams();
  const { favorites } = useAppSelector(store => store.favorite)
  const { basket } = useAppSelector(store => store.cart)
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { price, slug, title, author, image, quantity } = props;
  const isFav = favorites.some((item) => item.slug === slug);
  const isCart = basket.some((item) => item.slug === slug);
  const buttonFilter = !categoryId && pathname !== '/my_books' && pathname !== '/favorites';
  const audioFilter = pathname === '/my_books';
  const priceFilter = categoryId || pathname === '/favorites';

  const changeFavorites = () => {
    dispatch(addFavorites(props))
  };
  const changeRemoveFavorites = () => {
    dispatch(removeFavorites(props))
  };

  const clickBook = () => {
    if (pathname !== '/my-books') {
      navigate(`/book/${slug}`);
    } else {
      navigate(`/audiobook/${slug}`);
    }
  };

  const changeCart = () => {
    dispatch(addCart(props))
  };
  const changeRemoveCart = () => {
    dispatch(removeCart(props))
  }

  return (
    <div className={styles.book_card}>
      <div onClick={clickBook} className={styles.img}>
        <img className='object-cover' src={image[0] ? image[0].image_url : prince} alt="image" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div onClick={clickBook} className={styles.text}>
            <h3>{title}</h3>
            <p>{author && author[0].name}</p>
          </div>
          <div className={styles.favorite}>
            {isFav ? (
              <img onClick={changeRemoveFavorites} src={heart1} alt="favorite" />
            ) : (
              <img onClick={changeFavorites} src={heart0} alt="favorite" />
            )}
          </div>
        </div>
        <div className={styles.waves}>
          {audioFilter && (
            <Link key={slug} to={`/audiobook/${slug}`}>
              <img className={styles.play} src={play} alt="play icon" />
            </Link>
          )}
          {priceFilter && <h4>{price} som</h4>}
          <div className={styles.quantity}>
            <i className="bx bx-show-alt"></i>
            <p>{quantity}</p>
            </div>
          {buttonFilter && (
            <button
              className={styles.listening_btn}
              onClick={() => navigate(`/audiobook/${slug}`, { replace: true })}
            >
              Tıńlaw
            </button>
          )}
          <button className={styles.addToCartButton} >
            {
              isCart ? 
                <i onClick={changeRemoveCart} className={`bx bxs-cart-alt ${styles.addToCartButton}`}></i>
              : 

                <i onClick={changeCart} className={`bx bx-cart-alt ${styles.addToCartButton}`}></i>
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export { BookCard };