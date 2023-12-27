import { useEffect, useRef, useState } from 'react'
import SearchBar from '../components/SearchBar'
import "./styles/SearchProduct.scss"
import Accordion from '../components/Accordion'
import Product from '../components/Product'
import { Item, checkboxItem } from '../defs/types.def'
import api from '../api/api'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
const SearchProduct = () => {
  const { id } = useParams()
  const [loading,setLoading]=useState(true)
  const [trending, setTrending] = useState<Item[]>([])
  const [markbox, setMarkBox] = useState<checkboxItem>({
    price: [],
    categories: [],
    rating:[]
  })
  const searchRef = useRef(null)


  const isPriceInRange = (itemPrice: string, range: string): boolean => {
    const [max, min] = range.split('-').map(str => parseInt(str.replace(/\D/g, ''), 10));



    const itemPriceNumeric = parseInt(itemPrice);

    return itemPriceNumeric >= min && itemPriceNumeric <= max;
  };

   const isRatingMatch = (itemRating: number, selectedRatings: string[]): boolean => {
    const numericRating = Math.ceil(itemRating); 
    return selectedRatings.length === 0 || selectedRatings.includes(numericRating.toString());
  };


  useEffect(() => {
      setLoading(true);
    if (id) {
      const fetchData = async (id: string) => {
        try {
          const response = await api.get('/products');
          const data = response.data;
          console.log("data",data)
          const filteredItems = data.filter((item: { [x: string]: string }) =>
            ['category', 'description', 'title'].some((key: string) =>
              item[key].toLowerCase().includes(id?.toLowerCase())
            )
          );

          const filteredData: Item[] = filteredItems.filter(({ price, category,rating }: Item) => {
            const priceMatch: boolean =
              markbox.price.length === 0 || markbox.price.some((range) => isPriceInRange(price.toString(), range));

            const categoryMatch: boolean = markbox.categories.length === 0 || markbox.categories.includes(category);

            const ratingMatch:boolean= isRatingMatch(rating.rate,markbox.rating)
            return priceMatch && categoryMatch &&ratingMatch;
          });

          setTrending(filteredData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData(id);
    }
  }, [id, markbox])



  return (
    <div className='searchproduct-container'>
      <div className='searchproduct-container-searchbar'>
        <SearchBar search={searchRef} type={"product"} />
      </div>
      <div className='searchproduct-container-result'>
        <div className='searchproduct-container-result-heading'>
          <h3>Search Results</h3>
        </div>
        <div className='searchproduct-container-result-product'>
          <div className='searchproduct-container-result-product-accordion'>
            <Accordion setMark={setMarkBox} mark={markbox} />
          </div>
          <div className='searchproduct-container-result-product-component'>
            {/* {trending.map((trend: Item, index: number) => (
              <Product key={index} productItem={trend} />
            ))} */}
 {loading ? (
              <Loader/>
            ) : trending.length === 0 ? (
              <h3>No data found</h3>
            ) : (
              trending.map((trend: Item, index: number) => <Product key={index} productItem={trend} />)
            )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchProduct
