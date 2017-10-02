import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../services/operation/operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss'],
  providers: [
    OperationService
  ]
})
export class OperationListComponent implements OnInit {

  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.operationService.get(108028027384556387974).subscribe(
        data => {
            console.log(data);
        }
    )
  }

}
