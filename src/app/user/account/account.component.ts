import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent extends BaseComponent implements OnInit {
  currentUser: User;

  constructor(public user: UserService) {
    super();
  }

  ngOnInit(): void {
    this.user.currentUser$
      .pipe(
        takeUntil(this.destroyed$),
        tap(user => {
          if (user) {
            this.currentUser = user;
          }
        })
      )
      .subscribe();
  }
}
