import React from 'react';

type Props = {};

const VerticalMarquee = (props: Props) => {
  const items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='container lg:w-[33%]'>
      <ul className='vertical-marquee p-1'>
        {items.map((items, index) => {
          return (
            <li
              key={`index--${index}`}
              className={`marque-item `}
              style={
                {
                  '--index': index,
                } as React.CSSProperties
              }>
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VerticalMarquee;
