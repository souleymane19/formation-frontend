import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'formation-backend';
  router = inject(Router)

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (token){
      const jwHelper = new JwtHelperService()
      const decodeToken = jwHelper.decodeToken(token)
      const isTokenExpired = jwHelper.isTokenExpired()
      const admin = decodeToken.authorities[0].authority=="ADMIN";
      const formateur = decodeToken.authorities[0].authority=="FORMATEUR"
      const user = decodeToken.authorities[0].authority=="APPRENANT"

       if (admin){
         this.router.navigate(["admin/dashboard"]);
       } else if (user){
         this.router.navigate(["user/dashboard"]);
       }else if (formateur){
         this.router.navigate(["formateur/dashboard"]);
       }

    } else {
      // Si le token n'existe pas, rediriger vers la page de connexion
      this.router.navigate(["acceil"]); // Modifiez "login" en fonction de votre route de connexion
    }
  }

 // url = '';

  // onSelectFile(event: Event) {
  //   // @ts-ignore
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //
  //     // @ts-ignore
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       // @ts-ignore
  //       this.url = event.target.result;
  //     }
  //   }
  // }


}
