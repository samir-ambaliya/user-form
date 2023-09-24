import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplateSwitch]'
})
export class TemplateSwitchDirective {

  @Input() set appTemplateSwitch(templateName: string) {
    console.log(templateName)
    if (this.caseArray.includes(templateName)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }

  // @Input() set myStructuralDirective(value: string) {
  //   if (this.caseArray.includes(value)) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  private caseArray = ['employee', 'company', 'customer'];

}
