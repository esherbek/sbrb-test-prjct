import { Injectable } from '@angular/core';

import { MOCKDATA } from '../mockdata';
import { Register } from '../register';
import { Postage } from '../postage';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {

  constructor() { }

  /**
   * getRegisters возвращает список реестров
   */
  getRegisters (): Observable<Register[]> {
    return MOCKDATA.getRegisters()
  }

  /**
   * getPostages фильтрует отправления по номеру реестра
   */
  getPostages (nreg: string): Observable<Postage[]> {
    return MOCKDATA.getPostages().pipe(
      switchMap(data => of(data.filter(post => post.registerNumber === nreg)))
    );
  }

  /**
   * savePostage сохраняет отправление в базе данных и возвращает результат
   * TODO: обработать ошибку
   */
  savePostage (postage: Postage): Observable<Postage|Error> {
    return MOCKDATA.writePosage(postage);
  }


}
