import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-prime-page',
  standalone: true,
  imports: [ButtonModule,MenubarModule,SpeedDialModule,ToastModule],
  templateUrl: './prime-page.component.html',
  styleUrl: './prime-page.component.css'
})
export class PrimePageComponent implements OnInit {
  items: MenuItem[] | undefined;
    constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
        {
            icon: 'pi pi-pencil',
            command: () => {
                this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            icon: 'pi pi-refresh',
            command: () => {
                this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            icon: 'pi pi-trash',
            command: () => {
                this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            icon: 'pi pi-upload',
            routerLink: ['/fileupload']
        },
        {
            icon: 'pi pi-external-link',
            target: '_blank',
            url: 'http://angular.io'
        }
    ];
}
    // this.items = [
    //     {
    //         label: 'Home',
    //         icon: 'pi pi-home'
    //     },
    //     {
    //         label: 'Features',
    //         icon: 'pi pi-star'
    //     },
    //     {
    //         label: 'Projects',
    //         icon: 'pi pi-search',
    //         items: [
    //             {
    //                 label: 'Components',
    //                 icon: 'pi pi-bolt'
    //             },
    //             {
    //                 label: 'Blocks',
    //                 icon: 'pi pi-server'
    //             },
    //             {
    //                 label: 'UI Kit',
    //                 icon: 'pi pi-pencil'
    //             },
    //             {
    //                 label: 'Templates',
    //                 icon: 'pi pi-palette',
    //                 items: [
    //                     {
    //                         label: 'Apollo',
    //                         icon: 'pi pi-palette'
    //                     },
    //                     {
    //                         label: 'Ultima',
    //                         icon: 'pi pi-palette'
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         label: 'Contact',
    //         icon: 'pi pi-envelope'
    //     }
    // ]
    
    
}


