import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {    
  }
  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    console.log('snapshot.params', id);
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('snapshot.paramMap', courseId);

    this.activatedRoute.params.subscribe((res: Params) => {
      console.log('params', res['id'], typeof(res['id']));
    });

    this.activatedRoute.paramMap.subscribe((res: ParamMap) => {
      console.log('paramMap', res.get('id'));
      //const courseId = Number(res.get('id'));
    });
  
    this.activatedRoute.params.subscribe((parms:Params)=>{
      console.log(parms);
    });
  }

  getNext(): void {
    this.router.navigate([`/course-details/${5}`]);
  }
}
