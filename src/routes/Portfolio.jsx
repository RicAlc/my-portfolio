import React from 'react';
import data from '../data/allcards.json';
import WorkCardList from '../components/WorkCardsList';
import LinkBtn from '../components/LinkBtn';

export function Portfolio() {
  return (
    <div className='portfolio section'>
      <div className='head'>
        <h1 className='title'>Portfolio</h1>
        <LinkBtn
          classname='explore-more'
          link={'https://github.com/RicAlc'}
          text='Portfolio Github'
          newTab={true}
        />
      </div>
      <WorkCardList data={data} />
    </div>
  );
}
