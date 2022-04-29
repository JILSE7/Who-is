import { Card } from 'antd';

import { IMovie } from '../interface/movieDB';

const { Meta } = Card;


const MovieCard = ({movie, showModal}:{movie:IMovie, showModal:(movie:IMovie)=>void}) => {
  console.log(movie.video);
  return (
    <Card
    hoverable
    style={{ width: 240, height:"500px", margin:"0px 50px 50px 0px", textAlign:"center"}}
    cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
    onClick={() => showModal(movie)}
  >
    <Meta  title={movie.title} description="Ver Información" />
  </Card>
  )
}

export default MovieCard


