/*
 * Copyright © 2026 Anaïse Louis. All rights reserved.
 */

import { ChangeDetectionStrategy, Component }                                                                                                                                                                     from "@angular/core";
import { ReactiveFormsModule }                                                                                                                                                                                    from "@angular/forms";
import { AsideComponent, BoxComponent, HeaderComponent, HeadingGroupComponent, ImageComponent, InspectorComponent, RouteAsideDirective, RouteInspectorDirective, ScrollStackComponent, ScrollStackItemDirective } from "@bowstring/surface";
import { RouteComponent }                                                                                                                                                                                         from "../../../../";


@Component(
  {
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports:         [
      AsideComponent,
      BoxComponent,
      HeaderComponent,
      HeadingGroupComponent,
      ImageComponent,
      InspectorComponent,
      ReactiveFormsModule,
      RouteAsideDirective,
      RouteInspectorDirective,
      ScrollStackComponent,
      ScrollStackItemDirective,
    ],
    styleUrl:        "HomeRouteComponent.sass",
    templateUrl:     "HomeRouteComponent.html",

    standalone: true,
  },
)
export class HomeRouteComponent
  extends RouteComponent {
}
