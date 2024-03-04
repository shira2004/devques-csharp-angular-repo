import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  // Check if localStorage is defined
  // if (typeof localStorage !== 'undefined') {
  const userString = localStorage.getItem('user');

  if (userString) {
    const user = JSON.parse(userString);

    if (user && typeof user === 'object') {
      return true;
    }
  }

  console.log('There is no current user connected');
  // inject(MatDialog).open
   alert('Login please');

  return false;

};
