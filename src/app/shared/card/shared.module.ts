import { CardComponent } from "./card.component";
import { NgModule } from "@angular/core";



@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class SharedModule {}