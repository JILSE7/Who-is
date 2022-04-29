import { Card } from 'antd';
import { IMovie } from '../interface/movieDB';

const { Meta } = Card;


const MovieCard = ({movie}:{movie:IMovie}) => {
  return (
    <Card
    hoverable
    style={{ width: 240, height:"500px", margin:"0px 50px 50px 0px" }}
    cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
  >
    <Meta title={movie.title} description="www.instagram.com" />
  </Card>
  )
}

export default MovieCard


