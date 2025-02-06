import { Component } from 'react';
import { Character } from '@/shared/types/character.ts';

interface CardProps {
  item: Character;
}

class Card extends Component<CardProps> {
  render() {
    const { item } = this.props;

    return (
      <div className="p-4 rounded-xl border border-emerald-600 shadow-md bg-white max-w-xs w-full h-full flex flex-col justify-between">
        <div className="flex flex-col items-center gap-3 flex-1">
          <div>
            <img
              className="w-full h-40 object-cover rounded"
              src={item.image}
              alt={item.name}
            />
          </div>
          <h3 className="font-bold text-orange-400 text-lg text-center">
            {item.name}
          </h3>
          <div className="text-gray-600 space-y-1 text-xs text-center flex-1">
            <p>
              <span className="font-bold">Gender:</span> {item.gender}
            </p>
            <p>
              <span className="font-bold">Status:</span> {item.status}
            </p>
            <p className="break-words">
              <span className="font-bold">Location:</span> {item.location.name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
