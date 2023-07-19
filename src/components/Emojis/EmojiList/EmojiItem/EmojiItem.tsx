import { Emoji } from "../../../../store/reducers/emojiReducer";
import Card from "../../../reusable/Card/Card";
import DisplayInfo from "../../../reusable/DisplayInfo/DisplayInfo";
import './EmojiItem.css'
import { memo } from "react";

interface EmojiItemProps {
  emoji: Emoji
}

const EmojiItem: React.FC<EmojiItemProps> = (props) => {
  return <Card>
    <p className='emoji'>
      {props.emoji.htmlCode.map((code, index) => (<span key={index} dangerouslySetInnerHTML={{ __html: code }}></span>))}
    </p>
    <DisplayInfo label='Name' value={props.emoji.name}></DisplayInfo>
    <DisplayInfo label='Group' value={props.emoji.group}></DisplayInfo>
    <DisplayInfo label='Category' value={props.emoji.category}></DisplayInfo>
  </Card>;
};

export default memo(EmojiItem);
