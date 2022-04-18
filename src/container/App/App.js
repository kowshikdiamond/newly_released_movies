import React from 'react';
import Card from '../../components/Card';
import cdata from '../../../src/cdata';

// console.log(cdata[1].title);
const App = () => {
  return (
    <>
      <h1 className='heading_style'>List of Newly Released Movies</h1>
      <Card
        imgSrc={cdata[0].imgSrc}
        title={cdata[0].title}
        link={cdata[0].link}
        sname={cdata[0].sname}
      />
      { <Card
        link=' https://in.bookmyshow.com/hyderabad/movies/spiderman-no-way-home/ET00310790'
        imgSrc='https://images.thedirect.com/media/article_full/spider-man-no-way-home-runtime-length-mcu.jpg'
        sname='Spider-Man: No Way Home'
        title="When Dr. Strange`s spell to restore Spider-Man`s identity goes awry, Peter is forced to overcome his greatest challenge yet."
      /> }
      <Card
        imgSrc={cdata[1].imgSrc}
        title={cdata[1].title}
        link={cdata[1].link}
        sname={cdata[1].sname}
      />
      <Card
        imgSrc={cdata[2].imgSrc}
        title={cdata[2].title}
        link={cdata[2].link}
        sname={cdata[2].sname}
      />
      <Card
        imgSrc={cdata[3].imgSrc}
        title={cdata[3].title}
        link={cdata[3].link}
        sname={cdata[3].sname}
      />
      <Card
        imgSrc={cdata[4].imgSrc}
        title={cdata[4].title}
        link={cdata[4].link}
        sname={cdata[4].sname}
      />
      <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
    </>

  );
};

export default App;