import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponent } from './http.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  let service : DataService;
  let spyLoadUser: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService)
    spyLoadUser = spyOn( service , 'loadUsers').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar los usuarios al inicio', () =>{
    component.ngOnInit();
    expect('loadUsers').toHaveBeenCalled()
  })
});
