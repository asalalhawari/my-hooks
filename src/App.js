import React from 'react';
import './App.css'; // يمكن تركه فارغًا أو استخدامه لتصميم الصفحة الرئيسية
import UserForm from './components/UserForm'; // استيراد النموذج

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
