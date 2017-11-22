import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  birthday = new Date(1988, 3, 15);
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) {

    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }

}
