import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUserString]'
})
export class UserStringDirective {
  private text!: string;  
  private type!: string;


  @Input()set appUserString(value:string){
    console.log(value)
    this.templateRef.createEmbeddedView(this.templateRef).rootNodes[0].textContent=value
  }

  // @Input('appUserString') set appUserString(text: string) {
  //   console.log('mappUserStringyDir:', text);
  //   this.text = text;
  // }

  // @Input('myDirType') set myDirType(type: string) {
  //   console.log('myDirType:', type);
  //   this.type = type;
  // }

  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

}
