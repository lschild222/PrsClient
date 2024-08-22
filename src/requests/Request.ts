//import { RequestLine } from "../requestline/RequestLine";
import { RequestLine } from "../requestlines/RequestLine";
import { User } from "../users/User";


export class Request {
  id: number | undefined = undefined;
  description = "";
  justification = "";
  rejectionReason = "";
  deliveryMode = "";
  status = "NEW";
  total: number | undefined;
  userId: number = 107;
  user: User | undefined;
 
  requestLines: RequestLine[] | undefined;
  

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;

    if (initializer.id) this.id = initializer.id;
    if (initializer.description) this.description = initializer.description;
    if (initializer.justification) this.justification = initializer.justification;
    if (initializer.rejectionReason) this.rejectionReason = initializer.rejectionReason;
    if (initializer.deliveryMode) this.deliveryMode = initializer.deliveryMode;
    if (initializer.status) this.status = initializer.status;
    if (initializer.total) this.total = initializer.total;
    if (initializer.userId) this.userId = initializer.userId;
    if (initializer.user) this.user = initializer.user;
    if(initializer.requestLines) this.requestLines = initializer.requestLines;
  }
}
