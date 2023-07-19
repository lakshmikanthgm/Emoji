import { memo } from 'react';
import styles from './Filter.module.css'

type FilterProps = {
  options: string[]
  onFilterValueChange: (value: string) => void
  label: string
};

const Filter: React.FC<FilterProps> = (props: FilterProps) => {
  return <div>
    <strong className={styles.label}>{props.label}</strong>
    <select onChange={e => props.onFilterValueChange(e.target.value)}>
      {props.options.map((value, index) => (<option key={index} value={value}>{value}</option>))}
    </select>
  </div>;
};

export default memo(Filter);
