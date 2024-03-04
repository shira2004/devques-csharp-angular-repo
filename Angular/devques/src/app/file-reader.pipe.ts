import {Pipe , PipeTransform} from "@angular/core"
import { Observable } from "rxjs";

@Pipe({
    name: 'fileReader'
})
export class FileReaderPipe implements PipeTransform {
    transform(file: File): Observable<string | null> {
      const observable = new Observable<string | null>((observer) => {
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            observer.next(e.target?.result as string);
          };
          reader.onerror = (error) => {
            observer.error(error);
          };
          reader.readAsDataURL(file);
        } else {
          observer.next(null);
         
        }
      });
  
      return observable;
    }
  }