import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const userString = localStorage.getItem('user');
  
  if (userString) {
    const user = JSON.parse(userString);
    
    if (user && typeof user === 'object') {
      return true;
    }
  }
  console.log('there is no current user connected');
  alert('login please ')
  
  return false;
};
