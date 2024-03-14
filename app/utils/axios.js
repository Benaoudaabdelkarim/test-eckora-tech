// utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://164.68.98.192:9010/v1',
});

// Setting default headers
instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzdXBlcl9hZG1pbkBhcGMta291YmEuY29tIiwicm9sZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNzEwMzg4MTM5LCJleHAiOjE3MTIxMTYxMzl9.uGGN3Ir92msVKpJpI6icEFVOpIflfGcaxv2WHig1r1c';

export default instance;
