import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { NoticiasComponent } from '../noticias/noticias.component';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticia:any={
    "img":"assets/img/planta/camarones.jpeg",
    "date":"MAY 8, 2018",
    "cat":"Brigada médica",
    "title":"From Wetlands To Canals And Dams Amsterdam Is Alive",
    "content":"Lorem ipsum dolor sit amet, consectetur sita adipiscing elit. Proin molestie accumsan orci suneget placerat. Etiama faucibuss orci quis posuere vestibulu. Ut id purusos ultricies, dictumax quam id, ullamcorper urna. Curabitur sitdown nisi vitae nisi vestotana vestibul ut non massa. Aliquam erat volutpat. Morbi nect nunc et orci euismode finibus. Donec lobortis venenatis turpis. Aenean act congue arcu, nect porttitor magna. Nam consequa ligula nibh, in maximus gravida. Vivamus nuornare masa. Quisque sed honcus leo, ullamcorper auctor mi. Maecenas mollis purus, mattis nisl condimentum. Nam eros elementu, congue diam imperdiet, interdum tellus.",    
    "quote":{"quote":"“Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works. The design of the Mac wasn't what it looked like, although that was part of it.”","author":"STEVE JOBS"},
    "author":{
      "img":"assets/img/team/team02.jpg",
      "name":"Alan Shaerer",
      "descr":"Duis tincidunt turpis sodales, tincidunt nisi et, auctor nisi. Curabitur vulputate sapien eu metus ultricies fermentum nec vel augue. Maecenas eget lacinia est."
    }
  }

  @Input('childMessage') child: String;
  constructor(public activatedRoute: ActivatedRoute) { }
  @Input() noticias: NoticiasComponent;
  state$: any;
  car: any;
  ngOnInit(): void {
    this.state$ = this.activatedRoute.snapshot.params['details'];
    this.car = this.activatedRoute.snapshot.params['id'];
   console.log(this.car)
  }

}
