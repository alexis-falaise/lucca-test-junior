import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IActivity } from './activity.model';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) {}

  getActivities(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(`/api/activities`);
  }

  /**
   * Get an activity by id
   * @param id : Activity unique identifier
   */
  getActivityById(id: string): Observable<IActivity> {
    return this.http.get<IActivity>(`/api/activity/${id}`);
  }

  /**
   * Get a list of activities for a given destination
   * @param destinationId : Destination unique identifier
   */
  getActivitiesByDestinationId(destinationId: string): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(`/api/activities?destinationId=${destinationId}`);
  }
}
