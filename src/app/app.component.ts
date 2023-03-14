
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from './models/table-users';
import { TableService } from './service/table.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  student: Student[] = [];
  public displayedColumns = ['name', 'email', 'phone', 'website', 'company.name'];
  public dataSource = new MatTableDataSource<Student>();
  data: Student | any;
  title: any;


  constructor(private studentApiService: TableService) {
  }

  ngOnInit() {
    this.getData();
  
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter)
  };
  }


  getData() {
    this.studentApiService.getTableData()
      .subscribe((res:any) => {
        this.data = res
        this.dataSource.data = this.data;
      })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}