import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../../alert/alert.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;
  search: Subject<string> = new Subject<string>();
  profile: any;
  selectedUserProfile: string;
  loading: boolean;
  noDataFound: boolean;

  keyup: Subject<string> = new Subject<string>();
  private searchUpdated: Subject<string> = new Subject<string>();
  constructor(
    private searchService: SearchService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loading = false;
    this.search.debounceTime(500).distinctUntilChanged().subscribe((searchTerm) => {
      if (searchTerm && searchTerm !== '') {
        this.loading = true;
        this.searchService.getUser(searchTerm)
          .subscribe(
          data => {
            this.noDataFound = false;
            if (data.items.length !== 0) {
              this.profile = data.items;
              this.loading = false;
            } else {
              this.noDataFound = true;
              this.loading = false;
            }
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
            this.noDataFound = false;
          });
      }
    });
  }

  onSearch(searchText: string) {
    this.alertService.clear();
    this.noDataFound = false;
    this.search.next(searchText);
  }

  onProfileClick(selectedProfileUserData: any) {
    sessionStorage.setItem('selectedUserProfileData', JSON.stringify(selectedProfileUserData));
    this.router.navigate(['/profile']);
  }
}
