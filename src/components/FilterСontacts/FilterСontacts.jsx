import { useDispatch } from "react-redux"
import { setFilter } from '../redux/filterSlice'

export const FilterСontacts = () => {
    const dispatch = useDispatch()
    const handleChange = e => {
        dispatch(setFilter(e.target.value.toLowerCase().trim()));
      };
    return(
        <input 
        onChange={(e) => handleChange(e)}
        type="text"
        name="filter"
        />
    )
}