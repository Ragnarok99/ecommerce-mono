import React from 'react';
import type { NextPage } from 'next';
import { Button } from 'ui';

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <span>hola world!!</span>
    <Button />
  </div>
);

export default Home;
