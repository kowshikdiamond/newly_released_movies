import React from 'react';
import Card from '../../components/Card';
import mdata from '../../../src/mdata';

// console.log(mdata[1].title);
const App = () => {
  return (
    <>
      <h1 className='heading_style'>List of Newly Released Movies</h1>
      <Card
        imgSrc={mdata[0].imgSrc}
        title={mdata[0].title}
        link={mdata[0].link}
        sname={mdata[0].sname}
      />
      { <Card
        link=' https://in.bookmyshow.com/hyderabad/movies/spiderman-no-way-home/ET00310790'
        imgSrc='https://images.thedirect.com/media/article_full/spider-man-no-way-home-runtime-length-mcu.jpg'
        sname='Spider-Man: No Way Home'
        title="When Dr. Strange`s spell to restore Spider-Man`s identity goes awry, Peter is forced to overcome his greatest challenge yet."
      /> }
      <Card
        imgSrc={mdata[1].imgSrc}
        title={mdata[1].title}
        link={mdata[1].link}
        sname={mdata[1].sname}
      />
      <Card
        imgSrc={mdata[2].imgSrc}
        title={mdata[2].title}
        link={mdata[2].link}
        sname={mdata[2].sname}
      />
      <Card
        imgSrc={mdata[3].imgSrc}
        title={mdata[3].title}
        link={mdata[3].link}
        sname={mdata[3].sname}
      />
      <Card
        imgSrc={mdata[4].imgSrc}
        title={mdata[4].title}
        link={mdata[4].link}
        sname={mdata[4].sname}
      />
      <Card
        imgSrc={mdata[5].imgSrc}
        title={mdata[5].title}
        link={mdata[5].link}
        sname={mdata[5].sname}
      />
    </>

  );
};

export default App;