import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-hook',
  imports: [CommonModule],
  templateUrl: './component-lifecycle-hook.component.html',
  styleUrl: './component-lifecycle-hook.component.scss'
})
export class ComponentLifecycleHookComponent implements OnChanges,OnInit,AfterContentInit
,AfterViewInit,DoCheck,AfterContentChecked,AfterViewChecked {
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('init');
  }
  ngAfterContentInit(): void {
    console.log('after content init');
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
}
