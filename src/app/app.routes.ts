import { Routes , RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopleCommentComponent } from './home/navbar/pople-comment/pople-comment.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {path : '' , component : HomeComponent},
    {path : 'test' , component : TestComponent},
    {path : 'navbar/pople-coment' , component : PopleCommentComponent},
    {path : '**' , redirectTo : ''}
];
