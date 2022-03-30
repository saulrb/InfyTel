import { Injectable } from "@angular/core";

@Injectable()
export class InformationService {
  // baseURL = "http://localhost:8000";

  phoneNo: number;

  customerBaseUrl = "http://localhost:8200";
  loginUrl = "http://localhost:8200/login";
  registerUrl = "http://localhost:8200/customers/";
  profileUrl = "http://localhost:8200/customers/";
  viewPlanUrl = "http://localhost:8400/plans/";
  callDetailUrl = `http://localhost:8100/customers/`;
  addFriendUrl = `http://localhost:8300/customers/`;

}
