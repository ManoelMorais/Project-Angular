import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = 'primary' | 'secondary';

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class BtnPrimaryComponent {
  @Input('btn-text') btnText: string = '';
  @Input() disable: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = 'primary';

  @Output('submit') onSubmit = new EventEmitter();
  submit() {
    this.onSubmit.emit();
  }
}
