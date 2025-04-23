import React from 'react';

const Link = ({route}) => {
    return (
      <li className='lg:ml-10 px-4 hover:bg-amber-600 '>
        <a href={route.path}>{route.name}</a>
      </li>
    );
};

export default Link;