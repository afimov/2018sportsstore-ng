import {NgModel} from '@angular/forms';
import {ProductRepository} from './product.repository';
import {StaticDatasource} from './static.datasource';
import {NgModule} from "@angular/core";

@NgModule({
  providers: [ProductRepository, StaticDatasource]
})
export class ModelModule {}
