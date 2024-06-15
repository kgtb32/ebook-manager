import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  readonly rotateOperations = [
    "Do not rotate",
    "Rotate 90° Clockwise",
    "Rotate 90° CounterClockwise"
  ]

  readonly colorOptions = [
    "Black and White",
    "Color"
  ]

  readonly selectionsApplyTo = [
    "All pages",
    "Odd pages",
    "Individual Pages"
  ]

  currentRotateOption = this.rotateOperations[0]
  currentColorOption = this.colorOptions[0]
  currentSelectionApplyTo = this.selectionsApplyTo[0]
}
