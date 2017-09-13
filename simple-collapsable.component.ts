import { Component, Input } from '@angular/core';

@Component({
  selector: 'perdcomp-collapsable',
  templateUrl: './simple-collapsable.component.html',
  styleUrls: ['./simple-collapsable.component.scss']
})
export class SimpleCollapsableComponent {

  @Input() show = false;

  toggleCollapse() {
    this.show = !this.show;
  }
}
