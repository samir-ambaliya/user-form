import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  genderCtrl = new FormControl('');
  filteredGenders: Observable<string[]> | undefined;
  genders: string[] = [];
  allGenders: string[] = ['Female','Other' ,'Male'];
  @ViewChild('genderInput') genderInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      entries: this.fb.array([this.createEntry()])
    });
   
  }
  ngOnInit(): void {
    this.filteredGenders = this.genderCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allGenders.slice())),
    );
   
  }
  createEntry(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required], 
       gender: [''] 
    });
  }

  addEntry() {
    const entriesArray = this.form.get('entries') as FormArray;
    entriesArray.push(this.createEntry());
  }

  removeEntry(index: number) {
    const entriesArray = this.form.get('entries') as FormArray;
    entriesArray.removeAt(index);
  }
  get entriesControls(): AbstractControl[] {
    return (this.form.get('entries') as FormArray).controls;  
  }
  onSubmit() {
    if(this.form.valid){
      const formData = this.form.value.entries;
      console.log(formData);
      alert('form is successfully submited')
    }else{
      alert('Enter Valid Details')
    }
   
  }
  add(event: MatChipInputEvent, index: number): void {
    const value = (event.value || '').trim();
  
    if (value) {
      this.genders.push(value);
  
      const genderFormControl = this.entriesControls[index].get('gender') as FormControl;
      const updatedGenderArray = [...genderFormControl.value, value];
      genderFormControl.setValue(updatedGenderArray);
    }
  
    event.chipInput!.clear();
    this.genderCtrl.setValue(null);
  }

  remove(gender: string): void {
    const index = this.genders.indexOf(gender);

    if (index >= 0) {
      this.genders.splice(index, 1);

      this.announcer.announce(`Removed ${gender}`);
    }
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    this.genders.push(event.option.viewValue);
    this.genderInput.nativeElement.value = '';
    this.genderCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allGenders.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
