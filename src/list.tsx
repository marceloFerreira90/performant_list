import React, { useState } from "react";
import ListHeader from "./listHeader";
import ListItem from "./listItem";

interface ListProps{
    data:any[];
}

const List: React.FunctionComponent<ListProps> = (props:ListProps) => {

const [selectedIndices, setSelectedIndices] = useState<Array<string>>([]);

const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const currentIndex = event.target.value;
  let newIndices:string[] = [];
  //if new index contains the value remove value if it doesn't add the value
  selectedIndices.includes(currentIndex) ? newIndices = selectedIndices.filter((id) => id !== currentIndex): newIndices = [...selectedIndices, currentIndex]
  setSelectedIndices(newIndices);
  };

  const listItemComponents = props.data.map((dataItem,index) => <ListItem index={index} data={dataItem}  onChange={onCheckboxChange} /> );

return (
  <div>
    <ListHeader indices={selectedIndices} />
    {listItemComponents};
  </div>
  );
};

export default List;