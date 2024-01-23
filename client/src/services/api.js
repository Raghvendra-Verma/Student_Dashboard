// services/api.js
const API_URL = 'http://localhost:3001';

export const fetchCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  return response.json();
};

export const fetchCourseDetails = async (courseId) => {
  const response = await fetch(`${API_URL}/courses/${courseId}`);
  return response.json();
};

export const fetchEnrolledCourses = async (studentId) => {
  const response = await fetch(`${API_URL}/courses/enrolled/${studentId}`);
  return response.json();
};
