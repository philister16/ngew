import { Component, Input, OnInit } from '@angular/core';
import { UserInfos } from '../../user.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap, takeUntil } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { FlashService } from 'src/app/core/services/flash.service';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent extends BaseComponent implements OnInit {
  @Input() userInfos: UserInfos = {};
  userInfosForm: FormGroup;
  isDirty = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private user: UserService, private flash: FlashService) {
    super();
  }

  ngOnInit() {
    this.userInfosForm = this.fb.group({
      gender: [this.userInfos.gender],
      firstname: [this.userInfos.firstname],
      lastname: [this.userInfos.lastname],
      address: [this.userInfos.address],
      address2: [this.userInfos.address2],
      postalCode: [this.userInfos.postalCode],
      city: [this.userInfos.city],
      state: [this.userInfos.state],
      country: [this.userInfos.country]
    });
    this.userInfosForm.valueChanges.pipe(
      tap(() => this.isDirty = true),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  async onSave() {
    try {
      this.isLoading = true;
      await this.user.update({ userInfos: this.userInfosForm.value });
      this.isDirty = false;
    } catch (err) {
      this.flash.err(err.message);
    } finally {
      this.isLoading = false;
    }
  }

}
