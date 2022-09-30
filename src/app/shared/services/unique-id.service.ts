import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prefix}-${uniqueId}`;
  }

  private generateUniqueId(): string {
    return uuid.v1();
  }
}
