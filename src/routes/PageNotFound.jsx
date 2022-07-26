import React from 'react';
import error404 from '../assets/notfound.png';

export function PageNotFound() {
  return (
    <div className='notfound section'>
      <h1 className='notfound__title'>
        No econtramos esta la página que estás buscando
      </h1>
      <img
        src={error404}
        className='notfound__img'
        alt='Ilustración página no encontrada'
      />
    </div>
  );
}
