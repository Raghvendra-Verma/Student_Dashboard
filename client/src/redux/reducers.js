export const SET_COURSES = 'SET_COURSES';
export const SET_ENROLLED_COURSES = 'SET_ENROLLED_COURSES';
export const SET_COURSE_DETAILS = 'SET_COURSE_DETAILS';


const initialState = {
    courses: [],
    enrolledCourses: [],
    courseDetails: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COURSES':
        return { ...state, courses: action.payload };
      case 'SET_ENROLLED_COURSES':
        return { ...state, enrolledCourses: action.payload };
      case 'SET_COURSE_DETAILS':
    return { ...state, courseDetails: action.payload };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  