import { Routes } from '@angular/router';
import { NavBar } from './common/nav-bar/nav-bar';
import { Dashboard } from './pages/dashboard/dashboard';
import { BookingForm } from './pages/booking-form/booking-form';

export const routes: Routes = [
    {
        path:'',
        component:Dashboard
    },
    {
        path:'booking',
        component:BookingForm
    },
];
