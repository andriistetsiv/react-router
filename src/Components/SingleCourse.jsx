import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';


const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.courseSlug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    } 
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.slug}</h1>
      <h2>{course?.titlle}</h2>
      <h3>{course?.id}</h3>
      <Link to="/courses">All courses</Link>
    </>
  );
};

export default SingleCourse;
// <Link to='..'  relative='path'>All courses</Link>
//if(!course) {
// return (
//  <>
// <NotFound/>
//  <Link to='/courses'>All courses</Link>
// </>
//  )
//}
