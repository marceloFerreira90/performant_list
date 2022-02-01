import React from 'react';

interface ListItemProps{
    data: any,
    onChange(event: React.ChangeEvent<HTMLInputElement>):void
    index:number
}

class ListItem extends React.Component<ListItemProps> {

    render(): React.ReactNode {
        return (
            <div key={this.props.index}>
                <input type='checkbox' value={this.props.index} onChange={this.props.onChange} />
                <span>{JSON.stringify(this.props.data)}</span>
            </div>
          );
    }
  };

export default ListItem;