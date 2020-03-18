import React from 'react'
import { Dropdown } from 'semantic-ui-react'

let options = [
  // { key: 'angular', text: 'Angular', value: 'angular' },
]

const MultipleSelect = (props) => 
{
  options=[];
  for(let i = 0 ; i<props.data.length ; i++)
  {
    options.push({key: props.data[i][0], text: props.data[i][0], value: props.data[i][0]});
  }
return (
  <Dropdown placeholder='Skills' fluid multiple selection options={options} />
)
}

export default MultipleSelect;