import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  productForm!: FormGroup;
  l: Login;
  constructor(private login:LoginService ,private f:FormBuilder) { }

  ngOnInit(): void {

    this.afficheruser(); 
    this.productForm=this.f.group({
      id:["",Validators.required],
      pass:["",[Validators.required,Validators.minLength(4)]]
    });


  }

  afficheruser(){
    this.login.getuser()
    .subscribe( data => this.l = data);
    console.log();
  }


actif:boolean=true;
  public get pass()
 { return this.productForm.get('pass'); }

 public get id()
 { return this.productForm.get('id'); }
public verif()
{
  if (this.productForm.get('pass')?.valid &&this.productForm.get('pass')?.valid)
  return false;
  else 
  return true;
}
ch:String;
public verifer()
{
  
  

   if (this.l[0].user==this.productForm.value['id']&&this.l[0].pass==this.productForm.value['pass'])
  {
    this.ch="true";
   return true;
  }
   else 
   {
   
   this.ch="false";
    return false;
  }
}

}




