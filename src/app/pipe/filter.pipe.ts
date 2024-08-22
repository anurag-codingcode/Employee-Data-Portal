import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data:any[],department:any):any[] {
    return data.filter((user:any)=>user.department==department && user.role=='user')
  }

}
