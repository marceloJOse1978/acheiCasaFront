export function getCurrentUser() {
    if (typeof window === 'undefined') return null;
  
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  
  export function isAuthenticated() {
    return !!getCurrentUser();
  }
  