import React from 'react';

interface ListHeaderProps{
    indices:string[]
}

class ListHeader extends React.Component<ListHeaderProps> {

    getTextFromSelectedIndices()
    {
        return 'Selected:'+  this.props.indices.sort().map((index) => ` ${index}`);
    }


    render()
    {
        return (
            <div>
                <span>{this.getTextFromSelectedIndices()}</span>
            </div>
          );
    }
  };

export default ListHeader;