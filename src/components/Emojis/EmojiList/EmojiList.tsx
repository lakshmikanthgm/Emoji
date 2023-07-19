import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import EmojiItem from "./EmojiItem/EmojiItem";
import './EmojiList.css'
import Pagination from "../../reusable/Pagination/Pagination";
import { memo, useCallback, useMemo } from "react";
import { setCurrentPage, setCategory } from "../../../store/reducers/emojiReducer";
import Filter from "../../reusable/Filter/Filter";

const EmojiList: React.FC = () => {
  const { emojis, loading, error, currentPage, pageSize, category } = useSelector((state: RootState) => state.emojisState);
  const dispatch = useDispatch();

  const categories = useMemo(() => ['All', ...Array.from(new Set(emojis.map(emoji => emoji.category)))], [emojis])

  const onCurrentPageChange = useCallback((page: number) => dispatch(setCurrentPage(page)), [dispatch]);
  const onFilterValueChange = useCallback((category: string) => dispatch(setCategory(category)), [dispatch]);

  const filteredEmojiByCategory = useMemo(() => {
    return emojis.filter(emoji => emoji.category === category || category === 'All')
  }, [emojis, category])

  const filteredEmojiByPagination = useMemo(() => {
    const lastIndex = currentPage * pageSize;
    const startIndex = lastIndex - pageSize;
    return filteredEmojiByCategory.slice(startIndex, lastIndex)
  }, [pageSize, currentPage, filteredEmojiByCategory])

  if (loading) {
    return <div className="loading">Loading...</div>
  } else if (!!error) {
    return <div className="error">{error}</div>
  } else if (!loading && !emojis.length) {
    return <div className="error">No Emojis Found.</div>
  } else {
    return <>
      <div className="pagination-sorting">
        {emojis.length > 0 && <Filter label='Filter By Category:' options={categories} onFilterValueChange={onFilterValueChange}></Filter>}
        {filteredEmojiByCategory.length > pageSize && <Pagination onCurrentPageChange={onCurrentPageChange} totalItems={filteredEmojiByCategory.length} pageSize={pageSize}></Pagination>}
      </div>
      {filteredEmojiByPagination.length > 0 ? <div className="emoji-container">{filteredEmojiByPagination.map((emoji, index) => (
        <div key={index} className="item-container">
          <EmojiItem emoji={emoji}></EmojiItem>
        </div>
      ))}</div> : <div className="error">No Emojis Found for selected Category.</div>}
    </>
  }
};

export default memo(EmojiList);
