import { SET_COURSES, SET_ENROLLED_COURSES ,SET_COURSE_DETAILS } from '../redux/reducers';


export const setCourses = (courses) => ({
    type: SET_COURSES,
    payload: courses,
  });
  
  export const setEnrolledCourses = (enrolledCourses) => ({
    type: SET_ENROLLED_COURSES,
    payload: enrolledCourses,
  });
  
export const setCourseDetails = (courseDetails) => ({
    type: SET_COURSE_DETAILS,
    payload: courseDetails,
  });
  