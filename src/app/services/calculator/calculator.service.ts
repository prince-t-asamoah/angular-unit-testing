import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private _loggerService: LoggerService) {}

  add(n1: number, n2: number): number {
    this._loggerService.log('Add operation successful');
    return n1 + n2;
  }

  subtract(n1: number, n2: number): number {
    this._loggerService.log('Subtract operation successful');
    return n1 - n2;
  }
}
