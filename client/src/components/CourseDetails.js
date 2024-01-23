import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourseDetails } from '../services/api';
import { setCourseDetails } from '../redux/actions';

const CourseDetails = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courseDetails);
  console.log("coursedetail",courseDetails);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetailsData = async () => {
      try {
        const data = await fetchCourseDetails(courseId);
        dispatch(setCourseDetails(data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details', error);
        setLoading(false);
      }
    };

    fetchCourseDetailsData();
  }, [courseId, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!courseDetails) {
    return <p>Course not found</p>;
  }

  return (
    <div><strong style={{color:"black"}}>Course_Name :  </strong>
      {courseDetails.name}<br/>
      <strong style={{color:"black"}}>Instructor: </strong> {courseDetails.instructor}<br/>
      <strong style={{color:"black"}}>Description: </strong> {courseDetails.instructor}<br/>
      <strong style={{color:"black"}}>EnrollmentStatus:</strong> {courseDetails.enrollmentStatus}
      <br/>
      <strong style={{color:"black"}}>Course Duration:</strong> {courseDetails.duration}
      <br/>
      <strong style={{color:"black"}}>Schedule:</strong> {courseDetails.schedule}
      <br/>
      <strong style={{color:"black"}}>Location:</strong> {courseDetails.location}
      <br/>
      <strong style={{color:"black"}}>Prerequisites:</strong> {courseDetails.prerequisites}
      <p><strong style={{color:"black"}}>Syllabus:</strong> <ul>
        {courseDetails.syllabus.map((item) => (
          <li key={item.week}>
            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
          </li>
        ))}
      </ul></p>
      <p><strong style={{color:"black"}}>Students:</strong> <ul>
        {courseDetails.students.map((item) => (
          <li key={item.id}>
            <strong>StudentId : </strong>{item.id} 
            <strong> Name:</strong> {item.name} - {item.email}
          </li>
        ))}
      </ul></p>
      <Link to="/" style={{color:"blue"}}> &lt;Back to Home </Link>
    </div>
  );
};

export default CourseDetails;
