import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, MetaDefinition, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  public CurrentBreadcrumb: string;
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.GetRouteData().subscribe(data => {
      this.CurrentBreadcrumb = data.title;
      this.title.setTitle(this.CurrentBreadcrumb);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.CurrentBreadcrumb
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {}

  public GetRouteData() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => !event.snapshot.firstChild),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
