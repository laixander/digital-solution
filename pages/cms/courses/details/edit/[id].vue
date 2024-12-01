<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Details Page</h1>
      <p>Subject: {{ details.subject }}</p>
      <p>Department: {{ details.department }}</p>
      <p>Type: {{ details.type }}</p>
      <p>Grade Type: {{ details.gradeType }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';
  
  // Simulated data (in real cases, fetch from API)
  const sampleData = [
    { id: 1, subject: 'Mathematics', department: 'Science', type: 'Lecture', gradeType: 'Numeric' },
    { id: 2, subject: 'History', department: 'Humanities', type: 'Seminar', gradeType: 'Pass/Fail' },
  ];
  
  const route = useRoute();
  const id = route.params.id;
  
  // Fetch details based on ID
  const details = ref(sampleData.find((item) => item.id === parseInt(id, 10)));
  </script>
  