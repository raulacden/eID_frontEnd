import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from './address-modal.component';

describe('AddressModalComponent', () => {
  let component: AddressModalComponent;
  let fixture: ComponentFixture<AddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressModalComponent ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
