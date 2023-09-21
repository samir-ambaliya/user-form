import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplateSwitch]'
})
export class TemplateSwitchDirective {

  @Input() set appTemplateSwitch(templateName: string) {
    
    this.viewContainer.clear();
    if (templateName === 'employee' || templateName === 'company' || templateName === 'customer') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
