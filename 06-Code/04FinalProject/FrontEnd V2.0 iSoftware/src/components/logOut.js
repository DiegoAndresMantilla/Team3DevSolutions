import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function logOut(){
    cookies.remove('id',{path:"/"});
    cookies.remove('cedula',{path:"/"});
    cookies.remove('name',{path:"/"});
    cookies.remove('lastName',{path:"/"});
    window.location.href='./'
}