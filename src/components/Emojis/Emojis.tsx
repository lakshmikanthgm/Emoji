import { memo, useCallback, useEffect } from "react";
import EmojiList from "./EmojiList/EmojiList";
import { useDispatch } from "react-redux";
import { setEmojis, setError, setLoading } from "../../store/reducers/emojiReducer";

const Emojis: React.FC = () => {

  const dispatch = useDispatch();

  const emojiResponse = useCallback(async () => {
    dispatch(setLoading(true))
    try {
      const emojiResponse = await fetch('https://emojihub.yurace.pro/api/all', {
        method: 'GET',
        headers: { 'content-Type': 'application/json' }
      })
      const emojis = await emojiResponse.json()
      dispatch(setEmojis(emojis))
    } catch (e) {
      dispatch(setError('Error occured while fectching Emojis.'))
    }
  }, [dispatch])

  useEffect(() => {
    emojiResponse()
  }, [emojiResponse])

  return (<>
    <EmojiList></EmojiList>
  </>)
}

export default memo(Emojis);