// components/CourseList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../redux/actions';
import { fetchCourses } from '../services/api';
import { Link } from 'react-router-dom';
import "../App.css";

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchCoursesData = async () => {
      const data = await fetchCourses();
      dispatch(setCourses(data));
    };

    fetchCoursesData();
  }, [dispatch]);

  return (
    <div>
      <h1 style={{color: "black"}}>Course Listing</h1>
      <table border={5}>
        <thead>
          <tr>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <Link to={`/courses/${course._id}`}>
              <td style={{color:"blue"}}>{course.name}</td>
              </Link>  
            </tr>
          ))}
        
        </tbody>
      </table>
      
      <Link to="/dashboard" style={{color:"white"}}>Go to Dashboard &gt;</Link>
    </div>
  );
};

export default CourseList;
