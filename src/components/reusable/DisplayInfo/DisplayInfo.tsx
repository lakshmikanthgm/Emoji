import { memo } from 'react';
import './DisplayInfo.css'

interface DisplayInfoProps {
  label: string
  value: string
}

const DisplayInfo: React.FC<DisplayInfoProps> = (props) => {
  return <div className='label-container'>
    <strong>{props.label}</strong>:
    <span className="label">{props.value}</span>
  </div>;
};

export default memo(DisplayInfo);
