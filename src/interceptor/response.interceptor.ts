
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
    status : string;
    message : string;
    payload: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
      context: ExecutionContext,
      next: CallHandler
      ): Observable<Response<T>> {
    return next.handle().pipe(
        map(data => ({ 
            status : HttpStatus.OK.toString(),
            message : 'OK',
            payload : data ? data : null
        })),
    );
  }
}