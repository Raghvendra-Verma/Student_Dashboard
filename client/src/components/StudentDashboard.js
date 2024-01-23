import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEnrolledCourses } from '../redux/actions';
import { Link } from 'react-router-dom';
import { fetchEnrolledCourses } from '../services/api';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const studentId = 102;
  
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  
  console.log("courses",enrolledCourses);

  useEffect(() => {
    const fetchEnrolledCoursesData = async () => {
         // You need to replace 'studentId' with the actual ID of the logged-in student
      const data = await fetchEnrolledCourses(studentId);
      dispatch(setEnrolledCourses(data));
    };

    fetchEnrolledCoursesData();
  }, [dispatch, studentId]);

  return (
    <div>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <strong style={{color:"black"}}>Course Name: </strong>
            {course.name}
            <br/>
            <strong style={{color:"black"}}>Instructor: </strong>
            {course.instructor}
            <br/>
            <strong style={{color:"black"}}>Duration: </strong>
            {course.duration}
            <br/>
            <strong style={{color:"black"}}>Schedule: </strong>
            {course.schedule}
            <br/>
            <strong style={{color:"black"}}>Location: </strong>
            {course.location}
            <br/>
            <strong style={{color:"black"}}>Enrollment Status: </strong>
            {course.enrollmentStatus}
          </li>
        ))}
      </ul>
      <Link to="/">&lt; Back to Home Page</Link>
    </div>
  );
};

export default StudentDashboard;
