import { Routes } from '@angular/router';
import { NavBar } from './common/nav-bar/nav-bar';
import { Dashboard } from './pages/dashboard/dashboard';
import { BookingForm } from './pages/booking-form/booking-form';
import { EventDetails } from './pages/event-details/event-details';
import { EventLibrary } from './pages/event-library/event-library';

export const routes: Routes = [
    
    {
        path:'',
        component:NavBar,
        children:[

            {
                path:'',
                component:Dashboard
            },
            {
                path:'booking',
                component:BookingForm
            },
            {
                path:'eventDetails',
                component:EventDetails
            },
            {
                path:'eventLibary',
                component:EventLibrary
            }
        ]
    },
];
