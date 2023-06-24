export class AuthService {
    isLoggedIn: boolean = false ;


    isAuthenticated() {
        return new Promise(
            (resolve,  reject) => {
                setTimeout(()=>{
                    resolve(this.isLoggedIn);
                },600)
            }
        );
    }
    
    logIn(){
        this.isLoggedIn = true ;
    }

    logOut() {
        this.isLoggedIn = false ;
    }
}